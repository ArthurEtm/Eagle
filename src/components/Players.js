import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getPlayers } from "../redux/actions/players";
import Loader from "./Loader";


function Players(props) {
	const { isLoading, players, meta } = props.players;

	useEffect(() => {
		console.log("Running");
		props.getPlayers();
	}, []);

	return (
		<div className="players">
			<h1 className="players-title">Players Catalog</h1>
			<div className="ui container">
				<div className="ui four link cards players-card">
					{isLoading ? (
						<Loader />
					) : (
						players.map((player, i) => {
							return (
								<Link class="card" to={`/player/${player.id}`} key={i}>
									<div class="content">
										<div class="header">
											{player.first_name} {player.last_name}
										</div>
										{/* <div class="meta">{team.abbreviation}</div> */}
										<div class="center aligned description">
											Team{" "}
											<Link className="with-a" to={`/team/${player.team.id}`}>
												<strong>{player.team.abbreviation}</strong>
											</Link>
										</div>
									</div>
								</Link>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	players: state.players,
});

export default connect(mapStateToProps, { getPlayers })(Players);
