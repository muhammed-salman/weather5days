import {UPDATE_CITY} from '../actions/index';

export default function (state=[],action) {
	switch(action.type){
		case UPDATE_CITY:
			return action.payload.term;
			break;
	}
	return state;
}
