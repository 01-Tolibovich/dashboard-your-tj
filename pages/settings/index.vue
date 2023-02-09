<template>
  <div class="settings">
    <HeadGrid>
      <headTitle head_title="Настройки" />
      <AddButton @click="$router.push('settings/edit-settings')"/>
    </HeadGrid>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import AddButton from "@/components/buttons/AddButton.vue";
export default {
  name: "settings",
  components: { HeadGrid, headTitle, AddButton },
  data() {
    return {};
  },
};
</script>
