import styles from './SignUp.module.scss'
import logo from '../../assets/Logo.png'
import photo from '../../assets/Rectangle.png'
import {useFormik} from "formik";

export const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password1: '',
            password2: '',
            iAgree: false ,
        },
        validate: (values) => {
            const errors = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password1) {
                errors.password1 = 'Обязательно для заполнения'
            } else if (values.password1.length < 3) {
                errors.password1 = 'Слишком маленький пароль'
            }
            if (!values.password2) {
                errors.password2 = 'Обязательно для заполнения'
            } else if (values.password2.length < 3) {
                errors.password2 = 'Слишком маленький пароль'
            }else if (values.password2 !== values.password1){
                errors.password2 = 'Пароли не совпадают'
            }

            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },
    })


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <img src={logo} alt="logo"/>
                    <img src={photo} alt="photo"/>
                </div>
                <div className={styles.form}>
                    <h2>Зарегистрироваться</h2>
                    <p>Уже есть аккаунт? Войти</p>
                    <form onSubmit={formik.handleSubmit}>
                        Эл.почта
                        <input type="text"
                               onBlur={formik.handleBlur}
                               {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email && <h4>{formik.errors.email}</h4>}
                        Пароль
                        <input type="password"
                               onBlur={formik.handleBlur}
                               {...formik.getFieldProps('password1')}
                        />
                        {formik.errors.password1 && <h5>{formik.errors.password1}</h5>}
                        Пароль
                        <input type="password"
                               onBlur={formik.handleBlur}
                               {...formik.getFieldProps('password2')}
                        />
                        {formik.errors.password2 && <h5>{formik.errors.password2}</h5>}

                        <input type="checkbox"
                               onBlur={formik.handleBlur}
                               {...formik.getFieldProps('iAgree')}

                               // onChange={formik.handleChange}
                               // value={formik.values.iAgree}
                        />
                        Я даю согласие на обработку моих персональных данных Политика конфиденциальности
                        <button type={"submit"}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}