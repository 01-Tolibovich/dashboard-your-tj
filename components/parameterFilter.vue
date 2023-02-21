<template>
  <div class="parameter-filter p-5 flex gap-2 hover:text-[#0048B7] focus:text-[#0048B7] cursor-pointer">
    <p class="font-bold text-sm ">{{ parameter_filter.text }}</p>
    <span class="text-sm ">({{ parameter_filter.count }})</span>
  </div>
</template>

<script>
export default {
  name: "parameter-filter",
  props: {
    parameter_filter: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.parameter-filter:hover p {
  color: #0048B7;
}
.parameter-filter:hover span {
  color: #0048B7;
}
</style>
