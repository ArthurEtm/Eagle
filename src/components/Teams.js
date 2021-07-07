import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getTeams } from "../redux/actions/teams";

import Loader from "./Loader";

function Teams(props) {
	const { isLoading, teams, meta } = props.teams;

	useEffect(() => {
		console.log("Running");
		props.getTeams();
	}, []);

	return (
		<div className="teams">
			<h1 className="teams-title">Teams Catalog</h1>
			<div className="ui container">
				<div class="ui four link cards teams-card">
					{isLoading ? (
						<Loader />
					) : (
						teams.map((team, i) => {
							return (
								<Link class="card" to={`/team/${team.id}` }key={i}>
									<div class="content">
										<div class="header">{team.full_name}</div>
										<div class="meta">{team.abbreviation}</div>
										<div class="center aligned description">
											Division{" "}
											<span>
												<strong>{team.division}</strong>
											</span>
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
	teams: state.teams,
});

export default connect(mapStateToProps, { getTeams })(Teams);
