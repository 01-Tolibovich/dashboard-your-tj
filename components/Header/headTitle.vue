<template>
  <div
    
    class="head-title mt-8 mb-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-between items-center"
  >
    <h1 class="font-bold text-2xl">{{ head_title }}</h1>
  </div>
</template>

<script>
export default {
  name: "head-title",
  data() {
    return {
    };
  },
  props: { head_title: String, },
};
</script>
