import React, { Component } from 'react';
import {
	ResponsiveContainer,
	Bar,
	BarChart,
	Sector,
	ComposedChart,
	Cell,
	LineChart,
	Line,
	Label,
	XAxis,
	YAxis,
	CartesianGrid,
	ScatterChart,
	Scatter,
	Pie,
	PieChart,
	Tooltip,
	Legend
} from 'recharts';

import legend from './utils/legend';
import tooltip from './utils/tooltip';

export default class CustomLine extends Component {
	render() {
		const {
			timestamp,
			id_celular,
			hg,
			temp,
			conduct,
			od,
			pH,
			data,
			cantidad,
			original_data,
			dataKey,
			titulo,
			stroke,
			label_y
		} = this.props;
		return (
			<ResponsiveContainer height={500} width="100%">
				<LineChart
					// width={600}
					height={300}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
					<XAxis dataKey="name">
						<Label value="Dia" offset={-5} position="insideBottom" />
					</XAxis>
					<YAxis label={{ value: label_y, angle: -90, position: 'insideLeft' }} />
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<Tooltip content={tooltip} />
					<Legend verticalAlign="top" content={legend} titulo={titulo} />
					<Line connectNulls={true} type="monotone" dataKey={dataKey} stroke={stroke} />
				</LineChart>
			</ResponsiveContainer>
		);
	}
}
