import axios from 'axios';

const API_KEY='58a4e0a65323e8a1d3f8101ad1192af4';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';
export const UPDATE_CITY='UPDATE_CITY';

export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city},in`;
	const request=axios.get(url).then();

	return{
		type: FETCH_WEATHER,
		payload: request
	};
}

export function updateCity(city){
	return{
		type: UPDATE_CITY,
		payload: {term: city}
	};
}
