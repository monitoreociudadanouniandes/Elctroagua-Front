import React, { Component } from "react";

import { bp, colors } from "../../theme";
import TwitterTimeline from 'react-twitter-embedded-timeline';
class Multimedia extends Component {
  render() {
    const { bp_large, bp_medium, bp_small } = bp;
    const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
    return (
      <div className="detail">
        <div className="description justified">
          <h1>NOTICIAS</h1>
          <p>A continuación, se lista el registro que en medios periodísticos y en redes sociales ha tenido el proyecto y el trabajo con comunidades.</p>

          <h3>VIDEOS</h3>
          <h4>Investigadores de Los Andes luchan para salvar el río Teusacá</h4>
          <div className=" video_container">
            <iframe
              className="video"

              src="https://www.youtube.com/embed/BqPtlJSoGrQ"
            />
          </div>

          <h4>
            La ingeniería de las Cosas: sensores para medir la calidad del agua
          </h4>
          <div className=" video_container">
            <iframe
              className="video"

              src="https://www.youtube.com/embed/IonNAynjKoI"
            />
          </div>

          <h4>
            Agua dulce agua - Nuevo dispositivo para monitorear la calidad del agua
          </h4>
          <div className=" video_container">
            <iframe className="video" src="https://www.youtube.com/embed/rQotceQnWtQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <h3>NOTAS DE PRENSA</h3>
          <p>
            La comunidad que mide la calidad del agua en Santurbán, disponible en línea en:
          </p>
          <a href="https://www.elespectador.com/noticias/medio-ambiente/comunidad-mide-calidad-del-agua-santurban-articulo-643140">https://www.elespectador.com/noticias/medio-ambiente/comunidad-mide-calidad-del-agua-santurban-articulo-643140  </a>

          <p>
            Instalan sensores para medir calidad de agua del río Teusacá, disponible en línea:
          </p>
          <a href="http://www.eltiempo.com/archivo/documento/CMS-16653997">http://www.eltiempo.com/archivo/documento/CMS-16653997  </a>

          <p>
            New device will help protect vulnerable communities in Colombia from unsafe water Disponible en línea:
          </p>
          <a href="http://www.bath.ac.uk/announcements/new-device-will-help-protect-vulnerable-communities-in-colombia-from-unsafe-water/​">http://www.bath.ac.uk/announcements/new-device-will-help-protect-vulnerable-communities-in-colombia-from-unsafe-water/​  </a>

          <p>
            NUEVO DISPOSITIVO PARA MONITOREAR LA CALIDAD DEL AGUA
          </p>
          <a href="https://uniandes.edu.co/es/noticias/ingenieria/nuevo-dispositivo-para-el-monitoreo-del-agua">https://uniandes.edu.co/es/noticias/ingenieria/nuevo-dispositivo-para-el-monitoreo-del-agua </a>
          <p>New device to protect communities in Colombia from unsafe water </p>
          <a href="https://phys.org/news/2018-06-device-colombia-unsafe.html?utm_source=Headlines&utm_campaign=0ddbd64ae9-Headlines_Test_2_20_01_2015_COPY_01&utm_medium=email&utm_term=0_a2c1ab21c6-0ddbd64ae9-322468153&ct=t(Headlines_031117_COPY_01)&mc_cid=0ddbd64ae9&mc_eid=41f60a2a18 ">https://phys.org/news/2018-06-device-colombia-unsafe.html?utm_source=Headlines&utm_campaign=0ddbd64ae9-Headlines_Test_2_20_01_2015_COPY_01&utm_medium=email&utm_term=0_a2c1ab21c6-0ddbd64ae9-322468153&ct=t(Headlines_031117_COPY_01)&mc_cid=0ddbd64ae9&mc_eid=41f60a2a18 </a>
          <h3>Twitter</h3>
          <a className="twitter-timeline" href="https://twitter.com/MonitoreoCiuda2?ref_src=twsrc%5Etfw">MonitoreoCiudadano en Twitter</a>

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
          .detail *{
            padding-top: 1em;
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

          .video {
            
            width: 100%;
            min-height: 70vh;
            @media ${bp_medium} {
              width: 100%;
              min-height: 30vh;
            }
          }
          a{
            word-break: break-all;
          }
        `}</style>
      </div>
    );
  }
}

export default Multimedia;
