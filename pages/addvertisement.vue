<template>
  <div class="addvertisement">
    <HeadGrid><headTitle head_title="Реклама" /></HeadGrid>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
export default {
  name: "addvertisement",
  components: { HeadGrid, headTitle },
  data() {
    return {};
  },
};
</script>
