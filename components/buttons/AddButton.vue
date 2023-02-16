<template>
  <button
    type="button"
    class="_blue-button justify-self-stretch md:justify-self-end w-auto"
   @click="$emit('click')">
    <img src="@/assets/images/plus.svg" alt="add" />
    Добавить
  </button>
</template>

<script>
export default {
  name: "add-button",
};
</script>
