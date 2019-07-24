import React, { Component } from 'react';
import { bp, colors } from '../../theme';
import sensoaguav2 from './sensoaguav2.png';
import pdf from './Sonda de Agua/Manual SensoAguaV2F.pdf';
class SensoaguaV2 extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div className="detail">
				<div className="description justified">
					<h3>Sensoagua V2</h3>
					<p>
					Sensoagua versión 2 (<i>Sensoagua V2</i>)   fue desarrollado en el 2016 con el propositivo de medir temperatura, conductividad, oxígeno disuelto y pH. Esta sonda de medición de 4 parámetros fisicoquímicos cuenta con una interface de usuario en una app móvil desarrollada en Android que se comunica al celular vía Bluetooth.  Calprobe permite realizar mediciones individuales o de los 4 parámetros con georreferenciación y tres formas de transmisión de datos: envió por mensaje de texto o correo electrónico y la electrónica de adquisición cuenta con una batería para 8 horas de uso. Además de permitir calibración de los sensores.  Dentro de las características que se encuentran en la aplicación se puede obtener la localización geográfica y visualizarla en un mapa.  Los datos enviados se cargan a una aplicación web pública: <a href="https://monitoreociudadano.uniandes.edu.co/" target="_blank">https://monitoreociudadano.uniandes.edu.co/</a> 
					</p>
					<p>
					Para poder comunicarse con la parte hardware de la sonda se utiliza comunicación bluetooth con la cual se envían diferentes comandos que nos permiten obtener las mediciones de cada uno de los parámetros a medir, esta aplicación también está en capacidad de realizar la calibración de los sensores. Con la aplicación se pueden enviar los datos medidos por SMS, por correo electrónico, o por web servicie esto en busca de poder registrar la medición en la plataforma de visualización. En la plataforma se registran las mediciones realizadas con la posición donde se realizó la medición. 
					</p>
					<p>En el siguiente diagrama se muestra una descripción grafica del <b>Sensoagua V2</b>: </p>
					<center>
						<img src={sensoaguav2} />
					</center>
					<center>
							<a href={pdf} target="_blank" rel="noopener noreferrer">
								<button className="btn btn-primary">Ver manual</button>
							</a>
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

export default SensoaguaV2;
