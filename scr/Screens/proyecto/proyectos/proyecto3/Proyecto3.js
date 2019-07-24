import React, { Component } from 'react';
import Mapa from '../../../../components/home/deck_mapa/mapa';
import { bp, colors } from '../../../../theme';
import bath from './bath.png';
import colciencias from './colciencias.png';
import newton from './newton.png';

class Proyecto3 extends Component {
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
					<p>Monitoreo de agua en comunidades vulnerables de Colombia</p>
					<p>
						Desarrollar una herramienta que nos permita conocer las condiciones de calidad del agua en
						comunidades vulnerables. Con esta herramienta se busca poder monitorear las cuencas
						hidrogr&aacute;ficas permiti&eacute;ndonos generar alertas tempranas ante posibles fuentes de
						contaminaci&oacute;n en las cuencas.
					</p>
					<p>
						El desarrollo del proyecto se realiza con colaboraci&oacute;n de la universidad de Bath del
						Reino Unido donde por medio de diferentes tecnolog&iacute;as se quiere conocer el estado del
						agua.
					</p>
				</div>
				<div className="description">
					<div className="patrocinadores">
						<div className="img_container">
							<img src={bath} alt="" className="patrocinador" />
						</div>
						<div className="img_container">
							<img src={colciencias} alt="" className="patrocinador" />
						</div>
						<div className="img_container">
							<img src={newton} alt="" className="patrocinador" />
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
				`}</style>
			</div>
		);
	}
}

export default Proyecto3;
