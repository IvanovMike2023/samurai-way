import react from "react";
import s from './Preloader.module.css'
import loader from '../../img/loader.svg'
export const Preloader =()=>{
    return <div >
        <div className={s.img}>
            <img src={loader} alt=""/>
        </div>

    </div>
}