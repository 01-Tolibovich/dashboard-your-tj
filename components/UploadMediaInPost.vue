<template>
  <div>
    <div class="my-8">
      <p class="mb-3">Изображение</p>
      <BlueTransparentButton blueTransparentButton="Добавить медиафайл" />
    </div>
  </div>
</template>

<script>
import BlueTransparentButton from "@/components/buttons/BlueTransparentButton.vue";
export default {
  name: "upload-media-in-post",
  components: { BlueTransparentButton },
};
</script>
