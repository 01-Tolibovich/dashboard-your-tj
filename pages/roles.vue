<template>
  <div class="roles">
    <HeadGrid><headTitle head_title="Роли" /></HeadGrid>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
export default {
  name: "roles",
  components: { HeadGrid, headTitle },
};
</script>
