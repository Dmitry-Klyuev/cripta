import axios from "axios";


const instance = axios.create({
    baseURL: 'https://back.triplea-dev.com/api/v1',
});
instance.interceptors.request.use((config) => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
        }
        return config
    },
    (error) => {


        return Promise.reject(error)
    }
)

instance.interceptors.response.use((res) => {
        return res
    },
    (error) => {
        console.log('error: ' + error )
            window.location.href = '/signing'
            localStorage.clear()

        return Promise.reject(error)
    }
)

export const userAPI = {
    login({email, password}) {
        return instance.post(`/login`, {email, password})
    },
    authMe() {
        return instance.get('/user')
    },
    logOut() {
        return instance.post('/logout')
    },


    registration(name, email, password) {
        return instance.post('/registration', {
            name, email, password
        })
    },
    verifyEmail(code) {
        return instance.post('/verify_email', {code})
    },
}

export const productsApi = {
    products(token) {
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