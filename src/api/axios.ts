import axios from 'axios'

const baseURL = 'http://localhost:8000/'


const productsApi = axios.create({
    baseURL,   
})

export default productsApi;





