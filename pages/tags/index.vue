<template>
  <div class="tags">
    <HeadGrid>
      <headTitle head_title="Теги" />
      <AddButton @click="$router.push('tags/add-tag')"/>
    </HeadGrid>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import AddButton from "@/components/buttons/AddButton.vue";
export default {
  name: "tags",
  components: { HeadGrid, headTitle, AddButton },
};
</script>
