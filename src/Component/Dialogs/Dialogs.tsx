import React from "react";
import {DialogItemlist} from "./Dialoglist/DialogItemlist";
import s from './Dialogs.module.css'
import {Dialogitem} from "./Dialogitem/Dialogitem";
import {useDispatch, useSelector} from "react-redux";
import {AddDialogAC, ChangeDialogAC, DialogItemType, DialogPageType} from "../../Redux/dialog-reducer";
import {AppRootStateType} from "../../Redux/store";

export const Dialogs = () => {
    const {dialogs,dialogmessage} = useSelector<AppRootStateType,DialogPageType>(state=>state.dialogs)
    const dispatch = useDispatch()
    const onChangeDialog=(text:string)=>{
        dispatch(ChangeDialogAC(text))
    }
    const addDialog=()=>{
        dispatch(AddDialogAC(dialogmessage))
    }
    return <>
        <div className={s.WrapperDialogs}>
            <div className={s.dialog_item1}>
                <DialogItemlist dialogs={dialogs}/>
            </div>
            <div className={s.dialog_item2}>
                <Dialogitem dialogs={dialogs} addDialog={addDialog} onChangeDialog={onChangeDialog} dialogmessage={dialogmessage} />
            </div>
        </div>
    </>
}