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
      <h2 @click="toggleProfile = !toggleProfile" class="row-start-1 row-end-2 text-[14px] font-bold cursor-pointer">
        {{ user.first_name + ' ' + user.last_name }}
      </h2>
      <p @click="toggleProfile = !toggleProfile" class=" cursor-pointer row-start-2 row-end-3 text-[12px] text-[#575F6C]">
        Администратор
      </p>
      <img
        @click="toggleProfile = !toggleProfile"
        class="row-start-1 row-end-3 rounded-full hidden sm:block w-12 h-12 border cursor-pointer"
        :src="user.avatar"
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
export default {
  name: "top-admin",
  data() {
    return {
      toggleMenu: false,
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
      
    }
  },

  // Это сценарий, написанный на JavaScript и Vue.js, популярном front-end фреймворке. Он определяет компонент Vue.js с несколькими методами и смонтированным крючком жизненного цикла. Здесь представлено подробное объяснение сценария:
  // Этот объект содержит несколько методов, которые будут доступны для использования в компоненте Vue.js.
  methods: {
    // Это асинхронный метод getUsers. Он используется для получения списка пользователей с сервера.

    // Это асинхронный метод, называемый onLogout. Он используется для выхода пользователя из приложения путем вызова метода $auth.logout(), предоставляемого плагином $auth. После выхода пользователя из приложения вызывается метод $router.push() для перенаправления его на страницу входа в систему.
    async onLogout() {
      await this.$auth.logout().then(() => this.$router.push("/login"));
    },

    // Этот метод называется removeItemModal и принимает параметр id. Он устанавливает свойство removeId компонента на параметр id, а затем показывает модальное диалоговое окно с идентификатором "example" с помощью метода $modal.show().
    removeItemModal(id) {
      this.removeId = id;
      this.$modal.show("example");
    },

    // Этот метод называется clickUser и принимает параметр пользователя. Он устанавливает свойство activeUser компонента на параметр пользователя, а затем показывает модальное диалоговое окно с идентификатором "user" с помощью метода $modal.show().
    clickUser(user) {
      this.activeUser = user;
      this.$modal.show("user");
    },

    // Это асинхронный метод под названием changeUser. Он пытается обновить свойство is_active пользователя, делая HTTP PUT запрос на сервер с помощью $axios. Если запрос успешен, пользователь перенаправляется на страницу /users с помощью $router.push(), а "user"
    
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
