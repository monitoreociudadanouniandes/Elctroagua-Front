import React, { Component } from 'react';
import Mapa from '../../../../components/home/deck_mapa/mapa';
import { bp, colors } from '../../../../theme';
import Slider from 'react-slick';

import us_aid from './us_aid.png';
import foro_nacional_por_colombia from './foro_nacional_por_colombia.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import one from './images/1.JPG';
import two from './images/2.JPG';
import three from './images/3.JPG';
import four from './images/4.jpg';
import five from './images/5.JPG';
import six from './images/6.jpg';
import seven from './images/7.JPG';
import eight from './images/8.JPG';
import nine from './images/9.jpg';
import ten from './images/10.jpg';
import eleven from './images/11.jpg';
import twelve from './images/12.jpg';

class Proyecto1 extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const {
			color_primary,
			color_primary_light,
			color_grey_light_1,
			color_grey_light_2,
			shadow_light
		} = colors;

		const settings = {
			lazyLoad: true,
			dots: true,
			fade: true,
			infinite: true,
			arrows: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="detail">
				<div className="description">
					<Mapa />
				</div>

				<div className="description">
					<Slider {...settings}>
						<div>
							<img src={one} className="imagen" />
						</div>
						<div>
							<img src={two} className="imagen" />
						</div>
						<div>
							<img src={three} className="imagen" />
						</div>
						<div>
							<img src={four} className="imagen" />
						</div>
						<div>
							<img src={five} className="imagen" />
						</div>
						<div>
							<img src={six} className="imagen" />
						</div>
						<div>
							<img src={seven} className="imagen" />
						</div>
						<div>
							<img src={eight} className="imagen" />
						</div>
						<div>
							<img src={nine} className="imagen" />
						</div>
						<div>
							<img src={ten} className="imagen" />
						</div>
						<div>
							<img src={eleven} className="imagen" />
						</div>
						<div>
							<img src={twelve} className="imagen" />
						</div>
					</Slider>
				</div>

				<div className="description">
					<p>
						El proyecto Acci&oacute;n colectiva para la transformaci&oacute;n de conflictos
						socio-ambientales en ecosistemas de p&aacute;ramo: Piloto en la subcuenca del r&iacute;o
						Surat&aacute;, se desarrolla con los siguientes prop&oacute;sito&shy;&shy;&shy;&shy;&shy;s:
					</p>
					<ul>
						<li>
							Propiciar espacios de di&aacute;logo y encuentro que permitan, de manera participativa,
							alcanzar acuerdos colectivos locales, municipales y regionales; que puedan ser seguidos,
							monitoreados y verificados; en torno al manejo integral de la subcuencia del r&iacute;o
							Surat&aacute;.
						</li>
						<li>
							Dise&ntilde;ar e implementar un sistema de monitoreo que involucre atores estatales y no
							estatales y permita hacer seguimiento a los acuerdos colectivos levantados, las actividades
							socioecon&oacute;micas y sus impactos, la conservaci&oacute;n del ecosistema de
							p&aacute;ramo y la calidad del agua en la subcuenca del r&iacute;o Surat&aacute;.
						</li>
					</ul>
					<p>
						La calidad del agua<br /> El monitoreo de la calidad del agua es un buen punto de partida
						para construir y hacer seguimiento a los acuerdos colectivos sobre las actividades humanas en
						la subcuenca, ya que:
					</p>
					<ul>
						<li>
							El agua es un bien colectivo cuya provisi&oacute;n y calidad depende de todos los actores
							de la subcuenca (estatales y no estatales).
						</li>
						<li>
							La coordinaci&oacute;n de acciones frente al agua como objetivo com&uacute;n necesariamente
							implica enfrentar conflictos en torno a los usos del suelo y el subsuelo y a la
							conservaci&oacute;n de otros bienes y servicios ecosist&eacute;micos.
						</li>
						<li>
							Se relaciona f&aacute;cilmente con la calidad de vida, lo que implica la necesidad de
							introducir visiones humanas y de derechos individuales y fundamentales a las soluciones
							propuestas frente a los conflictos de las actividades econ&oacute;micas.
						</li>
						<p>Estrategias</p>
						<p>
							Talleres comunitarios para la construcci&oacute;n participativa de acuerdos colectivos
							desde las instituciones, enmarcados en las dimensiones local y regional, para el manejo
							integral de los recursos de la subcuenca.
						</p>
						<p>
							Uso de juegos econ&oacute;micos como herramienta metodol&oacute;gica para generar
							discusiones y reflexiones en torno a las implicaciones y retos de las actividades
							econ&oacute;micas en la subcuenca y a los incentivos econ&oacute;micos para el cambio
							tecnol&oacute;gico.
						</p>
						<p>
							Jornadas de medici&oacute;n, en conjunto con los habitantes de la subcuenca, de algunos
							par&aacute;metros de la calidad del agua en puntos estrat&eacute;gicos de monitoreo
							seleccionados.
						</p>
						<p>Para conocer informaci&oacute;n del proyecto puede consultar la p&aacute;gina:</p>
						<a href="http://www.santurbanvisible.org/">http://www.santurbanvisible.org/</a>
					</ul>
				</div>

				<div className="description">
					<div className="patrocinadores">
						<div className="img_container">
							<img src={us_aid} alt="" className="patrocinador us_aid" />
						</div>
						<div className="img_container">
							<img src={foro_nacional_por_colombia} alt="" className="patrocinador" />
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

					.imagen {
						margin: 0 auto;
						max-width: 900px;
						max-height: 600px;
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
						width: 15rem;
						height: auto;
						max-height: 10rem;
					}

					.img_container {
						display: flex;
						flex-direction: column;
						justify-content: center;
					}

					.us_aid {
						width: 43rem;
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

				<style jsx global>{`
					.slick-prev:before,
					.slick-next:before {
						color: black;
					}
				`}</style>
			</div>
		);
	}
}

export default Proyecto1;
