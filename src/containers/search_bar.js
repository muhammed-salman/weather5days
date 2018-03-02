import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather, updateCity} from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={term: ''};
		this.onInputChange=this.onInputChange.bind(this);
		this.onFormSubmit=this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.props.updateCity(event.target.value);
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.props.term);
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five day forecast in your favourite cities"
					className="form-control"
					value={this.props.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
					Submit
					</button>
				</span>
			</form>
			);
	}
}

function mapStateToProps(state){
	return {term:state.city};
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({updateCity,fetchWeather},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
