<template>
  <button class="text-black shadow-md mx-4 my-4 py-2 px-3 rounded-md bg-white">{{ neo_button }}</button>
</template>

<script>
export default {
  name: "neo-button",
  props: { neo_button: String },
};
</script>
