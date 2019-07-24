import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import Dimensions from 'react-dimensions';

import { FETCH_MARKERS, filterMarkers } from '../../../ducks/marcadores';
import CityPin from './CityPin';
import Pop from '../mapa_poligono/Popup';

import { ROOT_URL } from '../mapa_poligono/Mapa';
const TOKEN =
	'pk.eyJ1IjoiZmFiaW9lc3Bpbm9zYSIsImEiOiJjaWVtMGJ4a28wMDdnNHFrbjY1OWtxbXN6In0.nSjm5Xx8l3Hg4JqTjkdm0w';

class Mapa extends Component {
	state = {
		viewport: {
			width: this.props.containerWidth,
			height: 600,
			longitude: -74.063644,
			latitude: 4.624335,
			zoom: 8
		},
		popup: null
	};

	_updateViewport = viewport => {
		this.setState({ viewport });
	};

	componentDidMount() {
		console.log(this.props.containerWidth);
		axios.get(`${ROOT_URL}/registros_geo`).then(res => {
			this.props.dispatch({
				type: FETCH_MARKERS,
				payload: res.data.features
			});
		});
	}

	renderMarker = (dato, index) => {
		const { coordinates } = dato.geometry;
		return (
			<Marker key={index} longitude={coordinates[0]} latitude={coordinates[1]} className="">
				<CityPin size={20} onClick={() => this.setState({ popup: dato })} />
			</Marker>
		);
	};

	render() {
		const { viewport, popup } = this.state;
		return (
			<div>
				{this.props.marcadores && (
					<MapGL
						{...viewport}
						mapStyle="mapbox://styles/mapbox/streets-v9"
						onViewportChange={this._updateViewport}
						mapboxApiAccessToken={TOKEN}>
						{this.props.marcadores.map(this.renderMarker)}

						{popup && (
							<Popup
								tipSize={5}
								longitude={popup.geometry.coordinates[0]}
								latitude={popup.geometry.coordinates[1]}
								onClose={() => this.setState({ popup: null })}>
								<Pop {...popup} />
							</Popup>
						)}
					</MapGL>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		marcadores: state.marcadores.original_markers
	};
};

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
		filterMarkers: ptsWithin => dispatch(filterMarkers(ptsWithin))
	};
};

Mapa = Dimensions()(Mapa);

export default connect(mapStateToProps, mapDispatchToProps)(Mapa);
