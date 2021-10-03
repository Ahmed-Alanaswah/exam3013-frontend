import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import FavouriteCards from "./FavouriteCards";
import Form from "./Form";
export class Favourite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showFavData: false,
			gameFAvDataApi: [],
			showForm: false,
			name: "",
			description: "",
			slug: "",
		};
	}

	componentDidMount = async () => {
		const request = await axios.get("http://localhost:8001/game/favourite");
		this.setState({
			showFavData: true,
			gameFAvDataApi: request.data,
		});
	};

	deleteFavorite = async (slug) => {
		const request = await axios.delete(
			`http://localhost:8001/game/favourite/${slug}`
		);
		this.setState({
			showFavData: true,
			gameFAvDataApi: request.data,
		});
	};
	showFormUpdate = async (slug, name, description) => {
		this.setState({
			slug: slug,
			name: name,
			description: description,
			showForm: true,
		});
	};

	updateData = async (e) => {
		e.preventDefault();
		const updated = {
			name: this.state.name,
			description: this.state.description,
		};
		console.log(updated);
		const request = await axios.put(
			`http://localhost:8001/game/favourite/${this.state.slug}`,
			updated
		);

		this.setState({
			gameFAvDataApi: request.data,
			showFavData: true,
		});
		console.log(request.data);
	};

	updateName = (e) => {
		this.setState({ name: e.target.value });
	};
	updatedescription = (e) => {
		this.setState({
			description: e.target.value,
		});
	};
	render() {
		return (
			<Row>
				{this.state.showForm && (
					<Form
						updateName={this.updateName}
						updatedescription={this.updatedescription}
						updateData={this.updateData}
						name={this.state.name}
						description={this.state.description}
					/>
				)}
				{this.state.showFavData && (
					<FavouriteCards
						gameFAvDataApi={this.state.gameFAvDataApi}
						deleteFavorite={this.deleteFavorite}
						showFormUpdate={this.showFormUpdate}
					/>
				)}
			</Row>
		);
	}
}

export default Favourite;
