<template>
  <div class="parameter-filter p-5 flex gap-2">
        <p class="font-bold text-sm">{{ parameter_filter.text }}</p>
        <span class="text-sm">{{ parameter_filter.count }}</span>
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
