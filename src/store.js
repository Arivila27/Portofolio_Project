import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import API from './api.config'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2);


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        _id: localStorage.getItem('_id'),
        token: localStorage.getItem('token') || '',
        user: {},
        username: localStorage.getItem('username') || '',
        role: localStorage.getItem('role') || '',
        domain: localStorage.getItem('domain') || ''
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        get_id(state, _id){
            state._id = _id
        },
        getuser(state, username) {
            state.username = username
        },
        getrole(state, role) {
            state.role = role
        },
        getdomain(state, domain) {
            state.domain = domain
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state._id = ''
            state.status = ''
            state.token = ''
            state.username = ''
            state.role = ''
            state.domain = ''
        },
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve) => {
                commit('auth_request')
                axios({ url: API + '/pengguna/login', data: user, method: 'POST' })
                    .then(response => {
                        const _id = response.data._id
                        const token = response.data.token
                        const username = response.data.username
                        const role = response.data.role
                        const domain = response.data.domain
                        localStorage.setItem('_id', _id)
                        localStorage.setItem('token', token)
                        localStorage.setItem('username', username)
                        localStorage.setItem('role', role)
                        localStorage.setItem('domain', domain)
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        commit('getuser', username)
                        commit('getrole', role)
                        commit('getdomain', domain)
                        commit('get_id', _id)
                        resolve(response)
                    })
                    .catch(() => {
                        commit('auth_error')
                        alert('Gagal masuk aplikasi, Silahkan cek email & password anda')
                        VueSweetalert2('Gagal', 'Mohon cek Email dan username anda', 'error');
                        localStorage.removeItem('token')
                    })
            })
        },
        register({ commit }, user) {
            return new Promise((resolve) => {
                commit('auth_request')
                axios({ url: API + '/pengguna/register', data: user, method: 'POST' })
                    .then(response => {
                        const token = response.data.token
                        const user = response.data.user
                        localStorage.setItem('token', token)
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(response)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        username: state => state.username,
        role: state => state.role,
        domain: state => state.domain,
        _id: state => state._id,
        token: state => state.token
    }
})