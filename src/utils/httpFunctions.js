const axios = require('axios');


const baseUrl = 'http://localhost:8000/'

export const httpGet = async (endpoint) => {
    return axios.get(baseUrl + endpoint , {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    // axios.get(baseUrl + endpoint )
    //     .then( (res) => {
    //         return res.data
    //     } )
}

export const httpPost = async (endpoint, data) => {
    return axios.post(baseUrl + endpoint , data , {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })

    // axios.post(baseUrl + endpoint , data )
    //     .then( (res) => {
    //         return res.data
    //     } )
}