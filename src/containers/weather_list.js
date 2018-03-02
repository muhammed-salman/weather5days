import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
	renderWeather(cityData){
		if(!cityData){
			return (
				<tr key="error">
					<td colSpan="2" className="alert alert-danger" role="alert">
	  				Sorry! We are unable to retrive data for the given city at the moment.
					</td>
					<td colSpan="2" className="alert alert-info" role="alert">
						<strong>Note:</strong> Currently, we display data for Indian cities only.
					</td>
				</tr>
 			);
		}
		const name=cityData.city.name;
		const temps=cityData.list.map(weather=>weather.main.temp);
		const pressures=cityData.list.map(weather=>weather.main.pressure);
		const humidities=cityData.list.map(weather=>weather.main.humidity);
		const {lon,lat}=cityData.city.coord;

		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="K" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
				<td><Chart data={humidities} color="black" units="%" /></td>
			</tr>
			);
	}
	render(){
		// console.log(this.props);
		return (
				<table className="table table-hover">
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature (K)</th>
							<th>Pressure (hPa)</th>
							<th>Humidity (%)</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			);
	}
}

function mapStateToProps({weather,city}){
	return {weather,term: city};

}

export default connect(mapStateToProps)(WeatherList);
