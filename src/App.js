import {Header} from "./Components/Header/Header";
import { Navigate, Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import {SignUp} from "./Components/SignUp/SignUp";
import {useEffect} from "react";
import {SignIng} from "./Components/SignIng/SignIng";
import {useSelector} from "react-redux";
import {Products} from "./Components/UserContents/Products/Products";
import {Balance} from "./Components/UserContents/Balance/Balance";
import {Spin} from "antd";

function App() {
    const {isAuth, status} = useSelector(state => state.user)
    const navigate = useNavigate()
    console.log(status)

    useEffect(() => {
        console.log('isAuth :' + isAuth)
        if (isAuth) {
            navigate("/")
        }
    }, [isAuth])

    return (
        <div className={'App'}>
            {status === 'loading' && <div className="loading">
                <Spin size="large"/>
            </div>}
            {isAuth && <Header/>}

            <Routes>
                <Route path={'/'} element={isAuth ?  <Navigate to={'/user/products'}/> :  <Navigate to='/signing'/>}/>
                <Route path={'/signup'} element={<SignUp/>}/>
                <Route path={'signing'} element={<SignIng/>}/>
                <Route path={'/user/products'} element={<Products/>}/>
                <Route path={'/user/balance'} element={<Balance/>}/>
                <Route path={'/user/settings'} element={<h1>Settings</h1>}/>
                <Route path={'/user/support'} element={<h1>Support</h1>}/>
                <Route path={'/user/faq'} element={<h1>FAQ</h1>}/>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>
                <Route path={'404'} element={<h1 style={{textAlign: 'center'}}>404</h1>}/>
            </Routes>
            {isAuth && <Header/>}
        </div>
    );
}

export default App;
