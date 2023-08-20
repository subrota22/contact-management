import { COVID_INFO, COVID_INFO_DATE, COVID_INFO_UPDATE } from "../actionType/actionType"
//set data for get covid country
export const covidCountryData = (covid) => {
    return {
        type: COVID_INFO,
        payload: covid,
    }
}

//set data for get covid date info
export const covidCountryDate = (covidDate) => {
    return {
        type: COVID_INFO_DATE,
        payload: covidDate,
    }
}

//set data for get covid  update
export const covidCountryUpdate = (covidUpdate) => {
    return {
        type: COVID_INFO_UPDATE,
        payload: covidUpdate,
    }
}


