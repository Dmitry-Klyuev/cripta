import styles from './Header.module.scss'
import {menu} from "./constants";
import {useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";

import logo from '../../assets/Logo.png'
import ava from '../../assets/Ava.png'
import {useDispatch} from "react-redux";
import {logOutUser} from "../../store/UserSlice";

export const Header = () => {
    const [isActive, setIsActive] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let location = useLocation();

    if (location === '/404'){
        setIsActive(null)
    }
    const logOut = () => {
        dispatch(logOutUser())
    }

    return (
        <div className={styles.container}>
            <img className={styles.logo}
                 src={logo}
                 alt="logo"
                onClick={()=>{navigate('/') }}
            />
            <div className={styles.menuWrapper}>
                <ul className={styles.menu}>
                    {menu.map((el, i) => {
                        return <li key={i}>
                            <Link to={'user/' + el.en.toLowerCase()}
                                  className={isActive === i + 1 ? styles.active : styles.noActive}
                                  onClick={() => setIsActive(i + 1)}
                            >{el.ru}</Link>
                        </li>
                    })}
                </ul>
                <div className={styles.avatar}>
                    <img src={ava} alt="avatar"/>
                    RU
                </div>
            </div>
            <button className={styles.btn}
            onClick={logOut}
            >Выйти</button>
        </div>
    )
}