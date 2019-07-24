import React, { Component } from 'react';
import axios from 'axios';
import { bp, colors } from '../../theme';

import { ROOT_URL } from '../../components/home/mapa_poligono/Mapa';

class Contacto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sender: '',
			mensaje: '',
			nombre: '',
			apellido: ''
		};
	}

	sendEmail = () => {
		console.log(this.state);
		axios
			.post(`${ROOT_URL}/contacto`, {
				...this.state
			})
			.then(res => {
				alert('Mensaje enviado!');
			})
			.catch(err => {
				alert('Ocurrio un error enviando el correo');
			});
	};

	updateField = (field, evt) => {
		this.setState({ [field]: evt.target.value });
	};

	_handleSubmit(event) {
		var mailData = this.state;
	}

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
					<div className="contactForm">
						<div>
							<h1>Contacto</h1>
						</div>
						<br />
						<div>
							<div className="col s12">
								<form>
									<div className="form-group col-md-6">
										<small className="form-text text-muted">Nombre</small>
										<input
											value={this.state.nombre}
											onChange={this.updateField.bind(this, 'nombre')}
											type="text"
											className="form-control"
										/>
									</div>
									<div className="form-group col-md-6">
										<small className="form-text text-muted">Apellido</small>
										<input
											value={this.state.apellido}
											onChange={this.updateField.bind(this, 'apellido')}
											type="text"
											className="form-control"
										/>
									</div>
									<div id="emailId" className="form-group col-md-12">
										<small className="form-text text-muted">Tu dirección de correo</small>
										<input
											type="text"
											value={this.state.sender}
											onChange={this.updateField.bind(this, 'sender')}
											className="form-control form-control-success"
											id="inputSuccess1"
										/>
									</div>
									<div id="emailContent" className="input-field col-md-12">
										<small className="form-text text-muted">Mensaje</small>
										<textarea
											className="form-control"
											value={this.state.mensaje}
											onChange={this.updateField.bind(this, 'mensaje')}
											name="emailcontent"
											id="emailcontent"
										/>
									</div>
									<div className="btnEnviar col-md-12">
										<button type="button" className="btn btn-primary btnEnviar" onClick={this.sendEmail}>
											Enviar
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<style jsx>{`
					h1 {
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

					.btnEnviar {
						margin-top: 10px;
						display: flex;
						justify-content: flex-end;
					}
				`}</style>
			</div>
		);
	}
}

export default Contacto;
