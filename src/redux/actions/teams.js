
import axios from "axios";
import { GET_SINGLE_TEAM, GET_TEAMS } from "./types";


export const getTeams = () => (dispatch) => {
	axios.get(`https://www.balldontlie.io/api/v1/teams`).then(({ data }) => {
		dispatch({
			type: GET_TEAMS,
			payload: data,
		});
	});
};


export const getSingleTeam = (id) => (dispatch) => {
	axios
		.get(`https://www.balldontlie.io/api/v1/teams/${id}`)
		.then(({ data }) => {
			dispatch({
				type: GET_SINGLE_TEAM,
				payload: data,
			});
		});
};
