import axios from 'axios';

export const register = newHost => {
    return axios
        .post('http://localhost:8888/host/register', {
            host_incName: newHost.host_incName,
            host_acc: newHost.host_acc,
            host_pwd: newHost.host_pwd
        })
        .then(res => {
            console.log("Registered")
            // 可以插alert進來或是畫面跳轉???
        })
}

export const login = host => {
    return axios
        .post('http://localhost:8888/host/login', {
            host_acc: host.host_acc,
            host_pwd: host.host_pwd
        })
        .then(res => {
            localStorage.setItem('hosttoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}