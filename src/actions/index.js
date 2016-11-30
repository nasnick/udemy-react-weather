//action creators always return an action/ type
const API_KEY = 'db45db0337e2fb330f52bf44be1a67da';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function FetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},nz`;
	return{
      type: FETCH_WEATHER
	};
}