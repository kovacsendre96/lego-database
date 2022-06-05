import axios from 'axios';
export const sendData = (method, url, data, callback) => {
    return axios({
        method: method,
        url: url,
        data: data
    })
        .then(function (response) {
            callback(response);
        });
} 