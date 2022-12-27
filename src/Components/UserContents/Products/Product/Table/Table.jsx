import styles from './Table.module.scss'
import {DatePicker} from "antd";
import dayjs from "dayjs";
import coin1 from  './assets/bitcoin.png'
import Tether from  './assets/bitcoin2.png'
import Litecoin from  './assets/bitcoin3.png'


export const Table = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const nowDate = dayjs()
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <DatePicker defaultValue={dayjs( nowDate, dateFormatList[0])} format={dateFormatList} className={styles.datePicker} />
            </div>
            <div className={styles.topElement}>
                <img src={coin1} alt="coin1"/>
            </div>
            <div className={styles.topElement}>
                <img src={Tether} alt="Tether"/>
            </div>
            <div className={styles.topElement}>
                <img src={Litecoin} alt="Litecoin"/>
            </div>
            <div className={styles.topElement}>Результат проверки</div>
            <div className={styles.downElement}>
                 <span>Цена на момент проверки</span>
                <span>19.530 $</span>
            </div>
            <div className={styles.downElement}>
                <span>Цена на момент проверки</span>
                <span>11.900 $</span>
            </div>
            <div className={styles.downElement}>
                <span>Цена на момент проверки</span>
                <span>11.900 $</span>
            </div>
            <div className={styles.downElement}>
                <span>1.4%</span>
                <span>1400$</span>
            </div>
        </div>
    );
};