<template>
  <div class="head-title mt-8 mb-4">
    <h1 class="font-bold text-2xl ">{{ head_title }}</h1>
  </div>
</template>

<script>
export default {
  name: "head-title",
  props: { head_title: String },
};
</script>
