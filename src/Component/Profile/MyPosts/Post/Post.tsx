import React from "react";
import postphotos from '../../../../img/1.jpg'
import s from './post.module.css'
import {MessagesType} from "../../../../Redux/store";

type MessagesItemType = {
message: MessagesType[]
}
const Post: React.FC<MessagesItemType> = (props) => {
    return (<div>
        {props.message.map((m) => <div key={m.id} className={s.wrapPost}>
                <div className={s.postphoto}>
                    <img src={postphotos}/>
                </div>
                <div><h3>{m.text}</h3></div>
            </div>
        )}
    </div>)
}
export default Post