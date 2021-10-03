import React, { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
export class GameCards extends Component {
	render() {
		return this.props.gameDataApi.map((obj) => {
			return (
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={obj.img} />
						<Card.Body>
							<Card.Title>{obj.name}</Card.Title>
							<Card.Text>{obj.description}</Card.Text>
							<Card.Text>{obj.gender}</Card.Text>
							<Button
								variant="primary"
								onClick={(e) => {
									this.props.addtoFavorite(obj);
								}}
							>
								add to favourite
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default GameCards;
