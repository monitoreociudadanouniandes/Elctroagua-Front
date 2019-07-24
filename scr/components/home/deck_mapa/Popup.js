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

import CustomPie from './Visualizations/Pie';
import CustomBar from './Visualizations/Bar';
import CustomScatter from './Visualizations/Scatter';
import CustomLine from './Visualizations/Line';
import { bp } from '../../../theme';

class Popup extends Component {
    state = {
        actual: ''
    };

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
            original_data
        } = this.props;
        const { bp_small, bp_medium } = bp;
        const { actual } = this.state;
        return (
            <div className="marcador">
                <div className="controles">
                    <h4>
                        Escoge como quieres visualizar los siguientes {cantidad}{' '}
                        registros:
                    </h4>
                    <button
                        className={`btn btn-default control controles__pastel ${actual ===
                            'pie' && 'btn-primary'}`}
                        onClick={() => this.setState({ actual: 'pie' })}
                    >
                        Pastel
                    </button>
                    <button
                        className={`btn btn-default control controles__lineas ${actual ===
                            'line' && 'btn-primary'}`}
                        onClick={() => this.setState({ actual: 'line' })}
                    >
                        Linea
                    </button>
                    <button
                        className={`btn btn-default control controles__barras ${actual ===
                            'bar' && 'btn-primary'}`}
                        onClick={() => this.setState({ actual: 'bar' })}
                    >
                        Barras
                    </button>
                    <button
                        className={`btn btn-default control controles__puntos ${actual ===
                            'scatter' && 'btn-primary'}`}
                        onClick={() => this.setState({ actual: 'scatter' })}
                    >
                        Puntos
                    </button>
                </div>
                {actual !== '' && (
                    <h3>Graficando {cantidad} registros en 5 gráficas:</h3>
                )}
                <br />
                {actual === 'pie' && (
                    <div>
                        <CustomPie
                            {...this.props}
                            dataKey="conduct"
                            titulo="Conductividad"
                            maximumValue={3000}
                        />
                        <CustomPie
                            {...this.props}
                            dataKey="od"
                            titulo="Oxígeno Disuelto"
                            maximumValue={3000}
                        />
                        <CustomPie
                            {...this.props}
                            dataKey="temp"
                            titulo="Temperatura"
                            maximumValue={50}
                        />
                        <CustomPie
                            {...this.props}
                            dataKey="pH"
                            titulo="pH"
                            maximumValue={14}
                        />
                        <CustomPie
                            {...this.props}
                            dataKey="hg"
                            titulo="HG"
                            maximumValue={1000}
                        />
                    </div>
                )}
                {actual === 'bar' && (
                    <div>
                        <CustomBar
                            {...this.props}
                            dataKey="conduct"
                            label_y="Conductividad (µS/cm)"
                            titulo="Conductividad"
                        />
                        <CustomBar
                            {...this.props}
                            dataKey="od"
                            label_y="Oxígeno Disuelto (O2/l)"
                            titulo="Oxígeno Disuelto"
                        />
                        <CustomBar
                            {...this.props}
                            dataKey="temp"
                            label_y="Temperatura (°C)"
                            titulo="Temperatura"
                        />
                        <CustomBar
                            {...this.props}
                            dataKey="pH"
                            label_y="pH"
                            titulo="pH"
                        />
                        <CustomBar
                            {...this.props}
                            dataKey="hg"
                            label_y="Hg"
                            titulo="Hg"
                        />
                    </div>
                )}
                {actual === 'scatter' && (
                    <div>
                        <CustomScatter
                            {...this.props}
                            dataKey="conduct"
                            label_y="Conductividad (µS/cm)"
                            titulo="Conductividad"
                        />
                        <CustomScatter
                            {...this.props}
                            dataKey="od"
                            label_y="Oxígeno Disuelto (O2/l)"
                            titulo="Oxígeno Disuelto"
                        />
                        <CustomScatter
                            {...this.props}
                            dataKey="temp"
                            label_y="Temperatura (°C)"
                            titulo="Temperatura"
                        />
                        <CustomScatter
                            {...this.props}
                            dataKey="pH"
                            label_y="pH"
                            titulo="pH"
                        />
                        <CustomScatter
                            {...this.props}
                            dataKey="hg"
                            label_y="Hg"
                            titulo="Hg"
                        />
                    </div>
                )}
                {actual === 'line' && (
                    <div>
                        <CustomLine
                            {...this.props}
                            dataKey="conduct"
                            label_y="Conductividad (µS/cm)"
                            titulo="Conductividad"
                            stroke="#82ca9d"
                        />
                        <CustomLine
                            {...this.props}
                            dataKey="od"
                            label_y="Oxígeno Disuelto (mg/L)"
                            titulo="Oxígeno Disuelto"
                            stroke="#82ca9d"
                        />
                        <CustomLine
                            {...this.props}
                            dataKey="temp"
                            label_y="Temperatura (°C)"
                            titulo="Temperatura"
                            stroke="#82ca9d"
                        />
                        <CustomLine
                            {...this.props}
                            dataKey="pH"
                            label_y="pH"
                            titulo="pH"
                            stroke="#82ca9d"
                        />
                        <CustomLine
                            {...this.props}
                            dataKey="hg"
                            label_y="Hg"
                            titulo="Hg"
                            stroke="#82ca9d"
                        />
                    </div>
                )}

                <button
                    className="btn btn-default cerrrar"
                    onClick={evt => {
                        this.props.close();
                    }}
                >
                    Cerrar
                </button>

                <style jsx>{`
                    .control:not(:last-child) {
                        margin-right: 10px;
                    }
                    .cerrar {
                        margin-top: 30px;
                    }

                    .btn:focus {
                        outline: none;
                    }

                    .marcador {
                        margin-right: 20px;
                        margin-left: 20px;
                        width: 560px;
                        @media ${bp_medium} {
                            font-size: 0.9em;
                            width: 310px;
                        }
                        @media ${bp_small} {
                            font-size: 0.9em;
                            width: 210px;
                        }
                    }
                `}</style>
                <style jsx global>{`
                    .recharts-cartesian-axis-tick-value {
                        font-size: 0.75em;
                    }
                `}</style>
            </div>
        );
    }
}

export default Popup;
