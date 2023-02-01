<template>
  <div class="main-component bg-white py-6 px-4 rounded-md grid grid-rows-2">
    <p class="row-start-1 row-end-2 text-sm font-bold ">{{ main_component.text }}</p>
    <h1 class="row-start-2 row-end-3 text-2xl text-[#0048B7] font-[600] ">{{ main_component.title }}</h1>
    <select class="row-start-1 row-end-3 w-min justify-self-end self-end border rounded-[4px]" name="date" id="date">
      <option value="1">Всего</option>
      <option value="2">Сегодня</option>
      <option value="3">Неделя</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "main-component",
  props: {
    main_component: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
