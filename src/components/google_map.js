import React, {Component} from 'react';

class GoogleMap extends Component{
	componentDidMount() {
		if(this.props.google)
			console.log("GoogleMap component Mounted.Test Successful");
		else {
			new google.maps.Map(this.refs.map,{
				zoom:12,
				center:{
					lat: this.props.lat,
					lng: this.props.lon
				}
			});
		}
	}

	render(){
		return <div ref="map" />;
	}

}

export default GoogleMap;
