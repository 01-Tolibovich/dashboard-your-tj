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
        @click="logout"
        class="text-black px-4 py-3 bg-white rounded-md border border-[#E5E7EB]"
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
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      // localStorage.removeItem('token')
      this.$router.push('/autorization')
    },
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
