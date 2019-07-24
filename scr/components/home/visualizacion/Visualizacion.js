import React, { Component } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import * as d3 from 'd3';

import { avisoSeleccionarMarcadores, quitarAvisoSeleccionarMarcadores } from '../../../ducks/marcadores';

let g = null;
class Visualizacion extends Component {
	componentDidMount() {
		g = d3.select('#viz1');

		d3.timeFormatDefaultLocale({
			decimal: '.',
			thousands: ',',
			grouping: [3],
			currency: ['$', ''],
			dateTime: '%a %b %e %X %Y',
			date: '%d/%m/%Y',
			time: '%H:%M:%S',
			periods: ['AM', 'PM'],
			days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
			shortDays: ['Dom', 'Lun', 'Mar', 'Mi', 'Jue', 'Vie', 'Sab'],
			months: [
				'Enero',
				'Febrero',
				'Marzo',
				'Abril',
				'Mayo',
				'Junio',
				'Julio',
				'Agosto',
				'Septiembre',
				'Octubre',
				'Noviembre',
				'Diciembre'
			],
			shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
		});
	}

	shouldComponentUpdate(props) {
		this.renderViz(props);
		return false;
	}

	renderViz = props => {
		console.log('updated');
		d3
			.selectAll('.selected_marker, #x_axis, #y_axis')
			.remove()
			.exit();

		const dimensions = {
			height: 500,
			width: 500,
			margin_left: 34,
			margin_top: 10,
			margin_right: 10,
			margin_bottom: 40
		};

		const { height, width, margin_top, margin_bottom, margin_left, margin_right } = dimensions;

		const { filtered_markers } = props;

		// Poner avisos:
		if (filtered_markers.length < 2) {
			this.props.avisoSeleccionarMarcadores();
		} else {
			this.props.quitarAvisoSeleccionarMarcadores();
		}

		// XScale
		const first_stamp = d3.min(filtered_markers, d => d.properties.date);
		console.log(first_stamp);
		const last_stamp = d3.max(filtered_markers, d => d.properties.date);
		this.xScaleTime = d3
			.scaleTime()
			.domain([first_stamp, last_stamp])
			.rangeRound([0 + margin_left, width - margin_right]);

		// YScale
		const min_point = d3.min(filtered_markers, d => d.properties.temp);
		const max_point = d3.max(filtered_markers, d => d.properties.temp);
		this.yScale = d3
			.scaleLinear()
			.domain([min_point, max_point])
			.range([height + margin_top - margin_bottom, 0]);

		// Poner puntos
		g
			.selectAll('dot')
			.data(filtered_markers)
			.enter()
			.append('circle')
			.attr('class', 'selected_marker')
			.attr('r', 2)
			.attr('fill', 'red')
			.attr('cx', d => this.xScaleTime(d.properties.date))
			.attr('cy', height - margin_top - margin_bottom)
			.transition()
			.duration(1000)
			.attr('cy', d => this.yScale(d.properties.temp));

		// Poner escalas
		const xAxis = d3
			.axisBottom()
			.scale(this.xScaleTime)
			.ticks(5);
		// .tickFormat(d3.timeFormat('%b %Y'));

		g
			.append('g')
			.attr('id', 'x_axis')
			.attr('transform', `translate(0, ${margin_top + height - margin_bottom})`)
			.call(xAxis);

		const yAxis = d3.axisLeft().scale(this.yScale);
		g
			.append('g')
			.attr('id', 'y_axis')
			.attr('transform', `translate(${margin_left - 0.5},${margin_top})`)
			.call(yAxis);
	};

	render() {
		return (
			<svg className="visualizacion_puntos">
				<g id="viz1" className="visualizacion" />
				<style jsx>{`
					.visualizacion_puntos {
						margin-top: 15px;
						height: 600px;
						width: 100%;
					}
				`}</style>
			</svg>
		);
	}
}

const mapStateToProps = state => {
	return {
		filtered_markers: state.marcadores.filtered_markers
	};
};

export default connect(mapStateToProps, {
	avisoSeleccionarMarcadores,
	quitarAvisoSeleccionarMarcadores
})(Visualizacion);
