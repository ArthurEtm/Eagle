

import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home">
			<div className="ui container">
				<div className="home-content">
					<h1 className="home-content_title">Welcome to BallTillYouFall</h1>
					<p className="home-content_subtext">
						Anything worth doing is worth overdoing
					</p>
					<div className="home-content_actions">
						<Link to="/teams" className="home-content-button_teams">
							<button className="ui inverted button">Teams</button>
						</Link>
						<Link to="/players" className="home-button">
							<button className="ui button">Players</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
