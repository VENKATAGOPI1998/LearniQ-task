import axios from 'axios';

export function GetUserData(){
    return axios.get('https://605b295e27f0050017c06599.mockapi.io/demo/Online-Quiz')
}

export function PostUserData(data){
    return axios.post('https://605b295e27f0050017c06599.mockapi.io/demo/Online-Quiz',data)
}

export function GetUserIdData(data){
    return axios.get(`https://605b295e27f0050017c06599.mockapi.io/demo/Online-Quiz/${data}`)
}

export function DeleteData(data){
    return axios.delete(`https://605b295e27f0050017c06599.mockapi.io/demo/Online-Quiz/${data}`)
}

export function PutData(n,data){
    return axios.put(`https://605b295e27f0050017c06599.mockapi.io/demo/Online-Quiz/${n}`,data)
}