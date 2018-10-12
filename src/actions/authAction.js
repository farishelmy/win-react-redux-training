import {LOGIN_SUCCESS,LOGIN_FAIL,LOG_OUT,AUTH_LOADING} from './types'

export const login = (authData) => dispatch =>{
dispatch(isAuth())
const url='http://192.168.0.110:8000/api/auth/login?param='+JSON.stringify(authData)
fetch(url)
.then(res=>res.json())
.then(res=>{
res.code===200?dispatch({type:LOGIN_SUCCESS,payload:res.results}):dispatch({type:LOGIN_FAIL})
}
)
}

export const isAuth=()=>{
    return {
    type:AUTH_LOADING
}
}

export const logout=(authParam)=>dispatch=>{
    const url='http://192.168.0.110:8000/api/auth/logout?param='+JSON.stringify(authParam)
    fetch(url)
    .then(res=>res.json())
    .then(res=>dispatch({type:LOG_OUT}))
    
}