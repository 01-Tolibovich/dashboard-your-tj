<template>
  <div class="relative">
    <div
      class="top-admin grid grid-rows-2 grid-cols-1 justify-items-end px-8 py-2 items-center gap-x-4 shadow-black z-10 bg-white absolute top-0 left-0 w-full"
    >
      <!-- button -->
      <div
        @click="toggleMenu = !toggleMenu"
        class="justify-self-start row-start-1 row-end-3 grid grid-rows-1 grid-cols-1"
      >
        <img
          :class="{ menuActive: toggleMenu }"
          class="btn-open row-start-1 row-end-2 col-start-1 col-end-2"
          src="../assets/images/open-menu-btn.svg"
          alt="open-menu-btn"
        />
        <img
          :class="{ menuActive: toggleMenu }"
          class="btn-close row-start-1 row-end-2 col-start-1 col-end-2"
          src="../assets/images/close-menu-btn.svg"
          alt=""
        />
      </div>
      <!-- button -->

      <img
        class="row-start-1 row-end-3 hidden sm:block"
        src="../assets/images/bell.svg"
        alt=""
      />
      <h2 class="row-start-1 row-end-2 text-[14px] font-bold">
        Абуамриддин Гафуров
      </h2>
      <p class="row-start-2 row-end-3 text-[12px] text-[#575F6C]">
        Администратор
      </p>
      <img
        @click="toggleProfile = !toggleProfile"
        class="row-start-1 row-end-3 rounded-full hidden sm:block"
        src="../assets/images/Avatar profile.jpg"
        alt=""
      />
    </div>
    <div
      :class="{ open_profile: toggleProfile }"
      class="absolute right-8 flex flex-col translate-y-[-100%] ease-in duration-300"
    >
      <a
        class="text-black px-4 py-3 bg-white rounded-md border border-[#E5E7EB]"
        href="#"
        >Профиль</a
      ><p
        @click="onLogout"
        class="text-black px-4 py-3 bg-white rounded-md border border-[#E5E7EB] cursor-pointer"
        >Выход</p
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "top-admin",
  data() {
    return {
      toggleMenu: false,
      toggleProfile: false,
      crumbs: [{ name: 'Пользователи' }],
      activeAction: 0,
      users: [],
      pageNumber: 0,
      removeId: 0,
      nextLink: '',
      activeUser: null
    };
  },
  methods: {
    async getUsers() {
      try {
        console.log(this.$auth.user);
        this.pageNumber += 1
        let token = 'Bearer ' + this.$auth.$storage.getUniversal('token')
        this.$axios.setHeader('Authorization', token)
        let res = await this.$axios(`dashboard/users?page=${this.pageNumber}`)
        this.users = [...this.users, ...res.data.data]
        this.nextLink = res.data.links.next
      } catch (err) {
        console.log(err)
      }
    },
    async onLogout() {
      await this.$auth.logout().then(() =>  this.$router.push("/login"));
    },
    removeItemModal(id) {
      this.removeId = id
      this.$modal.show('example')
    },
    clickUser(user) {
      this.activeUser = user
      this.$modal.show('user')
    },
    async changeUser() {
      try {
        let token = 'Bearer ' + this.$auth.$storage.getUniversal('token')
        this.$axios.setHeader('Authorization', token)
        if(this.activeUser.is_active === 0) {
          this.activeUser.is_active = 1
        }
        else this.activeUser.is_active = 0
        await this.$axios.put(`dashboard/users/${this.activeUser.id}`, this.activeUser)
        await this.$router.push('/users')
        this.$modal.hide('user')
      } catch(err) {
        if(err) {
          console.log(err)
          this.$toast
            .error('Ошибка во время изменения пользователя')
            .goAway(2000)
        }
      }
    },
    async remove() {
      let token = 'Bearer ' + this.$auth.$storage.getUniversal('token')
      this.$axios.setHeader('Authorization', token)
      await this.$axios.delete(`dashboard/users/${this.removeId}`)
      this.$toast
        .success(
          `Пользователь ${
            this.users.find((user) => user.id === this.removeId).fullname
          } был удалён`
        )
        .goAway(1500)
      this.$modal.hide('example')
      this.users = this.users.filter((user) => user.id !== this.removeId)
    },
    changeActiveAction(id) {
      if (id === this.activeAction) return (this.activeAction = 0)
      this.activeAction = id
    },
  },
  mounted() {
    this.getUsers()
  },
};
</script>

<style>
.top-admin {
  -webkit-box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
}
</style>
