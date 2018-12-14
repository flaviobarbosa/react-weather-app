import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.apixu.com/v1/current.json?key=42b149b67742472da97114755181412&q='
});

export default instance;
