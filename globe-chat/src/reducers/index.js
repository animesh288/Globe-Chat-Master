import { combineReducers } from "redux";

const enteredNameReducer = (enteredName='',action)=>{
    if(action.type === 'NAME_ENTERED'){
        return action.payload;
    }
    return enteredName;
}
const customizationReducer = (customize={headerColor : '#212529', bodyColor : '#414a4c',
headerTextColor:'#ffffff',bodyTextColor:'#f0f8ff',senderBox:'#dc143c',receiverBox:'#ff6347',messageColor:'#fffafa'},action)=>{
    if(action.type === 'CUSTOMIZE'){
        return action.payload;
    }
    return customize;
}


export default combineReducers({
    enteredName : enteredNameReducer,
    customize : customizationReducer
});