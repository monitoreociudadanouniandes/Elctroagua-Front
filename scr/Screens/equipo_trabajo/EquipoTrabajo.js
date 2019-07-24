import React, { Component } from 'react';
import alba from './Equipo de trabajo/Alba-Avila.jpg';
import lorenzo from './Equipo de trabajo/Di_lorenzo.jpg';
import elena from './Equipo de trabajo/Elena_Bernalte.jpg';
import felipe from './Equipo de trabajo/Felipe_Muñoz.jpg';
import husserl from './Equipo de trabajo/Husserl-Johanna.jpg';
import jaime from './Equipo de trabajo/Jaime_PEREZ.jpg';
import jannis from './Equipo de trabajo/Jannis_Wenk.jpg';
import jose from './Equipo de trabajo/Jose_Lopez.jpg';
import juan from './Equipo de trabajo/Juan_Cardenas.jpg';
import pedro from './Equipo de trabajo/Pedro_Estrela.jpg';
import sebastian from './Equipo de trabajo/Sebastian_arevalo.jpg';
import juanfelipe from './Equipo de trabajo/Juan_Felipe_Orti.jpg';
import carlos from './Equipo de trabajo/carlos.jpg';
import blair from './Equipo de trabajo/Blair.jpg'

import { bp, colors } from '../../theme';

class EquipoTrabajo extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (


			<div>
				<div className="detail">
					<div className="description">

						<h1>
							Equipo de trabajo
                        </h1>
						<h2>
							Nacionales
                        </h2>
						<hr></hr>
						<h3>
							Uniandes
                        </h3>

						<div className="portfolio-holder">
							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={juan} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://academia.uniandes.edu.co/AcademyCv/jccarden ">Juan Camilo Cárdenas </a></h4>
									<span>Facultad de Economía</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={felipe} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" target="_blank" href="https://academia.uniandes.edu.co/AcademyCv/fmunoz ">Felipe Muñoz</a> </h4>
									<span>Departamento de Ingeniería Química</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={husserl} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://academia.uniandes.edu.co/AcademyCv/jhusserl ">Johana Husserl</a></h4>
									<span>Departamento Civil y Ambiental</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={alba} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://academia.uniandes.edu.co/AcademyCv/a-avila ">Alba Ávila</a></h4>
									<span>Departamento de Ingeniería Eléctrica y Electrónica</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={jaime} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="http://jaimeandres.org">Jaime Andrés Peréz-Taborda </a></h4>
									<span>Departamento de Ingeniería Eléctrica y Electrónica</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={juanfelipe} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://www.usf.uni-osnabrueck.de/institut/mitarbeiter/ortiz_riomalo.html">Juan Felipe Ortiz Riomalo </a></h4>
									<span>Facultad de Economía</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={sebastian} alt="" />
								</div>

								<div className="member-info">
									<h4>Sebastián Arévalo</h4>
									<span>Departamento de Ingeniería Eléctrica y Electrónica</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={jose} alt="" />
								</div>

								<div className="member-info">
									<h4>Jose David Lopez Rivas</h4>
									<span>Facultad de Economía</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={carlos} alt="" />
								</div>

								<div className="member-info">
									<h4>Carlos Alejandro Jimenez</h4>
									<span>Departamento de Ingeniería Eléctrica y Electrónica</span>
								</div>
							</div>

						</div>









						


						

						
						<h2>
							Internacionales
                        </h2>
						<hr></hr>
						<b><h3>Bath University, UK</h3></b><h4>2017-2019</h4>
						
						<div className="portfolio-holder">
							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={lorenzo} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://researchportal.bath.ac.uk/en/persons/mirella-di-lorenzo ">Mirella Di Lorenzo</a></h4>
									<span>Department of Chemical Engineering</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={elena} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://www.researchgate.net/profile/Elena_Bernalte_Morgado ">Elena Bernalte</a></h4>
									<span>Department of Chemical Engineering</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={pedro} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://researchportal.bath.ac.uk/en/persons/pedro-estrela ">Pedro Estrela</a></h4>
									<span>Department of Electronic & Electrical Engineering</span>
								</div>
							</div>

							<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={jannis} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://researchportal.bath.ac.uk/en/persons/jannis-wenk ">Jannis Wenk</a></h4>
									<span>Department of Chemical Engineering</span>
								</div>
							</div>
						</div>

						<h4>2013-2015</h4>

						<div className="portfolio-holder">
						<div className="team-member">
								<div className="member-image">
									<img className="img-responsive" src={blair} alt="" />
								</div>

								<div className="member-info">
									<h4><a target="_blank" href="https://nautiluslive.org/people/donald-blair ">Donald Blair</a></h4>
									<span>PublicLab y MIT Media Lab</span>
								</div>
							</div>
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
					.people{
						height: 30vh;
					}
					#our-team{
						padding-top: 130px;
						padding-bottom: 120px;
					}
				
					.team-member{
						margin-top: 30px;
						box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
						flex-basis: 300px;
					}
				
					.member-image{
						position: relative;
					}
				
					.member-info{
						background-color: #f5f5f5;
						padding: 15px;
						height:20vh;
					}
				
					.member-info h4{
						margin-top: 0;
						margin-bottom: 6px;
					}
				
					.member-info span{
						text-transform: uppercase;
					}
				
					.team-member .member-social{
						position: absolute;
						width: 100%;
						height: 100%;
						background-color: rgba(0, 0, 0, 0.6);
						left: 0;
						top: 0;
						text-align: center;
						opacity: 0;
						-webkit-transition: all 0.3s ease-out 0s;
						-moz-transition: all 0.3s ease-out 0s;
						-ms-transition: all 0.3s ease-out 0s;
						-o-transition: all 0.3s ease-out 0s;
						transition: all 0.3s ease-out 0s;
						-moz-transform: scale(0.5);
						-webkit-transform: scale(0.5);
						-o-transform: scale(0.5);
						-ms-transform: scale(0.5);
						transform: scale(0.5);
					}
				
					.team-member:hover .member-social{
						opacity: 1;
						-moz-transform: scale(1);
						-webkit-transform: scale(1);
						-o-transform: scale(1);
						-ms-transform: scale(1);
						transform: scale(1);
					}
				
					.team-member .member-social a{
						position: relative;
						font-size: 16px;
						color: #fff;
						top: 47%;
					}
				
					.team-member:hover .member-social a{
						margin: 6px;
					}
					.portfolio-holder{
						display:flex;
						justify-content:space-between;
						flex-wrap:wrap;
						margin-bottom:10vh;
					}

					
				`}</style>
			</div>
		);
	}
}

export default EquipoTrabajo;
