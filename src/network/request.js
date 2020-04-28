import axios from 'axios'
const instance = axios.create();
export function request(config) {

    instance.defaults.baseURL = 'http://123.207.32.32:8000'
    instance.defaults.timeout = 5000;
    return instance(config);
}

instance.interceptors.request.use(config => {
    console.log(config)
    return config
}, err => {
    console.log(err)
})