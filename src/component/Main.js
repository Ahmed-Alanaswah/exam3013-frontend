import axios from "axios";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import GameCards from "./GameCards";
export class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showData: false,
			gameDataApi: [],
		};
	}

	componentDidMount = async () => {
		const request = await axios.get("http://localhost:8001/game");
		this.setState({
			showData: true,
			gameDataApi: request.data,
		});
	};

	addtoFavorite = async (obj) => {
		axios.post("http://localhost:8001/game/favourite", obj);
		console.log(obj);
	};
	render() {
		return (
			<Row>
				{this.state.showData && (
					<GameCards
						gameDataApi={this.state.gameDataApi}
						addtoFavorite={this.addtoFavorite}
					/>
				)}
			</Row>
		);
	}
}

export default Main;
