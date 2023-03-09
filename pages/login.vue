<template>
  <div class="autorization">
    <form
      @submit.prevent="onLogin"
      class="flex min-h-[90vh] flex-col justify-center py-12 sm:px-6 lg:px-8 px-4"
    >
      <div :class="{ shake: loginError }" class="sm:mx-auto sm:w-full sm:max-w-md shadow-md">
        <div
          class="mx-auto w-full bg-white pt-8 rounded-t-lg sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div class="mx-auto">
            <img class="mx-auto" src="../assets/images/your.png" alt="your" />
          </div>
        </div>
        <div class="bg-white py-8 px-4 sm:rounded-b-lg sm:px-10">
          <h2 class="text-center mt-4 mb-8 text-2xl">Войдите в аккаунт</h2>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <div class="mt-1">
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                :class="{ border_red: loginError }"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mt-6"
              >Password</label
            >
            <div class="mt-1">
              <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                :class="{ border_red: loginError }"
              />
            </div>
          </div>

          <div>
            <button type="submit" class="_blue-button mt-8 w-full">Войти</button>
          </div>
        </div>
      </div>
      <p class="hidden text-[red] text-center mt-4 " :class="{ block_error_message: loginError }">Логин или пароль введены неправильно!</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  middleware: "auth",
  data() {
    return {
      email: "",
      password: "",
      loginError: false
    };
  },
  methods: {
    async onLogin() {
      try {
        let response = await this.$auth
          .loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then(() => this.$router.push("/"));
          this.loginError = false
        console.log(response);
      } catch (err) {
        this.loginError = true

      }
    },
  },
  layout: "empty",
};
</script>

<style>
.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes shake {
  0%, 100% {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  }
  10%, 30%, 50%, 70%, 90% {
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
  }
  20%, 40%, 60%, 80% {
  -webkit-transform: translate3d(10px, 0, 0);
  transform: translate3d(10px, 0, 0);
  }
  }
  @keyframes shake {
  0%, 100% {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  }
  10%, 30%, 50%, 70%, 90% {
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
  }
  20%, 40%, 60%, 80% {
  -webkit-transform: translate3d(10px, 0, 0);
  transform: translate3d(10px, 0, 0);
  }
  } 

  .border_red {
    border: 1px solid red;
  }
  .block_error_message {
    display: block;
  }
</style>
