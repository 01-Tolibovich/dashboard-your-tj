<template>
  <div>
    <HeadGrid>
        <headTitle head_title="Настройки"/>
    </HeadGrid>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
export default {
  name: "edit-settings",
  components: { HeadGrid, headTitle },
};
</script>
