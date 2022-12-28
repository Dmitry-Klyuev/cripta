import React from 'react';
import styles from "./ProgressBar.module.scss";


export const ProgressBar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.nameProgress}>Засечки соответсвуют дням проверки</div>
            <div className={styles.progressBar}>
                <div className={styles.itemWrapper}>
                    {[...new Array(25)].map(el => (
                        <div className={styles.item}>
                        </div>
                    ))}
                </div>
                <div className={styles.progressDate}>365 дней</div>
            </div>
        </div>
    );
};