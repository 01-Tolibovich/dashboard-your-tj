<template>
  <div>
    <HeadGrid>
        <headTitle head_title="Добавить тег"/>
    </HeadGrid>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
export default {
  name: "add-tag",
  components: { HeadGrid, headTitle },
};
</script>
