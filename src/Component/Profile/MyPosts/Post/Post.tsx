import React from "react";
import postphotos from '../../../../img/1.jpg'
import s from './post.module.css'

type PostMass = {
    id: number,
    text: string
}
export type PostProps2 = {
    message: PostMass[]
}
type PostProps = {
    postsdata: PostProps2
}
const Post: React.FC<PostProps> = (props) => {
    console.log(props.postsdata.message[0].text)
    return (<div>
        <div className={s.wrapPost}>
            <div className={s.postphoto}>
                <img src={postphotos} alt=""/>
            </div>
            <div>
                <h3>{props.postsdata.message[0].text}</h3>
            </div>
        </div>
        <div className={s.wrapPost}>
            <div className={s.postphoto}>
                <img src={postphotos} alt=""/>
            </div>
            <div>
                <h3>{props.postsdata.message[1].text}</h3>
            </div>
        </div>
        <div className={s.wrapPost}>
            <div className={s.postphoto}>
                <img src={postphotos} alt=""/>
            </div>
            <div>
                <h3>{props.postsdata.message[2].text}</h3>
            </div>
        </div>
    </div>)
}
export default Post