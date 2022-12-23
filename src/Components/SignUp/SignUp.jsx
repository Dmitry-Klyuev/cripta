import styles from './SignUp.module.scss'
import logo from '../../assets/Logo.png'
import photo from '../../assets/Rectangle.png'
import {Link, useNavigate} from "react-router-dom";
import {Button, Checkbox, Form, Input} from "antd";
import {RegistrationUser} from "../../store/UserSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";

export const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = (values) => {
        const payload = {name: values.name, email: values.email, password: values.password}
        dispatch(RegistrationUser(payload))
        navigate('/signing')

        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const finishRegistration = () => {
        dispatch()
    }

    const [verify, setVerify] = useState(true)
    const [popValue, setPopValue] = useState('')

    return (
        <>
            {verify && (
                <div className={styles.popupVerify}>
                    Введите код, который пришел на почту
                    <input type="text"
                           value={popValue}
                           onChange={e => setPopValue(e.currentTarget.value)}/>
                    <Button type="primary"
                            onClick={finishRegistration}
                    >Подтвердить</Button>
                </div>
            )}
            <div className={styles.container}
                 onClick={() => setVerify(false)}
            >
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.contentLogo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <div>
                            <img src={photo} alt="contentPhoto"/>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <h1>Зарегистрироваться</h1>
                        <p>Уже есть аккаунт? <span> <Link to={'/signing'}>Войти</Link> </span></p>
                        <Form
                            className={styles.formContents}
                            name="basic"
                            labelCol={{
                                span: 18,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            initialValues={{
                                remember: false,
                            }}
                            layout={"vertical"}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                className={styles.formItem}
                                label="Имя"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input bordered={false}/>
                            </Form.Item>
                            <Form.Item
                                className={styles.formItem}
                                label="Эл.почта"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input bordered={false}/>
                            </Form.Item>
                            <Form.Item
                                className={styles.formItem}
                                label="Пароль"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password bordered={false}/>
                            </Form.Item>
                            <Form.Item
                                className={styles.formItem}
                                label="Пароль"
                                name="re-password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',

                                    },
                                ]}
                            >
                                <Input.Password bordered={false}/>
                            </Form.Item>

                            <Form.Item
                                name="iAgree"
                                className={styles.formAgree}
                                valuePropName="checked"
                            >
                                <Checkbox>Я даю согласие на обработку моих персональных данных Политика
                                    конфиденциальности</Checkbox>
                            </Form.Item>

                            <Form.Item className={styles.btnWrapper}>
                                <Button type="primary"
                                        htmlType="submit"
                                        className={styles.btn}
                                >
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}