import React, { Component } from 'react';
import Mapa from '../../../../components/home/deck_mapa/mapa';
import { bp, colors } from '../../../../theme';
import progresaresp from './progresaresp.png';

class Proyecto2 extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const {
			color_primary,
			color_primary_light,
			color_grey_light_1,
			color_grey_light_2,
			shadow_light
		} = colors;
		return (
			<div className="detail">
				<div className="description">
					<Mapa />
				</div>
				<div className="description">
					<p>Proyecto 2</p>
					<p>La Gran Cuenca del R&iacute;o Teusac&aacute;</p>
					<p>
						Es un proyecto que viene siendo impulsado por el acueducto Progresar E.S.P donde por medio de
						diferentes actividades busca que la comunidad se empodere y tome parte activa del manejo del
						agua.&nbsp; Dentro estas actividades han desarrollado una plataforma virtual donde registran
						las mediciones de calidad del agua que se realizan con los sensores que se desarrollaron en
						compa&ntilde;&iacute;a con la Universidad de los Andes.
					</p>
					<p>Para conocer informaci&oacute;n del proyecto puede consultar la p&aacute;gina:</p>
					<p>
						<a href="http://progresaresp.com/mapa-monitoreo-y-sistema-de-alertas-tempranas/">
							http://progresaresp.com/mapa-monitoreo-y-sistema-de-alertas-tempranas/
						</a>
					</p>
				</div>
				<div className="description video_container">
					<iframe className="video" height="100%" src="https://www.youtube.com/embed/BqPtlJSoGrQ" />
				</div>
				<div className="description">
					<div className="patrocinadores">
						<div className="img_container">
							<img src={progresaresp} alt="" className="patrocinador" />
						</div>
					</div>
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
						height: 600px;
						width: 80%;

						@media ${bp_medium} {
							width: 100%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Proyecto2;
