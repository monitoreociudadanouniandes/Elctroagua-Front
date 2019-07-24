import React from 'react';
export default props => {
	return (
		<div>
			<strong>{props.titulo}</strong>
			<style jsx>{`
				strong {
					margin-bottom: 10px;
				}
			`}</style>
		</div>
	);
};
