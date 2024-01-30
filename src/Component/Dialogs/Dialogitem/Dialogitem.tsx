import s from './Dialogitem.module.css'
import React, {ChangeEvent} from "react";
import {DialogItemType} from "../../../Redux/store";

type DialogitemMessage = {
    dialogmessage: string
    onChangeDialog: (d: string) => void
    addDialog: () => void
    dialogs: DialogItemType[]
}
export const Dialogitem: React.FC<DialogitemMessage> = (props) => {
    const onChangeDialogHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeDialog(e.currentTarget.value)
    }
    const addDialogHandler = () => {
        props.addDialog()
        props.onChangeDialog('')
    }
    return (
        <div className={s.WrapperDialogItem}>
            <div>
                <input className={s.DialogInput} type="text" value={props.dialogmessage}
                       onChange={onChangeDialogHandler}/>
            </div>
            <div className={s.button_dialog}>
                <button onClick={addDialogHandler}>submit</button>
            </div>
            <div>
                {props.dialogs.map(el => <div key={el.id}>{el.dialogitem} </div>)}
            </div>


        </div>
    )
}