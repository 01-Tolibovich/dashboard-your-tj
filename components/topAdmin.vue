<template>
  <div
    class="top-admin grid grid-rows-2 grid-cols-1 justify-items-end px-8 py-2 items-center gap-x-4 shadow-black bg-white"
  >
    <img
      class="row-start-1 row-end-3 "
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
      class="row-start-1 row-end-3 rounded-full"
      src="../assets/images/Avatar profile.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "top-admin",
};
</script>

<style>
.top-admin {
  -webkit-box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 1px 14px -10px rgba(0, 0, 0, 0.61);
}
</style>
