import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { getSinglePlayer } from "../redux/actions/players";
import Loader from "./Loader";


function Player(props) {
	const { id } = useParams();

	
	const { player, isPlayerLoading } = props.players;

	useEffect(() => {
		console.log("check");
		props.getSinglePlayer(id);
	}, []);

	return (
		<div className="player">
			<h1 className="player-title">Player {player.first_name}</h1>
			<div className="ui container">
				{isPlayerLoading ? (
					<Loader />
				) : (
					<div class="ui card player-body">
						<div class="content">
							<div class="header">
								{player.last_name}, {player.first_name}
							</div>
							<div class="meta">Position | {player.position}</div>
							<div class="description">
								{player.height_feet ? (
									<p>
										Height {player.height_feet}'{player.height_inches}"
									</p>
								) : (
									<p>Height NA</p>
								)}
								{player.weight ? (
									<p>Weight {player.weight}</p>
								) : (
									<p>Weight NA</p>
								)}
							</div>
						</div>
						<div class="extra content">
							<Link to={`/team/${player.team.id}`}>
								{player.team.abbreviation}
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	players: state.players,
});

export default connect(mapStateToProps, { getSinglePlayer })(Player);
