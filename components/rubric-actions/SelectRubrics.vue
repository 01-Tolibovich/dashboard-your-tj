<template>
  <div
    class="select-rubrics grid grid-cols-[64px_104px_1fr_repeat(3,_150px)_64px;] items-center gap-x-8 py-4 border-b hover:bg-[#F3F4F6]"
  >
    <input type="checkbox" id="rubrics" name="rubrics" />
    <label class="font-bold" for="rubrics">{{ select_rubric.rubric }}</label>
    <label for="rubrics">{{ select_rubric.discription }}</label>
    <label for="rubrics">{{ select_rubric.yarlik }}</label>
    <label for="rubrics">{{ select_rubric.quantity }}</label>
    <label for="rubrics">{{ select_rubric.date }}</label>
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
