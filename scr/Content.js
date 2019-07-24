import React, { Component } from 'react';
import Router from './Router';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import { colors, bp } from './theme';

class Content extends Component {
	render() {
		const {
			color_grey_dark_2,
			color_primary_light,
			color_primary_dark,
			color_grey_light_1,
			shadow_dark
		} = colors;
		const { bp_medium, bp_large, bp_largest } = bp;
		return (
			<div>
				<div className="container">
					<Header title="Electroagua" />
					<div className="content">
						<Router>
							<Sidebar />
						</Router>
					</div>
					<style jsx>{`
					.container {
						max-width: 125rem;
						margin: 8rem auto;
						background-color: ${color_grey_light_1};
						box-shadow: ${shadow_dark};
						padding: 0;
						min-height: 50rem;

						@media ${bp_largest} {
							margin: 0;
							max-width: 100%;
							width: 100%;
						}
					}

					.content {
						display: flex;
						flex-direction: column;
						@media ${bp_medium} {
							flex-direction: column;
						}
					}
				`}</style>
					<style jsx global>{`
					* {
						margin: 0;
						padding: 0;
					}

					*,
					*::before,
					*::after {
						box-sizing: inherit;
					}

					html {
						box-sizing: border-box;
						font-size: 62.5%; // 1rem = 10px;

						@media ${bp_large} {
							font-size: 50%;
						}
					}

					body {
						font-family: 'Open sans', sans-serif;
						font-weight: 400;
						line-height: 1.6;
						color: ${color_grey_dark_2};
						background-image: linear-gradient(
							to right bottom,
							${color_primary_light},
							${color_primary_dark}
						);
						background-size: cover;
						background-repeat: no-repeat;
						min-height: 100vh;
					}
				`}</style>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Content;
