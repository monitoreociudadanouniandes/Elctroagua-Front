import React, { Component } from "react";
import { bp, colors } from "../../theme";
import play_store from "./images/google_play.png";
import pantallazo1 from "./images/pantallazo.png";
import pantallazo2 from "./images/Calprobe.png";
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    const { bp_large, bp_medium, bp_small } = bp;
    const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
    return (
      <div>
        <div className="detail">
          <div className="description justified">
            <h2>Aplicaciones</h2>
            <p>En esta sección se describen las versiones de las interfaces para las sondas de agua: Calprobe y Calprobe2 la cual es una herramienta para los usuarios de SensoAgua 2 y SensoAgua 3. Con esta aplicación los usuarios de SensoAgua van a estar en capacidad de conocer las mediciones de cuatro variables de calidad de agua, las variables medidas se pueden enviar por mensaje de texto o correo electrónico. Todas las mediciones se envian con la localización geografica donde se realizó la medición. </p>
            <br />
            <br />
            <center><h3>Calprobe2 </h3> </center> 
            <center>
              <img className="" src={pantallazo1} /> <br></br> <br></br>
            </center>
            <p>Registro Dirección Nacional de Derecho de Autor, el cual quedó bajo Libro- Tomo- Partida 13-66-58 de fecha 21-feb-2018. </p>
            <center><h3>Calprobe </h3> </center> 
            <center>
              <img className="" src={pantallazo2} /> <br></br> <br></br>
            </center>
            <p>Registro Dirección Nacional de Derecho de Autor, el cual quedó bajo Libro- Tomo- Partida 13-70-281 de fecha 05-dic-2018.  </p>
       
         
            <div className="logo">
              <img className="logos" src={play_store} />
            </div>
            <Link to="./privacidad">Política de privacidad de la aplicación</Link>
          </div>
          <style jsx>{`
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

            .logos {
              text-align: center;
              width: 300px;
            }

            .logo {
              text-align: center;
            }
          `}</style>
        </div>

      </div>
    );
  }
}

export default App;
