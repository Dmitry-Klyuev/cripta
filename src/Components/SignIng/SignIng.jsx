import styles from './SignIng.module.scss'
import logo from "../../assets/Logo.png";
import photo from "../../assets/Rectangle.png";
import {Link} from "react-router-dom";
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {LoginUser} from "../../store/UserSlice";

export const SignIng = () => {
    const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log('Success:', values);
        if (values){
            dispatch(LoginUser(values))
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.container}>
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
                    <h1>Войти</h1>
                    <p>Нет аккаунта? <span> <Link to={'/signUp'}>Зарегистрироваться</Link> </span></p>
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
                            label="2fa если есть"
                            name="2fa"
                            rules={[
                                {
                                    required: false,

                                },
                            ]}
                        >
                            <Input bordered={false}/>
                        </Form.Item>

                        <Form.Item className={styles.btnWrapper} >
                            <Button type="primary"
                                    htmlType="submit"
                                    className={styles.btn}
                            >
                                Войти
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    )
}