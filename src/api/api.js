import axios from "axios";

const instance = axios.create({
    baseURL: 'https://back.triplea-dev.com/api/v1',
});

export const userAPI = {
    login( {email, password}) {
        return instance.post(`/login`,{ email, password })
    },
    logOut(token){
        const options = {
            method: 'POST',
            url: 'https://back.triplea-dev.com/api/v1/logout',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
        return instance.request(options)
    },
    authMe(token){
        const options = {
            method: 'GET',
            url: 'https://back.triplea-dev.com/api/v1/user',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
      return instance.request(options)
    },
    registration(name, email, password){
        return instance.post('/registration', {
            name, email, password
        })
    },
    verifyEmail(code){
        return instance.post('/verify_email', {code} )
    },
}

export const productsApi = {
    products(token){
        const options = {
            method: 'GET',
            url: 'https://back.triplea-dev.com/api/v1/products',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: {life_time_from: 1, life_time_to: 400, type_trade: 1}
        };
        return instance.request(options)
    }
}