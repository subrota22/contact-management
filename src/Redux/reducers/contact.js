import { contactInfo } from "../../Data/contactInfo";
import { CONTACT_INFO } from "../actionType/actionType";
const initialState = {
    contactData: [...contactInfo],
  };

export const displayContactDataReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CONTACT_INFO:
         return{
            ...state,
            contactInfo:payload
         }

        default:
             return state ;
    }
}

