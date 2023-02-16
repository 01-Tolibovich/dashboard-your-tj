<template>
  <div
    class="top-admin grid grid-rows-2 grid-cols-1 justify-items-end px-8 py-2 items-center gap-x-4 shadow-black bg-white"
  >
    <!-- button -->
    <div
      @click="hiddenIcon = !hiddenIcon"
      class="justify-self-start row-start-1 row-end-3"
    >
      <svg v-if="hiddenIcon"
        class="h-6 w-6"
        x-description="Heroicon name: outline/bars-3-bottom-left"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        ></path>
      </svg>

      <svg v-else
        class="h-6 w-6 text-white"
        x-description="Heroicon name: outline/x-mark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>

    <!-- button -->

    <img
      class="row-start-1 row-end-3 hidden sm:block"
      src="../assets/images/bell.svg"
      alt=""
    />
    <h2 class="row-start-1 row-end-2 text-[14px] font-bold">
      Абуамриддин Гафуров
    </h2>
    <p class="row-start-2 row-end-3 text-[12px] text-[#575F6C]">
      Администратор
    </p>
    <img
      class="row-start-1 row-end-3 rounded-full hidden sm:block"
      src="../assets/images/Avatar profile.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "top-admin",
  data() {
    return {
      hiddenIcon: false,
    }
  },
};
</script>

<style>
.top-admin {
  -webkit-box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
}
</style>
