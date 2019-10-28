import axios from 'axios'
import qs from 'qs'

export const signup = (user) => {
    return axios({
        method: "POST",
        data: qs.stringify(user),
        url: `${process.env.REACT_APP_SERVER}/auth/signup`,
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    })
    .then((response) => {
        setUser(response.data)
        return
    })
}

export const setUser = (user)=> {
    localStorage.setItem('user', JSON.stringify(user))
}