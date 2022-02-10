import axios from 'axios'
import router from '@/router'

export default({
    namespaced: true,

    state:{
        authenticated: false, 
        user: null
    },
    getters: {
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value){ state.authenticated = value },
        SET_USER(state, value){ state.user = value } 
    },
    actions: {
        async login({dispatch}, form){
            // await axios.get('sanctum/csrf-cookie')
            // await axios.post('api/login', {
            //     headers: { 'Content-Type' : 'application/json' },
            //     credentials: 'include',
            //     body: JSON.stringify(form)
            // })

            await axios.post('api/login', form)

            // let res = await axios.post('api/login', form)
            // localStorage.setItem('token', res.data.data.token)
            dispatch('me')
        },
        async me({commit}){
            try{
                // let response = await axios.get('api/me')
                let response = await axios.get('api/user')
                commit("SET_AUTHENTICATED", true)
                commit("SET_USER", response.data)
                router.replace('/')
                // window.location.href='/pos'
            }catch{
                commit("SET_AUTHENTICATED", false)
                commit("SET_USER", null)
            }
        },
        async logout({ commit }){
            // localStorage.removeItem('token')
            await axios.post('api/logout')
            // await axios.post('logout')
            // router.replace('/login')

            // await fetch('http://localhost:8000/api/logout', {
            //     method: 'post',
            //     headers: { 'Content-Type' : 'application/json' },
            //     credentials: 'include',
            // })

            // await router.push('/login')
            commit("SET_AUTHENTICATED", false)
            commit("SET_USER", null)
        }
    }

})