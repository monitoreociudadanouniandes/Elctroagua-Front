import _ from "lodash";
import React, { Component } from "react";
import MapGL, {
  Popup,
  FlyToInterpolator,
  LinearInterpolator
} from "react-map-gl";
import DeckGLOverlay from "./deckgl-overlay.js";
import axios from "axios";

import { timeParse, scaleTime } from "d3";

import { json as requestJson } from "d3-request";
import location from "./data/location-icon-mapping.json";
import image from "./data/location-icon-atlas.png";
// import image from './data/icon-atlas.png';
import Pop from "./Popup";

import Dimensions from "react-dimensions";
import { ROOT_URL } from "../mapa_poligono/Mapa";

import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-draw/dist/mapbox-gl-draw.css";

// import '../../poligono/mapa_poligono/custom-mapbox-css.css';

// Set your mapbox token here
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZmFiaW9lc3Bpbm9zYSIsImEiOiJjaWVtMGJ4a28wMDdnNHFrbjY1OWtxbXN6In0.nSjm5Xx8l3Hg4JqTjkdm0w"; // eslint-disable-line

// Source data CSV
const DATA_URL =
  "https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/icon/meteorites.json"; // eslint-disable-line

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport,
        width: this.props.containerWidth,
        height: 600
      },
      data: null,
      iconMapping: null,
      popup: null
    };
    const { region } = props;
    axios
      .get(
        `${ROOT_URL}/registros_geo/${
          typeof region !== "undefined" ? region : ""
        }`
      )
      .then(res => {
        res.data.features = res.data.features.map(actual => {
          actual.properties.date = timeParse("%d/%m/%Y %H:%M:%S")(
            actual.properties.timestamp
          );
          let nuevo = { ...actual.properties, ...actual.geometry };
          return nuevo;
        });
        this.setState({ data: res.data.features });
        // this.props.dispatch({
        //   type: FETCH_MARKERS,
        //   payload: res.data.features
        // });
      });

    // requestJson(DATA_URL, (error, response) => {
    // 	if (!error) {
    // 		this.setState({ data: response });
    // 	}
    // });
  }

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this));
    this._resize();
    this.setState({ iconMapping: location });

    // Hacer que el popup sea scrolliable
    this._handleScroll = this._handleScroll.bind(this);
    document.addEventListener("wheel", this._handleScroll);
  }

  // Hacer que el popup sea scrolliable
  componentWillUnmount() {
    document.removeEventListener("wheel", this._handleScroll);
    window.removeEventListener("resize", this._resize);
  }

  // Hacer que el popup sea scrolliable
  _handleScroll = function(e) {
    if (this.state.popup) {
      if (this.scrollableDiv.contains(e.target) && this.state.popup) {
        e.preventDefault();
        const dY = e.deltaY;
        this.scrollableDiv.scrollTop += dY;
      }
    }
  };

  _resize() {
    this._onViewportChange({
      width: this.props.containerWidth
    });
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  // Coge los datos alrededor del click:
  getDataFromArray = object => {
    const data = object.zoomLevels.filter(array => {
      if (array !== null) {
        if (array.points.length > 0) {
          return true;
        }
      }
      return false;
    });
    if (data[0]) {
      const maximum_label = data[0].icon;
      let returned = data[0];
      let minimum = 10000000;
      for (var i = 0; i < data.length; i++) {
        if (
          data[i].icon === maximum_label &&
          data[i].neighbors_length < minimum
        ) {
          minimum = data[i].neighbors_length;
          returned = data[i];
        }
        if (data[i].icon !== maximum_label) {
          object.data = returned.points;
          return object;
        }
      }
      // Si no encontro uno menor:
      object.data = returned.points;
      return object;
    }
  };

  // order by date
  // coger minimum y maximum de la date
  // Hacer un objecto de fechas con arrays.
  // recorrer el arreglo ordenado por date,
  // si el actual ya tiene fecha agregarlo al array de la propiedad del objecto
  // Si no, pues crear un array con ese
  // Recorrer las propiedades de ese objecto calculando un array final por propiedad que tenga en cada casilla el promedio de su bucket y la length de la cual se calculo el promedio
  // setstate.
  fillNulls = object => {
    // Para la line/bar chart:
    const other = Object.assign({}, object);
    const { data } = object;
    console.log(other.data);
    object.original_data = data;
    object.cantidad = data.length;

    data.sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      if (date1 < date2) {
        return -1;
      }
      return 1;
    });

    const min = data[0];
    const max = data[data.length - 1];

    const hash = {};

    // Los mete en el hash
    data.forEach(point => {
      const date = new Date(point.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const string = `${day}/${month}/${year}`;

      if (hash[string]) {
        hash[string].push(point);
      } else {
        hash[string] = [point];
      }
    });

    const final = [];
    Object.keys(hash).forEach(key => {
      const final_object = {};
      final_object.items = hash[key].length;
      final_object.name = key;
      final_object.pH = _.meanBy(hash[key], o => parseFloat(o.pH));
      final_object.od = _.meanBy(hash[key], o => parseFloat(o.od));
      final_object.hg = _.meanBy(hash[key], o => parseFloat(o.hg));
      final_object.temp = _.meanBy(hash[key], o => parseFloat(o.temp));
      final_object.conduct = _.meanBy(hash[key], o => parseFloat(o.conduct));
      final_object.date = hash[key][0].date;
      final.push(final_object);
    });

    object.data = final;

    const nulls = [];
    for (var i = 0; i < final.length; i++) {
      nulls.push(final[i]);
      if (i < final.length - 2) {
        let actual_date = final[i].date;
        const nulls_to_create =
          days_between(final[i].date, final[i + 1].date) - 1;
        for (var j = 1; j <= nulls_to_create; j++) {
          const next_date = new Date(actual_date);
          next_date.setDate(next_date.getDate() + 1);
          const year = next_date.getFullYear();
          const month = next_date.getMonth() + 1;
          const day = next_date.getDate();
          const string = `${day}/${month}/${year}`;
          nulls.push({ name: string });
          actual_date = next_date;
        }
      }
    }

    object.data = nulls;

    // Para el scatter chart:
    var timeScale = scaleTime()
      .domain([min.date, max.date])
      .range([0, 700]);

    object.original_data = object.original_data.map(point => {
      point.x = timeScale(point.date);
      const year = point.date.getFullYear();
      const month = point.date.getMonth() + 1;
      const day = point.date.getDate();
      point.name = `${day}/${month}/${year}`;
      return point;
    });
    const other3 = Object.assign({}, object);
    console.log("2", other3);
    this.setState({ popup: object });
  };

  render() {
    const { viewport, data, iconMapping, popup } = this.state;

    return (
      <div>
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={this._onViewportChange.bind(this)}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <DeckGLOverlay
            viewport={viewport}
            data={data}
            iconAtlas={image}
            iconMapping={iconMapping}
            showCluster={true}
            onHover={() => {}}
            onClick={value => {
              let { object } = value;
              const other = Object.assign({}, object);
              console.log("0", other);
              object = this.getDataFromArray(object);
              const other2 = Object.assign({}, object);
              console.log("1", other2);
              this.fillNulls(object);
              this.setState({
                viewport: {
                  ...this.state.viewport,
                  longitude: value.newCoords[0],
                  latitude: value.newCoords[1],
                  transitionInterpolator: new LinearInterpolator(),
                  transitionDuration: 700
                }
              });
            }}
          />
          {popup && (
            <div style={{ overflowY: "scroll" }}>
              <Popup
                anchor="bottom"
                tipSize={5}
                longitude={+popup.longitude}
                latitude={+popup.latitude}
                closeButton={true}
                closeOnClick={false}
                captureScroll={true}
                onClose={value => {
                  this.setState({ popup: null });
                }}
              >
                <div ref={e => (this.scrollableDiv = e)} className="popup">
                  <Pop
                    close={() => this.setState({ popup: null })}
                    {...popup}
                  />
                </div>
              </Popup>
            </div>
          )}
        </MapGL>
        <style jsx>{`
          .popup {
            max-height: 420px;
            overflow-y: scroll;
          }
        `}</style>
      </div>
    );
  }
}

Root = Dimensions()(Root);
export default Root;

// Helpers:
function days_between(date1, date2) {
  // The number of milliseconds in one day
  var ONE_DAY = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = Math.abs(date1_ms - date2_ms);

  // Convert back to days and return
  return Math.round(difference_ms / ONE_DAY);
}
