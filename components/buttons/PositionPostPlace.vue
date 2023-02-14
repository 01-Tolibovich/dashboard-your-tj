<template>
  <div
    @click="toggle"
    class="flex items-center gap-2 border h-full rounded-md py-2 px-3 cursor-pointer"
  >
    <p>Позиция</p>
    <img src="../../assets/images/positions.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "position-post-place",
  methods: {
    toggle() {
        this.$emit("buttonToggle")
    }
  }
};
</script>
