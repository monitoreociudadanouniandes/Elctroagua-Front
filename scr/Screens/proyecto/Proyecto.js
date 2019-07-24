import React, { Component } from 'react';
import Mapa from '../../components/home/deck_mapa/mapa';
import { bp, colors } from '../../theme';
import Proyecto1 from './proyectos/proyecto1/Proyecto1';
import Proyecto2 from './proyectos/proyecto2/Proyecto2';
import Proyecto3 from './proyectos/proyecto3/Proyecto3';
import Footer from '../../components/footer/Footer';

class Proyecto extends Component {
	state = {
		tab: 1
	};

	cambiarPestana = nuevaTab => {
		this.setState({ tab: nuevaTab });
	};

	render() {
		const { tab } = this.state;
		const { bp_large, bp_medium, bp_small } = bp;
		const {
			color_primary,
			color_primary_light,
			color_grey_light_1,
			color_grey_light_2,
			shadow_light
		} = colors;
		return (
			<div>
				<div className="router">
					<ul className="sub_tabs">
						<li
							className={`sub_tab ${tab === 1 && 'sub_tab--active'}`}
							onClick={this.cambiarPestana.bind(this, 1)}>
							<a className="tab_link">Proyecto 1</a>
						</li>
						<li
							className={`sub_tab ${tab === 2 && 'sub_tab--active'}`}
							onClick={this.cambiarPestana.bind(this, 2)}>
							<a className="tab_link">Proyecto 2</a>
						</li>
						<li
							className={`sub_tab ${tab === 3 && 'sub_tab--active'}`}
							onClick={this.cambiarPestana.bind(this, 3)}>
							<a className="tab_link">Proyecto 3</a>
						</li>
					</ul>
				</div>

				{this.state.tab === 1 && <Proyecto1 />}
				{this.state.tab === 2 && <Proyecto2 />}
				{this.state.tab === 3 && <Proyecto3 />}

				<style jsx>{`
					.router {
						display: flex;
						justify-content: center;
						margin-top: 25px;
						margin-bottom: 25px;
					}
					.activa {
						color: red;
						text-transform: uppercase;
					}
					.sub_tabs {
						display: flex;
						list-style: none;
						font-size: 1.8em;
						height: 30px;
					}
					.sub_tab {
						text-transform: uppercase;
						cursor: pointer;
						position: relative;
					}

					.sub_tab--active > a {
						color: black;
					}

					.sub_tab::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						height: 120%;
						width: 3px;
						background-color: ${color_primary};
						transform: scaleY(0);
						transform-origin: center;
						transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.2s;
					}

					.sub_tab:hover::before,
					.sub_tab--active::before {
						transform: scaleY(1);
						width: 100%;
						opacity: 0.3;
					}

					.sub_tab:active::before {
						background-color: ${color_primary_light};
					}

					.tab_link {
						padding: 1.5rem 3rem;
					}

					.tab_link:link,
					.tab_link:visited {
						color: ${color_grey_light_1};
						text-decoration: none;
						text-transform: uppercase;
						display: block;
						padding: 1.5rem 3rem;
						display: flex;
						align-items: center;
						position: relative;
						z-index: 100;

						@media ${bp_medium} {
							justify-content: center;
							padding: 2rem;
						}

						@media ${bp_small} {
							flex-direction: column;
							padding: 1.5rem 0.5rem;
						}
					}

					.map_container {
						height: 60rem;
					}

					li:not(:last-child) {
						margin-right: 20px;
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
				<Footer />
			</div>
		);
	}
}

export default Proyecto;
