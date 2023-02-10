<template>
  <div class="relative">
    <input
      class="h-[0.01px] w-[0.01px] absolute"
      ref="fileInput"
      type="file"
      id="fileInput"
    />
    <label
      class="text-[#0048B7]  font-bold py-2 px-4 rounded-md border border-[#0048B7] my-2 mr-4 hover:bg-[#0049b70e] focus:bg-[#0049b70e] active:bg-[#0049b70e]"
      for="fileInput"
      >{{ blueTransparentButton }}</label
    >
  </div>
</template>

<script>
export default {
  name: "blue-transparent-button",
  props: { blueTransparentButton: String },
};
</script>
