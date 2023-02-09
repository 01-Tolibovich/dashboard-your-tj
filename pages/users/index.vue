<template>
  <div class="users">
    <HeadGrid>
      <headTitle head_title="Пользователи" />
      <AddButton @click="$router.push('users/edit-user')"/>
    </HeadGrid>

    <Search class="p-4 bg-white rounded-lg mt-5"></Search>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import AddButton from "@/components/buttons/AddButton.vue";
import Search from "@/components/ButtonAndSearchComponents/Search.vue";
export default {
  name: "users",
  components: { HeadGrid, headTitle, AddButton, Search },
  data() {
    return {};
  },
};
</script>
