// // store/auth.js

// export const state = () => ({
//     token: null
//   })
  
//   export const mutations = {
//     setToken(state, token) {
//       state.token = token
//     },
//     clearToken(state) {
//       state.token = null
//     }
//   }
  
//   export const actions = {
//     async login({ commit }, { email, password }) {
//       try {
//         const response = await this.$axios.$post('/login', { email, password })
//         const token = response.token
        
//         commit('setToken', token)
//         localStorage.setItem('token', token)
        
//         return true // indicate success
//       } catch (error) {
//         console.error(error)
//         return false // indicate failure
//       }
//     },
    
//     async logout({ commit }) {
//       commit('clearToken')
//       localStorage.removeItem('token')
//     }
//   }

