<template>
  <div>
    <HeadGrid
      ><headTitle head_title="Добавить публикацию"></headTitle
    ></HeadGrid>
    <div class="bg-white">
      <NeoButton neo_button="Русский" />
      <NeoButton neo_button="Таджикский" />
      <NeoButton neo_button="Английский" />
    </div>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import NeoButton from "@/components/buttons/NeoButton.vue";
export default {
  name: "add-publications",
  components: { HeadGrid, headTitle, NeoButton },
};
</script>
