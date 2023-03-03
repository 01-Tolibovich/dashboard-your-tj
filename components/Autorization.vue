<template>
  <form
    @submit.prevent="login"
    class="flex min-h-[90vh] flex-col justify-center py-12 sm:px-6 lg:px-8 px-4"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md shadow-md">
      <div
        class="mx-auto w-full bg-white pt-8 rounded-t-lg sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div class="mx-auto">
          <img class="mx-auto" src="../assets/images/your.png" alt="your" />
        </div>
      </div>
      <div class="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
        <h2 class="text-center mt-4 mb-8 text-2xl">Войдите в аккаунт</h2>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <div class="mt-1">
              <input
              v-model="form.email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="mt-1">
              <input
                v-model="form.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button type="submit" class="_blue-button">Войти</button>
          </div>
      </div>
    </div>
  </form>
</template>

<script>
import AddButton from "./buttons/AddButton.vue";
import axios from 'axios'
export default {
  name: "autorization",
  components: { AddButton },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    // onSubmit() {
    //   this.$store.dispatch("login");
    // },
    async login() {
      try {
          let res = await axios.post('http://api.your.colibri.tj/api/auth/login', this.form)
          localStorage.setItem('token', res.data.data.token)
          this.$router.push("/");
        } catch(err) {
          console.log(err);
        }
    }
        // login(){
        //   try {
        //     this.$auth.loginWith("local", {data: this.form})
        //     this.$router.push("/");
        //   } catch(err) {
        //     console.log(err);
        //   }
            // this.$auth.loginWith("local", {data: this.form}).then(() =>{
            //   this.$router.push("/");
            // });
  },
};
</script>
