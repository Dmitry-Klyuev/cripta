import styles from './Product.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {Chart} from "../../Components/Chart/Chart";
import {Table} from "../../Components/Table/Table";
import {ProgressBar} from "../../Components/ProgressBar/ProgressBar";


export const Product = () => {
    const navigate = useNavigate()
    const {name: idParam} = useParams()
    const product = useSelector(state => state.products.data[idParam])

    useEffect(() => {
        if (!product) {
            navigate('/user/products')
        }
    }, [])

    return (
        <>
            {product && <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.product}>
                        <div className={styles.productName}>
                            {product.name}
                            <img src="src/Pages/Product/Product#" alt="Фото продута"/>
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
                    <ProgressBar/>

                </div>

                <h2 className={styles.productTerms}>Условия по продукту</h2>
            </div>}
        </>
    )
};