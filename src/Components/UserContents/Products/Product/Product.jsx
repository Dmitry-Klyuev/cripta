import styles from './Product.module.scss'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Chart} from "./Chart/Chart";
import {Table} from "./Table/Table";


export const Product = () => {
    const {name: idParam} = useParams()
    const product = useSelector(state => state.products.data[idParam])

    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <div className={styles.product}>
                    <div className={styles.productName}>
                        {product.name}
                        <img src="#" alt="Фото продута"/>
                    </div>
                    <div className={styles.productDates}>
                        <span>Дата начала продукта</span> <span>{product.created_at}</span>
                        <span>Дата окончания продукта</span> <span>{product.updated_at}</span>
                    </div>
                    <div className={styles.productStatus}>
                        {product.active === 1 && <span className={styles.statusActive}>В работе</span>}
                        {product.active === 0 && <span className={styles.statusNoActive}>Завершен</span>}
                    </div>
                </div>
                <div className={styles.deposit}>
                    <div className={styles.depositWrapper}>
                        <span className={styles.bolt}>Депозит</span> <span>{product.minimal_amount} USDT</span>
                        <span className={styles.bolt}>Начисления</span>
                        <span>+ 120 USDT {product.percent_when_check} %</span>
                    </div>
                    <button className={styles.depositBtn}>История начислений</button>

                </div>
            </div>
            <div className={styles.header}>
                График продукта
                <div className={styles.chart}>
                    <Chart/>
                </div>
                <div className={styles.table}>
                    <Table/>
                </div>
            </div>

        </div>
    );
};