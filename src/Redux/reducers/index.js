import {combineReducers} from "redux" ;
import { displayContactDataReducer } from "./contact";
import { getCovidCountryDateReducer, getCovidCountryReducer, getCovidCountryUpdateReducer } from "./covidInfo";
//set all reducers 
export const rootReducer  =  combineReducers({
  contacts:displayContactDataReducer,
  covidCountry:getCovidCountryReducer,
  covidDate:getCovidCountryDateReducer,
  covidUpdate:getCovidCountryUpdateReducer,
})