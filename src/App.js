import {Header} from "./Components/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {SignUp} from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className={'App'}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/signup'} element={<SignUp/>}/>

                <Route path={'/user/products'} element={<h1>Product</h1> }/>
                <Route path={'/user/balance'} element={<h1>Balance</h1> }/>
                <Route path={'/user/settings'} element={<h1>Settings</h1> }/>
                <Route path={'/user/support'} element={<h1>Support</h1> }/>
                <Route path={'/user/faq'} element={<h1>FAQ</h1> }/>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>
                <Route path={'404'} element={<h1 style={{textAlign:'center'}}>404</h1> }/>
s
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
