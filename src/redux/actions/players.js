import axios from "axios";
import { GET_SINGLE_PLAYER, GET_PLAYERS, SET_LOADER_TRUE } from "./types";


export const getPlayers = () => (dispatch) => {
	axios.get(`https://www.balldontlie.io/api/v1/players`).then(({ data }) => {
		dispatch({
			type: GET_PLAYERS,
			payload: data,
		});

		dispatch({
			type: SET_LOADER_TRUE,
		});
	});
};

export const getSinglePlayer = (id) => (dispatch) => {
	axios
		.get(`https://www.balldontlie.io/api/v1/players/${id}`)
		.then(({ data }) => {
			dispatch({
				type: GET_SINGLE_PLAYER,
				payload: data,
			});
		});
};
