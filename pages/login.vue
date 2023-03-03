<template>
  <div class="autorization">
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
                v-model="email"
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
                v-model="password"
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
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      const success = await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });

      if (success) {
        // redirect to the dashboard page on successful login
        this.$router.push("/");
      } else {
        // show an error message on failed login
        alert("Invalid email or password");
      }
    },
  },
  layout: "empty",
};
</script>
