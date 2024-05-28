import react from 'react';
import s from '../LoginPage/loginPage.module.css'

export const LoginPage = () => {
    return <div>
        <div className={s.container_loginPage}>
            <div className={s.wrapper_loginPage}>
                <input type="text"/>
                <button>Отправить</button>
            </div>
        </div>

    </div>
}