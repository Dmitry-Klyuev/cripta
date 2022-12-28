import {Header} from "./Components/Header/Header";
import { Navigate, Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import {SignUp} from "./Pages/SignUp/SignUp";
import {useEffect} from "react";
import {SignIng} from "./Pages/SignIng/SignIng";
import {useDispatch, useSelector} from "react-redux";
import {Balance} from "./Pages/Balance/Balance";
import {Spin} from "antd";
import {authMe} from "./store/UserSlice";
import {Products} from "./Pages/Products/Products";
import {Product} from "./Pages/Product/Product";
import {NotFound} from "./Pages/404/NotFound";

function App() {

    const {isAuth, status} = useSelector(state => state.user)
    const navigate = useNavigate()
    console.log(status)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!!localStorage.getItem('token')){
            dispatch(authMe())
        }
        // if (isAuth){
        //     navigate('/user/products')
        // }else{
        //     navigate('/signing')
        // }
    }, [])

    return (
        <div className={'App'}>
            {status === 'loading' && <div className="loading">
                <Spin size="large"/>
            </div>}
            {isAuth && <Header/>}
            <Routes>
                <Route path={'/'} element={isAuth ? <Navigate to={'/user/products'}/> : <Navigate to='/signing'/>}/>
                <Route path={'/signup'} element={<SignUp/>}/>
                <Route path={'signing'} element={<SignIng/>}/>
                <Route path={'/user/products'} element={<Products/>}/>
                <Route path={'/user/products/:name'} element={<Product/>}/>
                <Route path={'/user/balance'} element={<Balance/>}/>
                <Route path={'/user/settings'} element={<h1>Settings</h1>}/>
                <Route path={'/user/support'} element={<h1>Support</h1>}/>
                <Route path={'/user/faq'} element={<h1>FAQ</h1>}/>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>
                <Route path={'404'} element={<NotFound/>}/>
            </Routes>
            {isAuth && <Header/>}
        </div>
    );
}

export default App;
