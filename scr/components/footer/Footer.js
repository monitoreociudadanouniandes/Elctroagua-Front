import React, { Component } from "react";
import { colors } from "../../theme";
import logo from "./logo-andes-inverted.svg";

class Footer extends Component {
  render() {
    const { color_grey_dark_1 } = colors;

    return (
      <div className="footer">
        <div className="container">
          <img className="logo_uniandes_inverted" src={logo} alt="" />
        </div>
        <div className="footer_info">
          <p align="center">
            <span lang="ES-CO">
              Universidad de los Andes | Vigilada Mineducaci&oacute;n.&nbsp;<br />{" "}
              Reconocimiento como Universidad: Decreto 1297 del 30 de mayo de
              1964. Reconocimiento personer&iacute;a jur&iacute;dica:
              Resoluci&oacute;n 28 del 23 de febrero de 1949
              Minjusticia.&nbsp;&nbsp;
            </span>
          </p>
          <p align="center">
            <span lang="ES-CO">
              Cra 1 Este No. 19&ordf;-40 - Edificio Mario Laserna -
              Bogot&aacute; (Colombia){" "}
            </span>
          </p>
          <p align="center">
            <span lang="ES-CO">
              &nbsp;Todos los derechos reservados Universidad de los Andes -
              2018
            </span>
          </p>
          
        </div>
        <style jsx>{`
          .footer {
            background-color: ${color_grey_dark_1};
            min-height:45vh;
          }

          .container {
            padding: 2rem;
            display: flex;
            justify-content: space-around;
          }

          .logo_uniandes_inverted {
            width: 200px;
          }

          .footer_info {
            color: white;
            opacity: 0.5;
          }
        `}</style>
      </div>
    );
  }
}

export default Footer;
