<template>
  <button class=" text-black shadow-md mr-4 mb-4 py-2 px-3 rounded-md bg-white border border-white hover:border-[#747c88] hover:bg-gray-50 hover:border focus:bg-gray-50">{{ neo_button }}</button>
</template>

<script>
export default {
  name: "neo-button",
  props: { neo_button: String },
};
</script>
