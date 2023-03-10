<template>
  <div  class="relative">
    <div
      class="top-admin grid grid-rows-2 grid-cols-1 justify-items-end px-8 py-2 items-center gap-x-4 shadow-black z-30 bg-white absolute top-0 left-0 w-full"
    >
      <!-- button -->
      <div
        @click="menuOpen"
        class="justify-self-start row-start-1 row-end-3 grid grid-rows-1 grid-cols-1 xl:hidden"
      >
        <img
          :class="{ menuActive: toggleMenu }"
          class="btn-open row-start-1 row-end-2 col-start-1 col-end-2"
          src="../assets/images/open-menu-btn.svg"
          alt="open-menu-btn"
        />
      </div>
      <!-- button -->

      <img
        class="row-start-1 row-end-3 hidden sm:block"
        src="../assets/images/bell.svg"
        alt=""
      />
      <h2 @click="toggle" @mouseover="profileButtonsFalse" class="row-start-1 row-end-2 text-[14px] font-bold cursor-pointer">
        {{ user.first_name + ' ' + user.last_name }}
      </h2>
      <p @click="toggle" @mouseover="profileButtonsFalse" class=" cursor-pointer row-start-2 row-end-3 text-[12px] text-[#575F6C]">
        Администратор
      </p>
      <img
        @click="toggle" @mouseover="profileButtonsFalse"
        class="row-start-1 row-end-3 rounded-full hidden sm:block w-12 h-12 border cursor-pointer"
        :src="user.avatar"
        alt=""
      />
    </div>
    <div
      :class="{ 'open_profile': toggleProfile, 'hidden-profile-buttons': hiddenProfileButtons }"
      class="absolute right-8 flex flex-col translate-y-[-100%] ease-in duration-300 z-20"
    >
      <a
        class="text-black px-4 py-3 bg-white rounded-md border border-[#E5E7EB]"
        href="#"
        >Профиль</a
      >
      <p
        @click="onLogout"
        class="text-black px-4 py-3 bg-white rounded-md border border-[#E5E7EB] cursor-pointer"
      >
        Выход
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
export default {
  name: "top-admin",
  data() {
    return {
      toggleProfile: false,
      crumbs: [{ name: "Пользователи" }],
      activeAction: 0,
      users: [],
      pageNumber: 0,
      removeId: 0,
      nextLink: "",
      activeUser: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user
      
    },
    ...mapState(['hiddenProfileButtons'])
  },

  methods: {
    ...mapMutations ({
      menuOpen: 'menuOpen',
      profileButtonsFalse: 'closeProfileButtonsFalse'
    }),
    toggle() {
      this.toggleProfile = !this.toggleProfile
    },
    async onLogout() {
      await this.$auth.logout().then(() => this.$router.push("/login"));
    },
    removeItemModal(id) {
      this.removeId = id;
      this.$modal.show("example");
    },
    clickUser(user) {
      this.activeUser = user;
      this.$modal.show("user");
    },
    changeActiveAction(id) {
      if (id === this.activeAction) return (this.activeAction = 0);
      this.activeAction = id;
    },
  },
  mounted() {
    console.log(this.$store.state.auth.user);
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
