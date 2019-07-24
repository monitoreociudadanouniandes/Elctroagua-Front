import React, { Component } from 'react';
import { bp } from '../../theme';

class Gallery extends Component {
	render() {
		const { bp_medium } = bp;
		return (
			<div className="gallery">
				<figure className="gallery__item">
					<img src="img/sensores.jpg" alt="" className="gallery__photo" />
				</figure>
				<figure className="gallery__item">
					<img src="img/calidad_agua.jpeg" alt="" className="gallery__photo" />
				</figure>
				<figure className="gallery__item">
					<img src="img/pollution.jpg" alt="" className="gallery__photo" />
				</figure>
				<style jsx>{`
					.gallery {
						display: flex;

						&__item {
							width: 100%;
						}
						&__photo {
							width: 100%;
							height: 17rem;
							object-fit: cover;
							display: block;

							@media ${bp_medium} {
								height: 12rem;
							}
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Gallery;
