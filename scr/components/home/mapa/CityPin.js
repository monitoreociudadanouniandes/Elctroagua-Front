import React, { PureComponent } from 'react';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
	cursor: 'pointer',
	fill: '#d00',
	stroke: 'none'
};

export default class CityPin extends PureComponent {
	render() {
		const { size = 20, onClick } = this.props;

		return (
			<svg
				height={size}
				viewBox="0 0 30 30"
				style={{ ...pinStyle, transform: `translate(${-size / 2}px,${-size}px)` }}
				onClick={onClick}>
				<g>
					<path
						style={{ fill: '#0F86BD' }}
						d="M15,28.9c-1.6-3-8-9.4-9.9-13.5c-0.6-1.3-1-2.7-1-4.2C4.2,5.7,9.1,1.1,15,1.1s10.9,4.6,10.9,10.1
      			c0,1.5-0.4,2.9-1,4.2l0,0C23,19.5,16.6,25.9,15,28.9L15,28.9z"
					/>
				</g>
				<g>
					<path
						style={{
							fill: 'none',
							stroke: '#87C2DE',
							strokeWidth: 2,
							strokeLinecap: 'round',
							strokeMiterlimit: 10
						}}
						d="M5.1,15.4
      			c-0.6-1.3-1-2.7-1-4.2C4.2,5.7,9.1,1.1,15,1.1s10.9,4.6,10.9,10.1c0,1.5-0.4,2.9-1,4.2"
					/>

					<line
						style={{
							fill: 'none',
							stroke: '#87C2DE',
							strokeWidth: 2,
							strokeLinecap: 'round',
							strokeMiterlimit: 10
						}}
						x1="15.1"
						y1="28.9"
						x2="15.1"
						y2="28.9"
					/>
					<path
						style={{
							fill: 'none',
							stroke: '#87C2DE',
							strokeWidth: 2,
							strokeLinecap: 'round',
							strokeMiterlimit: 10
						}}
						d="M5.1,15.4
      			c1.9,4.1,8.3,10.5,9.9,13.5"
					/>
					<path
						style={{
							fill: 'none',
							stroke: '#87C2DE',
							strokeWidth: 2,
							strokeLinecap: 'round',
							strokeMiterlimit: 10
						}}
						d="M24.9,15.4
      			c-1.9,4.1-8.3,10.5-9.9,13.5h0v0"
					/>
				</g>
			</svg>
		);
	}
}
