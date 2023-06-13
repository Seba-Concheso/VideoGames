import { GET_VIDEOGAMES } from './actionTypes';

const intilState = {
	videogames: [],
	videogamesDetail: [],
};

const reducer = (state = intilState, { type, payload }) => {
	switch (type) {
		case GET_VIDEOGAMES:
			return {
				// ...state,
				videogames: payload,
			};
		default:
			return { ...state };
	}
};

export default reducer;
