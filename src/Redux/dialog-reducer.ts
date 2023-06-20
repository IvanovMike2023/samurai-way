import {ActionType, DialogPageType} from "./state";

export const DialogReducer=(state:DialogPageType,action: ActionType):DialogPageType=>{
    switch (action.type){
        case "CHANGE-DIALOG":
            return {...state,dialogmessage:action.newdialogitem}
        case "ADD-DIALOG":
            return {...state,dialogs:[{id:4,name: 'sddsd',dialogitem:action.newdialogitem},...state.dialogs]}
    }
    return state
}