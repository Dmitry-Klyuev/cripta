import styles from './Products.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {Table} from "antd";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {GetProducts} from "../../../store/ProductSlice";


export const Products = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetProducts())
    },[])

    // const {balance} = useSelector(state => state.user.data.accounts)
    const products = useSelector(state => state.products.data)
    console.log(products)

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: 'Фильтр',
            dataIndex: 'Filter',
            filters: [
                {
                    text: 'В работе',
                    value: 'В работе',
                },
                {
                    text: 'В обработке',
                    value: 'В обработке',
                },
                {
                    text: 'Завершенные',
                    value: 'В обработке',
                },

            ],
            onFilter: (value, record) => record.value.indexOf(value) === 0,
            sortDirections: ['descend'],
        },
        {
            title: 'Название продукта',
            dataIndex: 'NameProduct',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.NameProduct - b.NameProduct,
            render:(text, record, index) => {
                console.log('index:' + index)
                return <Link to={'/user/products/'+index}>{text}</Link>
            }
        },
        {
            title: 'Прибыль',
            dataIndex: 'Profit',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.Profit - b.Profit,
        },
        {
            title: 'Вложенные средства',
            dataIndex: 'InvestedFunds',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.InvestedFunds - b.InvestedFunds,
        },
        {
            title: 'Дата следующей проверки',
            dataIndex: 'NextDate',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.NextDate - b.NextDate,
        },
        {
            title: 'Дата окончания продукта',
            dataIndex: 'EndDate',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.EndDate - b.EndDate,
        },
    ];
    const data = products.map((el, i)=> {
        return {
            key: i,
            id: el.id,
            Filter: el.status,
            NameProduct: el.name,
            Profit: el.percent_when_check,
            InvestedFunds: el.minimal_amount,
            NextDate: el.created_at,
            EndDate: el.updated_at,
        }
    })

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <div className={styles.count}>
                    <div className={styles.countWrapper}>
                        <div>Баланс</div>
                        {/*где брать эти данные?*/}
                        <div>200 $</div>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        <button>Вывод</button>
                        <button>Пополнение</button>
                        <button>История</button>
                    </div>


                </div>
                <div className={styles.banner}>
                    Для инфы
                </div>

            </div>
            <div className={styles.productsWrapper}>

                <Table columns={columns} dataSource={data} onChange={onChange} />

            </div>
        </div>
    )
}