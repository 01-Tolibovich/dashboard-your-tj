<template>
  <div class="inline mr-6">
    <input type="radio" :id="inputRadio.id" name="group1" class=" bg-white " />
    <label :for="inputRadio.id" name="group1">{{ inputRadio.text }}</label>
  </div>
</template>

<script>
export default {
  name: "input-radio",
  props: {
    inputRadio: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
