import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { getSingleTeam } from "../redux/actions/teams";
import Loader from "./Loader";


function Team(props) {
	const { id } = useParams();
	const { team, isTeamLoading } = props.teams;

	useEffect(() => {
		props.getSingleTeam(id);
	}, []);

	return (
		<div className="team">
			<h1 className="team-title">
				Team {isTeamLoading ? " " : team.abbreviation}
			</h1>
			<div className="ui container">
				{isTeamLoading ? (
					<Loader />
				) : (
					<div class="ui card team-body">
						<div class="content">
							<div class="header">{team.city}</div>
							<div class="meta">Division | {team.division}</div>
							<div class="description">
								<p>Full Name {team.full_name}</p>
								<p>Name {team.name}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	teams: state.teams,
});

export default connect(mapStateToProps, { getSingleTeam })(Team);
