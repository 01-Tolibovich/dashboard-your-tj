// state
export const state = () => ({
    user: {},
  })
  
  // actions
  export const actions = {
    changeUser(state, user) {
      this.commit('user/setUser', user)
      return user
    },
    async getUser() {
      try {
        const token = 'Bearer ' + this.$auth.$storage.getUniversal('token')
        this.$axios.setHeader('Authorization', token)
        const user = this.$auth.$storage.getUniversal('user')
        const res = await this.$axios(`dashboard/users/${user.id}`)
        this.commit('user/setUser', res.data)
        return res.data
      } catch (err) {
        if (err.response) {
          if (err.response.data.message) {
            this.$router.push('/')
          }
        }
      }
    },
  }
  
  // mutations
  export const mutations = {
    setUser(state, user) {
      state.user = user
    },
  }