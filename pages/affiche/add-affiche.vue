<template>
  <div>
    <HeadGrid>
      <headTitle head_title="Добавить афишу"/>
    </HeadGrid>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
export default {
  name: "add-affiche",
  components: { HeadGrid, headTitle },
};
</script>
