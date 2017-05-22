import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import List from "./pages/list/List";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cartItems: [ 
				{
					itemData: {
						"name":"Men+s+Tech+Shell+Full-Zip",
						"title":"Men's Tech Shell Full-Zip",
						"category":"mens_outerwear",
						"price":50.20,
						"description":"A versatile full-zip that you can wear all day long and even to the gym. This technical shell features moisture-wicking fabric, added stretch and a hidden pocket for your smartphone or media player.&amp;nbsp;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;100% polyester.&lt;/li&gt;&lt;li&gt;Smooth, technical front with textured mesh back.&lt;/li&gt;&lt;li&gt;Drawstring bottom for adjustable fit.&lt;/li&gt;&lt;li&gt;Raglan sleeves.&lt;/li&gt;&lt;li&gt;Available in forest green with the white Google logo embroidered at left chest.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
						"image":"/img/content/10-15068B.jpg",
						"largeImage":"/img/content/10-15068A.jpg"
					},
					quantity: 2,
					size: "S",
				},
				{
					itemData: {
						"name":"Anvil+L+S+Crew+Neck+-+Grey",
						"title":"Anvil L/S Crew Neck - Grey",
						"category":"mens_outerwear",
						"price":22.15,
						"description":"You'll be swooning over this crew neck as soon as you feel how soft it is.&amp;nbsp;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;40% preshrunk ring-spun cotton, 60% polyester terry fleece.&amp;nbsp;&lt;/li&gt;&lt;li&gt;Available in dark heather charcoal with the white Google logo screen printed across center chest.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
						"image":"/img/content/10-14154B.jpg",
						"largeImage":"/img/content/10-14154A.jpg"
					},
					quantity: 4,
					size: "L",
				},
			],
		};
	}

	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Header />
					<section className="main">
						<div className="wrapper">
							<Route exact path="/" component={ Home } />
							<Route path="/list/:category" component={ List } />
							<Route path="/detail/:category/:itemName" component={ Detail } />
							<Route path="/cart" render={ () => (<Cart items={ this.state.cartItems } />) } />
						</div>
					</section>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));