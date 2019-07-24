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

export default class CustomScatter extends Component {
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
            label_y
        } = this.props;
        return (
            <ResponsiveContainer height={500} width="100%">
                <ScatterChart
                    width={730}
                    height={250}
                    margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis
                        dataKey={dataKey}
                        label={{
                            value: label_y,
                            angle: -90,
                            position: 'insideLeft'
                        }}
                    />
                    <XAxis dataKey={'name'}>
                        <Label
                            value="Dia"
                            offset={-5}
                            position="insideBottom"
                        />
                    </XAxis>
                    {/* <Tooltip content={tooltip} /> */}
                    <Legend
                        verticalAlign="top"
                        content={legend}
                        titulo={titulo}
                    />
                    <Scatter
                        name="Conductividad"
                        data={original_data}
                        fill="#8884d8"
                    />
                </ScatterChart>
            </ResponsiveContainer>
        );
    }
}
