import React from 'react';
export default props => {
	const { active } = props;

	if (active) {
		const { payload, label } = props;
		if (payload.length > 0) {
			return (
				<div className="custom-tooltip">
					<p className="">{`Fecha: ${props.label}`}</p>
					<p className=" key">{`${payload[0].dataKey}: ${Math.round(payload[0].value * 100) / 100}`}</p>
					<p className="">{`Promedio calculado con: ${
						payload[0].payload.items
					} datos registrados este dia`}</p>
					<style jsx>{`
						.key {
							color: ${payload[0].color};
						}

						.custom-tooltip {
							border: 0.5px solid grey;
							background-color: #fff;
							padding: 5px;
						}
					`}</style>
				</div>
			);
		}
		return null;
	}

	return null;
};
