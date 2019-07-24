import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bp, colors } from '../../theme';
// import MapaPoligono from '../../components/home/mapa_poligono/Mapa';
// import Mapa from '../../components/home/mapa/mapa';
// import Visualizacion from '../../components/home/visualizacion/Visualizacion';
import Mapa from '../../components/home/deck_mapa/mapa';
import EquipoTrabajo from '../equipo_trabajo/EquipoTrabajo';

class Content extends Component {
    render() {
        const { bp_large, bp_medium, bp_small } = bp;
        const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
        const height = this.props.aviso ? '60rem' : '120rem';
        return (
            <div>
                <div className="detail">
                    <div className="description">
                        <h1>Monitoreo de Agua en Colombia</h1>
                        <p className="justified">
                            Los conflictos socio-ambientales en Colombia asociados a las interacciones entre minería, agricultura y provisión de agua traen consigo varios retos analíticos asociados a i) los actores involucrados, ii) sus posibles estrategias de acción,  iii) el entorno físico y de reglas (instituciones) que gobiernan esas interacciones, y iv) el acceso a tecnologías para medición. Para lograr  generar dinámicas de diálogo entre los actores públicos asociados a estos retos se promueven acciones de colaboración abierta distribuida para ayudar a determinar el impacto de actividades económicas relacionadas con la extracción y explotación de recursos naturales en Colombia.
                            <br></br>
                            La creación del proyecto de Monitoreo Ciudadano a recursos hídricos nace como una apuesta a estas acciones colaborativas para empoderar comunidades en el uso de sondas de agua que les permitan obtener mediciones de parámetros de calidad del agua, además de detección de metales pesados: Mercurio, Cadmio, Arsénico y Plomo. La ida es un codiseño de sondas entre una comunidad científica y los usuarios de los recursos hídricos en un dialogo transversal en que la ciencia, la tecnología y el entendimiento del comportamiento humano mejoren la valoración del agua, a través de un mejor conocimiento de su estado. A través de la tecnología y de herramientas para la toma de decisiones se buscaría mejorar la visibilidad del problema entre las comunidades y mejorar el diálogo con otros actores de la industria y el gobierno buscando tener un impacto positivo en las políticas públicas relacionadas con el uso de los recursos naturales.
                            <br></br>
                            Desde el 2006 la universidad de los Andes y colaboradores externos han trabajado en varias comunidades en Santurban (Santander), Amazonas, y el eje ambiental del centro de Bogotá, El campus de la Universidad de los Andes y la Isla de Barú para crear un espacio de aprendizaje para el uso personal de las sondas de agua (AguaSense), el manejo de los datos y la plataforma de visibilización. Además de usar este ejercicio como una puesta de educación STEM donde las competencias técnicas se ponen directamente al servicio de las escuelas y sus facilitadores de conocimiento, generando un proceso de sensibilización, montaje y uso de las sondas. El proyecto espera que los jóvenes sean un motor continuo y activo para mantener las actividades de monitoreo en recursos hídricos y que estos profesionales en formación que a través de proyectos de tesis e investigación aporten a que las tecnologías de monitoreo de bajo costo sean apropiadas por las comunidades de usuarios del agua en Colombia.
                        </p>
                        <br></br><br></br><br></br>
                        <div className="map_container">
                            <Mapa />
                            <div className="perimetro">
                                <p className="texto_perimetro">
                                    Si desea seleccionar cierto perimetro para
                                    visualizarlo,{' '}
                                    <Link to="/perimetro">
                                        haga click aquí.
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        h1 {
                            margin-top: 0;
                        }
                        .detail {
                            font-size: 1.4rem;
                            display: flex;
                            flex-direction: column;
                            padding: 4.5rem;
                            background-color: ${color_grey_light_1};
                            border-bottom: 1px solid ${color_grey_light_2};

                            &:not(:last-child) {
                                /* margin-bottom: 10rem; */
                            }

                            @media ${bp_medium} {
                                padding: 3rem;
                            }

                            @media ${bp_small} {
                                flex-direction: column;
                            }
                        }

                        .title {
                            font-weight: bold;
                            font-style: italic;
                        }

                        .description {
                            font-size: 1.4rem;
                            background-color: #fff;
                            box-shadow: ${shadow_light};
                            padding: 3rem;
                            padding: 4.5rem;
                            min-height:100vh;
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

                        .map_container {
                            transition: height 4s;
                            height: ${height};
                        }

                        .patrocinadores {
                            display: flex;
                            justify-content: space-around;

                            @media ${bp_large} {
                                flex-direction: column;
                                align-items: center;
                            }
                        }

                        .patrocinador {
                            width: 20rem;
                            height: auto;
                        }

                        .img_container {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                        }

                        .video_container {
                            display: flex;
                            justify-content: center;
                        }

                        .perimetro {
                            display: flex;
                            justify-content: flex-end;
                            margin-top: 5px;
                        }

                        .video {
                            height: 600px;
                            width: 80%;

                            @media ${bp_medium} {
                                width: 100%;
                            }
                        }
                        
                    `}</style>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        aviso: state.marcadores.aviso_seleccionar_mas_marcadores
    };
};

export default connect(mapStateToProps)(Content);
