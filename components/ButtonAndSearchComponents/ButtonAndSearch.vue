<template>
  <div
    class="button-and-search grid grid-flow-row sm:grid-cols-[min-content_1fr;] mt-7 gap-5 bg-white p-4 rounded-t-lg border-b"
  >
    <actionButtom></actionButtom>
    <Search></Search>
  </div>
</template>

<script>
import actionButtom from "./actionButtom.vue";
import Search from "./Search.vue";
export default {
  name: "button-and-search",
  components: { actionButtom, Search },
};
</script>
