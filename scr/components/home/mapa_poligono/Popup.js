import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
	{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
	{ name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
	{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
	{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
	{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
	{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
	{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

class Popup extends Component {
	render() {
		return (
			<div className="marcador">
				{/* <p>Este dato fue tomado en: {marker.properties.timestamp}</p>
				<p>id celular: {marker.properties.id_celular}</p>
				<p>hg: {marker.properties.hg} </p>
				<p>Temperatura: {marker.properties.temp} °C</p>
				<p>Conductividad: {marker.properties.conduct} µS/cm</p>
				<p>Oxigeno Disuelto: {marker.properties.od} mg/L</p>
				<p>pH: {marker.properties.pH}</p> */}
				<LineChart
					width={600}
					height={300}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>
				<button
					onClick={evt => {
						this.props.close();
					}}>
					Cerrar
				</button>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate blanditiis possimus error
					magni delectus nihil rem quod animi fugit quibusdam aperiam quis asperiores, id tempore,
					explicabo dolores sequi. Id, similique!Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Inventore laudantium illo dolor maiores optio error beatae dignissimos sed dolorem ex
					laboriosam repellat iste, tempora cumque fuga assumenda, vitae commodi doloremque.Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Blanditiis, ipsa, explicabo. Veniam quidem vel
					impedit officia ea eveniet esse sequi praesentium ullam, eum eius sed quisquam nemo expedita
					quas, ipsum?
				</div>

				<style jsx>{`
					.marcador {
						width: 600px;
					}
				`}</style>
			</div>
		);
	}
}

export default Popup;
