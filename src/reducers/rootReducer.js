import { combineReducers } from 'redux';
import people from './peopleReducer';
import starships from './startshipReducer' 

export default combineReducers({
    people, starships
});