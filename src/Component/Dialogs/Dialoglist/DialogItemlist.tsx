import {NavLink} from "react-router-dom";
import React from "react";
import s from './DialogItem.module.css'
import {DialogItemType} from "../../../Redux/store";


type DialogItemPropsType = {
    dialogs: DialogItemType[]
}
export const DialogItemlist: React.FC<DialogItemPropsType> = (props) => {
    return <div className={s.WrapperDialog}>

        {props.dialogs.map(el => <div className={s.dialogitem}><NavLink to={'/dialogs/' + el.id}>{el.name}</NavLink>
        </div>)}


    </div>
}