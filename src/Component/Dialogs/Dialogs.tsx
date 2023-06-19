import React from "react";
import {DialogItem} from "./Dialog/DialogItem";
import s from './Dialogs.module.css'
import {DialogPageType} from "../../Redux/state";

type DialogPropsType ={
    dialogsPage: DialogPageType
}
export const Dialogs = (props:DialogPropsType) => {
    return <>
        <div className={s.WrapperDialogs}>
            <DialogItem dialogs={props.dialogsPage.dialogs}/>
            <div>
                messages
            </div>
        </div>
    </>
}