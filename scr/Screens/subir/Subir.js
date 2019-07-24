import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import XLSX from 'xlsx';
import axios from 'axios';

import { ROOT_URL } from '../../components/home/mapa_poligono/Mapa';
import { bp, colors } from '../../theme';

import captura from './captura.png';
import Footer from '../../components/footer/Footer';
import plantilla from './plantilla.csv';

let dropzoneRef;
class Subir extends Component {
    state = {
        errores: [],
        exitos: []
    };

    onDrop = (acceptedFile, rejectedFile) => {
        // Bind local function:
        var subirDatos = this.subirDatos;
        // Read file:
        var file = acceptedFile[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            try {
                var wb = XLSX.read(data, { type: 'binary', raw: true });
                // Take only first sheet:
                console.log(wb);
                var sheet_1 = wb.Sheets[wb.SheetNames[0]];
                var ws_json = XLSX.utils.sheet_to_json(sheet_1);
                console.log(ws_json);
                ws_json = ws_json.map(dato => {
                    // Se pueden datos en español
                    console.log(dato);
                    if (dato.longitud) {
                        dato.longitude = dato.longitud;
                    }
                    if (dato.latitud) {
                        dato.latitude = dato.latitud;
                    }
                    if (dato.conductividad) {
                        dato.conduct = dato.conductividad;
                    }
                    if (dato.temperatura) {
                        dato.temp = dato.temperatura;
                    }
                    if (dato.fecha_y_hora) {
                        dato.timestamp = dato.fecha_y_hora;
                    }
                    return dato;
                });
                if (ws_json.length > 0) {
                    subirDatos(ws_json);
                } else {
                    alert('No hay datos en el CSV');
                }
            } catch (e) {
                console.log(e);
            }
        };
        reader.readAsBinaryString(file);
    };

    subirDatos = ws_json => {
        this.setState({ errores: [], exitos: [] });
        ws_json.forEach(dato => {
            console.log(dato);
            axios
                .post(`${ROOT_URL}/registros`, dato)
                .then(res => {
                    res.data.row_num = dato.__rowNum__;
                    this.setState({
                        exitos: this.state.exitos.concat(res.data)
                    });
                })
                .catch(err => {
                    err.response.data.row_num = dato.__rowNum__;
                    this.setState({
                        errores: this.state.errores.concat(err.response.data)
                    });
                });
        });
    };

    render() {
        const { bp_large, bp_medium, bp_small } = bp;
        const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;

        return (
            <div>
                <div className="subir">
                    <div className="description justified">
                        <div className="instrucciones">
                            <h1>Cargar Datos</h1>
                            <p>
                                En este enlace se encuentra la descripción para cargar mediciones. Las mediciones adquiridas con la app móvil deben registrarse por cada usuario en un archivo de Excel. Este archivo debe cargarse manualmente en formato CSV a la página Web.
                                El formato que deben tener se presenta a continuación:
                            </p>
                            <img src={captura} className="captura" />
                            <p>




                                Se puede descargar una plantilla en Excel para que la use de modelo <a href={plantilla}>aquí</a> <br></br>



                                Los parámetros de esta plantilla son:
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                            </p>
                            <ul className="indent">
                                <li>
                                    Fecha_y_hora: La fecha y hora en la cual fue tomado el dato, en el formato exacto "DD/MM/AAAA HH:mm:ss"
                            </li>
                                <li>
                                    Longitud: La longitud de la ubicación en donde fue tomado el dato
                            </li>
                                <li>
                                    Latitud: La latitud de la ubicación en donde fue tomado el dato
                            </li>
                                <li>
                                    Imei: El código único que referencia al celular que tomo el dato
                            </li>
                                <li>Hg: Mercurio (Resolución No. 2115 de 2007.) </li>
                                <li>Temperatura: Temp (°C) </li>
                                <li>Conductividad: Conductividad (uS/cm) </li>
                                <li>Od: Oxígeno disuelto (mg/L) </li>
                                <li>pH: pH (adimensional) </li>
                                <li>
                                    Comunidad: La comunidad a la cual pertenecen los datos:
                                <ul className="indent">
                                        <li>1: Santurban</li>
                                        <li>2: Teusaca</li>
                                        <li>3: Amazonas</li>
                                        <li>4: Campus Uniandes</li>
                                        <li>5: Eje Ambiental</li>
                                        <li>6: Barú</li>
                                        <li>7: Boyacá</li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="dropzone">
                            <Dropzone
                                accept=".csv"
                                onDrop={this.onDrop}
                                multiple={false}
                                ref={node => {
                                    dropzoneRef = node;
                                }}
                            >
                                <p className="instrucciones_dropzone">
                                    Arrastra el archivo CSV de los datos o haz
                                    click aquí
                                </p>
                            </Dropzone>
                            <div className="boton_manual">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        dropzoneRef.open();
                                    }}
                                >
                                    Subir archivo CSV
                                </button>
                            </div>
                        </div>

                        <div className="errores">
                            <div>
                                {this.state.errores.length > 0 &&
                                    `Se encontraron ${
                                    this.state.errores.length
                                    } errores:`}
                            </div>
                            {this.state.errores.map(error => {
                                return (
                                    <div key={error.row_num}>
                                        <span className="error fa fa-exclamation" />
                                        Ocurrió un error subiendo el dato en la
                                        fila: {error.row_num + 1}. El error fue:{' '}
                                        <i className="error">{error.err}</i>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="exitos">
                            <div>
                                {this.state.exitos.length > 0 &&
                                    `Se subieron ${
                                    this.state.exitos.length
                                    } registros:`}
                            </div>
                            {this.state.exitos.map(exito => {
                                return (
                                    <div key={exito.row_num}>
                                        <span className="exito fa fa-check" />
                                        Registro de la fila: {exito.row_num +
                                            1}{' '}
                                        subido exitosamente
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                    <style jsx>{`
                        .subir {
                            padding: 20px;
                            
                        }

                        .captura {
                            max-width: 800px;
                        }

                        .dropzone {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            margin-top: 20px;
                        }

                        .boton_manual {
                            margin-top: 10px;
                        }

                        .error {
                            color: red;
                            padding-right: 5px;
                        }

                        .exito {
                            color: green;
                            padding-right: 5px;
                        }

                        .indent {
                            margin-left: 30px;
                        }

                        .description {
                            font-size: 1.4rem;
                            background-color: #fff;
                            box-shadow: ${shadow_light};
                            padding: 3rem;
                            padding: 4.5rem;

                            &:not(:last-child) {
                                margin-bottom: 5rem;
                            }

                            @media ${bp_medium} {
                                padding: 2rem;
                                margin-bottom: 3rem;
                            }

                            @media ${bp_small} {
                                margin-right: 0;
                            }
                        }
                    `}</style>
                </div>

            </div>
        );
    }
}

export default Subir;
