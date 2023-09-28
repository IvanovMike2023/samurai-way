export type ActionType= TypeDispatchChangeDialog | TypeDispatchAddDialog
type TypeDispatchChangeDialog = {
    type: 'CHANGE-DIALOG'
    newdialogitem: string
}
export type DialogItemType = {
    name: string
    id: number
    dialogitem: string
}
type TypeDispatchAddDialog = {
    type: 'ADD-DIALOG'
    newdialogitem: string
}
export type DialogPageType = {
    dialogs: DialogItemType[]
    dialogmessage:string
}
let initialstate: DialogPageType= {
    dialogmessage: 'привет',
    dialogs: [
        {id: 1,name: 'Mike',dialogitem:'scsdcdsc'},
        {id: 2,name: 'Alex',dialogitem:'scsdcdsc'},
        {id: 3,name: 'Ivan',dialogitem:'scsdcdsc'},
        {id: 4,name: 'Sem',dialogitem:'scsdcdsc'},
        {id: 5,name: 'Dasha',dialogitem:'scsdcdsc'}
    ]
}
export const DialogReducer=(state:DialogPageType=initialstate,action: ActionType):DialogPageType=>{
    switch (action.type){
        case "CHANGE-DIALOG":
            return {...state,dialogmessage:action.newdialogitem}
        case "ADD-DIALOG":
            return {...state,dialogs:[{id:4,name: 'sddsd',dialogitem:action.newdialogitem},...state.dialogs]}
    }
    return state
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