<template>
  <div class="users">
    <headTitle head_title="Пользователи" :addButtonComponent="true"/>
    <Search class="p-4 bg-white rounded-lg mt-5"></Search>
  </div>
</template>

<script>
import headTitle from "../components/headTitle.vue";
import Search from "../components/ButtonAndSearchComponents/Search.vue";
export default {
  name: "users",
  components: { headTitle, Search },
  data() {
    return {};
  },
};
</script>
