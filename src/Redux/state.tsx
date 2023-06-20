//types


import {ProfileReducer} from "./profile-reducer";
import {DialogReducer} from "./dialog-reducer";

export type MessagesType = {
    id: number
    text: string
}

export type ProfilePageType = {
    message: MessagesType[]
    newmessage: string
}
export type DialogItemType = {
    name: string
    id: number
    dialogitem: string
}
export type DialogPageType = {
    dialogs: DialogItemType[]
    dialogmessage:string
}

export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
}
type TypeDispatchAddMessage = {
    type: 'ADD-MESSAGE'
    newmessage: string
}
type TypeDispatchChange = {
    type: 'CHANGE-MESSAGE'
    newitem: string
}
type TypeDispatchChangeDialog = {
    type: 'CHANGE-DIALOG'
    newdialogitem: string
}
type TypeDispatchAddDialog = {
    type: 'ADD-DIALOG'
    newdialogitem: string
}
export type ActionType=TypeDispatchChange | TypeDispatchAddMessage | TypeDispatchChangeDialog | TypeDispatchAddDialog
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => void
    dispatch: (action: ActionType) => void
}
const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogmessage: 'привет',
            dialogs: [
                {id: 1,name: 'Mike',dialogitem:'scsdcdsc'},
                {id: 2,name: 'Alex',dialogitem:'scsdcdsc'},
                {id: 3,name: 'Ivan',dialogitem:'scsdcdsc'},
                {id: 4,name: 'Sem',dialogitem:'scsdcdsc'},
                {id: 5,name: 'Dasha',dialogitem:'scsdcdsc'}
            ]
        },
        profilePage: {
            newmessage: 'vdsvsdv',
            message: [
                {id: 1, text: "Hi my name is Mike"},
                {id: 2, text: "Hi my name is Jon"},
                {id: 3, text: "Hi my name is Alex"}
            ]
        }
    },

    _onChange() {
        console.log('cacacas')
    },
    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return store._state
    },
    dispatch(action){
        this._state.profilePage = ProfileReducer(this._state.profilePage,action)
        this._state.dialogsPage = DialogReducer(this._state.dialogsPage,action)
        this._onChange()
    }
}

export default store
export const ChangeMessageAC = (newitem: string): TypeDispatchChange => {
    return {
        type: 'CHANGE-MESSAGE',
        newitem: newitem
    }as const
}
export const AddMessageAC = (newmessage: string): TypeDispatchAddMessage => {
    return {
        type: 'ADD-MESSAGE',
        newmessage: newmessage
    }as const
}
export const ChangeDialogAC=(newdialogitem:string):TypeDispatchChangeDialog=>{
    return{
        type: 'CHANGE-DIALOG',
        newdialogitem: newdialogitem
    }as const
}
export const AddDialogAC=(newdialogitem:string):TypeDispatchAddDialog=>{
    return{
        type: 'ADD-DIALOG',
        newdialogitem: newdialogitem
    }as const
}
