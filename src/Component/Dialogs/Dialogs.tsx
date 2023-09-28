import React from "react";
import {DialogItemlist} from "./Dialoglist/DialogItemlist";
import s from './Dialogs.module.css'
import { AddDialogAC, ChangeDialogAC, DialogPageType} from "../../Redux/state";
import {Dialogitem} from "./Dialogitem/Dialogitem";
import {useDispatch} from "react-redux";
import {DialogItemType} from "../../Redux/dialog-reducer";

type DialogPropsType = {
    dialogmessage: string,
    dialogs:DialogItemType[]
}
export const Dialogs = (props: DialogPropsType) => {
   const dispatch = useDispatch()
    const onChangeDialog=(text:string)=>{
        dispatch(ChangeDialogAC(text))
    }
    const addDialog=()=>{
        dispatch(AddDialogAC(props.dialogmessage))
    }
    return <>
        <div className={s.WrapperDialogs}>
            <div className={s.dialog_item1}>
                <DialogItemlist dialogs={props.dialogs}/>
            </div>
            <div className={s.dialog_item2}>
                <Dialogitem dialogs={props.dialogs} addDialog={addDialog} onChangeDialog={onChangeDialog} dialogmessage={props.dialogmessage} />
            </div>
        </div>
    </>
}