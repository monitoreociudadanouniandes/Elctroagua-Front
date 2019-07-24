import React, { Component } from "react";
import { bp, colors } from "../../theme";
import sensoaguav3 from "./Sonda de Agua/SensoraguaV3.PNG";

class SensoaguaV3 extends Component {
  render() {
    const { bp_large, bp_medium, bp_small } = bp;
    const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
    return (
      <div className="detail">
        <div className="description justified">
          <h3>Sensoagua V3</h3>
          <p>
          Sensoagua versión 3 (<i>Sensoagua V3</i>)   fue desarrollado en el 2017-2018. Esta versión partió de la versión anterior Sensoagua versión 2 y se adicionaron un canal para la detección de Mercurio utilizando la técnica de voltamperometría de separación anódica de onda cuadrara (SWASV) y dos configuraciones para el sensor de conductividad:  inductiva y capacitiva. En esta se exploran técnicas de fabricación basada en impresión 3D conductiva (ULTIMAKER 3D EXTENDED). A la interface del aplicativo móvil se adicionan los canales de adquisición de detección de mercurio teniendo como base la Resolución No. 2115 de 2007 de legislación colombiana. 
          </p>

          <p>
          En el siguiente diagrama se muestra una descripción grafica del sensoaguaV3: 
          </p>
          <center>
            <img src={sensoaguav3} />
          </center>
        </div>
        <style jsx>{`
          h3 {
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
        `}</style>
      </div>
    );
  }
}

export default SensoaguaV3;
