import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import mapboxgl from 'mapbox-gl';
import mapboxdraw from '../../../other/mapbox-gl-draw';
import axios from 'axios';
import { animateScroll as scroll } from 'react-scroll';

import Pop from '../deck_mapa/Popup';
import { pointsWithinPolygon } from '@turf/turf';
import { FETCH_MARKERS, filterMarkers } from '../../../ducks/marcadores';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-draw/dist/mapbox-gl-draw.css';
import './custom-mapbox-css.css';

export const ROOT_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://monitoreociudadano.uniandes.edu.co:8000'
        : 'https://monitoreociudadano.uniandes.edu.co:8000';

mapboxgl.accessToken =
    'pk.eyJ1IjoiZmFiaW9lc3Bpbm9zYSIsImEiOiJjaWVtMGJ4a28wMDdnNHFrbjY1OWtxbXN6In0.nSjm5Xx8l3Hg4JqTjkdm0w';

class App2 extends Component {
    tooltipContainer;
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [-74.063644, 4.624335],
            zoom: 8
        });

        this.draw = new mapboxdraw({
            displayControlsDefault: false,
            controls: {
                polygon: true,
                trash: true
            }
        });

        this.map.addControl(this.draw);

        this.map.on('load', () => {
            axios.get(`${ROOT_URL}/registros_geo`).then(res => {
                console.log(res);
                this.markers = res.data.features;
                res.data.features.forEach(marker => {
                    this.tooltipContainer = document.createElement('div');
                    this.tooltipContainer.addEventListener(
                        'click',
                        this.showRadius.bind(null, marker)
                    );
                    this.tooltipContainer.className = 'marker';
                    new mapboxgl.Marker(this.tooltipContainer)
                        .setLngLat(marker.geometry.coordinates)
                        .setPopup(
                            new mapboxgl.Popup({ offset: 25 }) // add popup (info al hace click en el marcador)
                                .setHTML(
                                    ReactDOMServer.renderToStaticMarkup(<Pop />)
                                )
                        )
                        .addTo(this.map);
                });

                // Add to redux store:
                res.data.features = res.data.features.map(feature => {
                    feature.properties.date = d3.timeParse('%d/%m/%Y %H:%M:%S')(
                        feature.properties.timestamp
                    );
                    return feature;
                });
                this.props.dispatch({
                    type: FETCH_MARKERS,
                    payload: res.data.features
                });
            });
        });
        this.map.on('draw.create', this.showSelectedPoints);
        this.map.on('draw.delete', this.showSelectedPoints);
        this.map.on('draw.update', this.showSelectedPoints);
    }

    showRadius = (e, marker) => {
        console.log('hola');
        console.log(e);
        console.log(marker);
    };

    showSelectedPoints = e => {
        const data = this.draw.getAll();
        const points = {
            type: 'FeatureCollection',
            features: this.markers
        };
        let ptsWithin;
        if (data.features.length > 0) {
            ptsWithin = pointsWithinPolygon(points, data);
            this.props.filterMarkers(ptsWithin.features);
            scroll.scrollToBottom(200);
        }
    };

    render() {
        return (
            <div>
                <div className="mapa" ref={el => (this.mapContainer = el)} />
                <style jsx>{`
                    .mapa {
                        width: 100%;
                        height: 600px;
                    }
                `}</style>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        filterMarkers: ptsWithin => dispatch(filterMarkers(ptsWithin))
    };
};

export default connect(null, mapDispatchToProps)(App2);
