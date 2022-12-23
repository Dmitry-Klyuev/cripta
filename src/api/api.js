import axios from "axios";

const instance = axios.create({
    baseURL: 'https://back.triplea-dev.com/api/v1',
});

export const userAPI = {
    login( {email, password}) {
        return instance.post(`/login`,{ email, password })
    },
    logOut(){
        return instance.post('/logout')
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