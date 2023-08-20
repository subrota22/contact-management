import { COVID_INFO, COVID_INFO_DATE, COVID_INFO_UPDATE } from "../actionType/actionType";

//covid country reducer
export const getCovidCountryReducer = (state = [], {type, payload}) => {

    switch (type) {
        case COVID_INFO:
            
          return {...state, covidInfo:payload} ;
    
        default:
    return state ;
    }
  
  } 
//covid date reducer
  export const getCovidCountryDateReducer = (state = {}, {type, payload}) => {

    switch (type) {
        case COVID_INFO_DATE:
            
          return {...state, covidInfoDate:payload} ;
    
        default:
    return state ;
    }
  
  } 
  //covid update reducer

export const getCovidCountryUpdateReducer = (state = {}, {type, payload}) => {

  switch (type) {
      case COVID_INFO_UPDATE:
          
        return {...state, covidInfoUpdate:payload} ;
  
      default:
  return state ;
  }

} 