

import { GET_SINGLE_TEAM, GET_TEAMS, SET_LOADER_TRUE } from "../actions/types";

const initialState = {
	teams: [],
	meta: {},
	isLoading: true,
	team: {},
	isTeamLoading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_TEAMS:
			return {
				...state,
				isTeamLoading: true,
				isLoading: false,
				teams: action.payload.data,
				meta: action.payload.meta,
			};
		case GET_SINGLE_TEAM: {
			return {
				...state,
				isTeamLoading: false,
				team: action.payload,
			};
		}
		case SET_LOADER_TRUE: {
			return {
				...state,
				isTeamLoading: true,
			};
		}
		default:
			return state;
	}
}
