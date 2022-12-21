import styles from './Header.module.scss'
import {menu} from "./constants";
import {useState} from "react";
import {Link} from "react-router-dom";

import logo from '../../assets/Logo.png'
import ava from '../../assets/Ava.png'

export const Header = () => {
    const [isActive, setIsActive] = useState(0)

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo"/>
            <div className={styles.menuWrapper}>
                <ul className={styles.menu}>
                    {menu.map((el, i) => {
                        return <li key={i}>
                            <Link to={'user/' + el.en.toLowerCase()}
                                  className={isActive === i ? styles.active : styles.noActive}
                                  onClick={() => setIsActive(i)}
                            >{el.en}</Link>
                        </li>
                    })}
                </ul>
                <div className={styles.avatar}>
                    <img src={ava} alt="avatar"/>
                    RU
                </div>
            </div>
            <button className={styles.btn}>Выйти</button>
        </div>
    )
}