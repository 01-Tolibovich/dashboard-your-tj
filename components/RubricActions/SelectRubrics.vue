<template>
  <div
    class="select-rubrics grid grid-cols-[64px_104px_1fr_repeat(3,_150px)_64px;] items-center gap-x-8 py-4 border-b hover:bg-[#F3F4F6]"
  >
    <input
      class="cursor-pointer"
      type="checkbox"
      :id="select_rubric.id"
      :name="select_rubric.id"
    />
    <label class="font-bold cursor-pointer" :for="select_rubric.id">{{
      select_rubric.rubric
    }}</label>
    <label class="cursor-pointer" :for="select_rubric.id">{{
      select_rubric.discription
    }}</label>
    <label class="cursor-pointer" :for="select_rubric.id">{{
      select_rubric.yarlik
    }}</label>
    <label class="cursor-pointer" :for="select_rubric.id">{{
      select_rubric.quantity
    }}</label>
    <label class="cursor-pointer" :for="select_rubric.id">{{
      select_rubric.date
    }}</label>
    <img class="cursor-pointer" src="../../assets/images/edit.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "select-rubrics",
  props: {
    select_rubric: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
