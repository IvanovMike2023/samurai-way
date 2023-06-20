import React from "react";
import {DialogItemlist} from "./Dialoglist/DialogItemlist";
import s from './Dialogs.module.css'
import {ActionType, AddDialogAC, ChangeDialogAC, DialogPageType} from "../../Redux/state";
import {Dialogitem} from "./Dialogitem/Dialogitem";

type DialogPropsType = {
    dialogsPage: DialogPageType
    dispatch:(action: ActionType)=>void
}
export const Dialogs = (props: DialogPropsType) => {
    const onChangeDialog=(text:string)=>{
        props.dispatch(ChangeDialogAC(text))
    }
    const addDialog=()=>{
        props.dispatch(AddDialogAC(props.dialogsPage.dialogmessage))
    }
    return <>
        <div className={s.WrapperDialogs}>
            <div className={s.dialog_item1}>
                <DialogItemlist dialogs={props.dialogsPage.dialogs}/>
            </div>
            <div className={s.dialog_item2}>
                <Dialogitem dialogs={props.dialogsPage.dialogs} addDialog={addDialog} onChangeDialog={onChangeDialog} dialogmessage={props.dialogsPage.dialogmessage} />
            </div>
        </div>
    </>
}