<template>
  <form v-on:submit.prevent class="_add-posts-form-slot bg-white">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "add-posts-form-slot",
};
</script>

<style></style>
