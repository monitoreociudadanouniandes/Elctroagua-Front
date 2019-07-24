import React, { Component } from 'react';
import { bp, colors } from '../../theme';
import Sensoaguav1 from './Sonda de Agua/SensoraguaV1.png'

class SensoaguaV1 extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div className="detail">
				<div className="description justified">
					<h3>Sensoagua V1</h3>
					<p>
					Sensoagua versión 1 (<i> Sensoagua V1</i>) fue desarrollado en el 2015 con el propósito de medir temperatura y conductividad. Esta sonda de dos parámetros cuenta con módulos de electrónica de adquisición, comunicación y alimentación. La interface del usuario es a través de un aplicativo web (<a href="https://economia.uniandes.edu.co/centros-de-investigación/cede/web-de-proyectos-cede/Santurbán-visible" target="_blank">https://economia.uniandes.edu.co/centros-de-investigación/cede/web-de-proyectos-cede/Santurbán-visible</a>)y los datos son visualizados la página de monitoreo ciudadano 




					</p>
					<p>&nbsp;</p>
					<p>
					Esta versión cuenta con dos formas de programación de medida: en un punto fijo tomando mediciones manuales o programando el intervalo de medida en el aplicativo para adquirir varias medidas en un intervalo especifico de tiempo por ejemplo 30 medidas en una hora.  El primero permite que <i> Sensoagua V1</i> pueda ser ubicado en un punto determinado donde manualmente el usuario tome una o varias medidas. En el segundo, el usuario puede especificar el intervalo de medida y dejar sensoaguav1 en el punto de interés. En este caso las mediciones que programa el usuario las cuales se realizan de forma continua. 
					</p>
					<center>
						<img src={Sensoaguav1} />
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

export default SensoaguaV1;
