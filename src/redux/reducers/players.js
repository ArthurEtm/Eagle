
import { GET_SINGLE_PLAYER, GET_PLAYERS } from "../actions/types";

const initialState = {
	players: [],
	meta: {},
	isLoading: true,
	player: {},
	isPlayerLoading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_PLAYERS:
			return {
				...state,
				isPlayerLoading: true,
				isLoading: false,
				players: action.payload.data,
				meta: action.payload.meta,
			};
		case GET_SINGLE_PLAYER: {
			return {
				...state,
				isPlayerLoading: false,
				player: action.payload,
			};
		}
		default:
			return state;
	}
}
