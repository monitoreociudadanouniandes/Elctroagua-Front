import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bp, colors } from "../../theme";
import MapaPoligono from "../../components/home/mapa_poligono/Mapa";
import Mapa from "../../components/home/deck_mapa/mapa";
import Popup from "../../components/home/deck_mapa/Popup";

import Footer from "../../components/footer/Footer";

class Perimetro extends Component {
  render() {
    const { bp_large, bp_medium, bp_small } = bp;
    const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
    // const height = this.props.aviso ? "60rem" : "120rem";
    const height = "120rem";
    return (
      <div>
        <div className="detail">
          <div className="description">
            <h1>Monitoreo de Agua en Colombia</h1>
            Desarrollar una herramienta que nos permita conocer las condiciones
            de calidad del agua en comunidades vulnerables. Con esta herramienta
            se busca poder monitorear las cuencas hidrográficas permitiéndonos
            generar alertas tempranas ante posibles fuentes de contaminación en
            las cuencas.
          </div>
          <div className="description">
            <div className="map_container">
              <div className="explicacion">
                <p>
                  Para usar el polígono debes seleccionarlo a la derecha, cuando
                  hayas terminado de marcar el area sobre el mapa debes realizar
                  doble click.
                </p>
              </div>
              <MapaPoligono />

              {this.props.filtered_markers.data && (
                <Popup {...this.props.filtered_markers} />
              )}
              <div className="perimetro">
                <p className="texto_perimetro">
                  Para devolverse al mapa normal{" "}
                  <Link to="/">haga click aquí.</Link>
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
              /* transition: height 4s;
              display: flex;
              justify-content: center; */
              min-height: 60rem;
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aviso: state.marcadores.aviso_seleccionar_mas_marcadores,
    filtered_markers: state.marcadores.filtered_markers
  };
};

export default connect(mapStateToProps)(Perimetro);
