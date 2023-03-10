export const state = () => ({
    MenuBtn: false,
    hiddenProfileButtons: false
  })

  // changeMenuBtn() {
  //   let payload = {
  //     key: 'MenuBtn',
  //     body: true
  //   }
  //   this.changeState(payload)
  // }
  // ...mapMutations() {
  //   changeState: 'changeState'
  // }
  export const mutations = {
    // changeState(state, payload) {
    //   state[payload.key] = payload.body
    // },
    menuOpen(state) {
        state.MenuBtn = true
    },
    menuClose(state) {
      state.MenuBtn = false
    },
    closeProfileButtons(state) {
      // state.hiddenProfileButtons = payload
      state.hiddenProfileButtons = true
    },
    closeProfileButtonsFalse(state) {
      state.hiddenProfileButtons = false
    }
  }
  
  export const getters = {
    
    getCounter(state) {
      return state.counter
    }
  }
  
  
  
  export const actions = {
    async fetchCounter({ state }) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    }
  }