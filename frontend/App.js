import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import List from "./list/List";

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Header />
			<section className="main">
				<div className="wrapper">
					<Route exact path="/" component={ Home } />
					<Route path="/list/:category" component={ List } />
				</div>
			</section>
			<Footer />
		</div>
	</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));