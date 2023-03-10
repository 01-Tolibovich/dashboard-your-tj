<template>
  <div class="main-component bg-white py-6 px-4 rounded-md grid mb-7 gap-4">
    <p class="row-start-1 row-end-2 text-sm font-bold">
      {{ main_component.text }}
    </p>
    <h1 class="row-start-2 row-end-3 text-2xl text-[#0048B7] font-[600] whitespace-nowrap">
      {{ main_component.title }}
    </h1>
    <div
      class="_select-wrap w-full sm:w-auto row-start-3 row-end-4 sm:row-start-1 sm:row-end-3 justify-self-end self-end border rounded-[4px]"
    >
      <select
        class="_select w-full sm:w-min "
        name="date"
        id="date"
      >
        <option value="1">Всего</option>
        <option value="2">За сегодня</option>
        <option value="3">За неделю</option>
        <option value="2">За месяц</option>
        <option value="3">За год</option>
      </select>
    </div>
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
