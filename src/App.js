import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./component/Main";
import Favourite from "./component/Favourite";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
export class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route exact path="/favourite">
						<Favourite />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
