import { GET_VIDEOGAMES } from './actionTypes';

import axios from 'axios';

export const getVideogamesAPI = () => {
	return async function (dispatch) {
		const response = await axios.get(`http://localhost:3001/videogames`);
		console.log(response.data);
		return dispatch({
			type: GET_VIDEOGAMES,
			payload: response.data,
		});
	};
};
