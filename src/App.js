import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Teams from "./components/Teams";
import Home from "./components/Home";

import store from "./store";
import Team from "./components/Team";
import Players from "./components/Players";
import Player from "./components/Player";

import "./style/styles.scss";


function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/teams" exact component={Teams} />
					<Route path="/team/:id" exact component={Team} />
					<Route path="/players" exact component={Players} />
					<Route path="/player/:id" exact component={Player} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
