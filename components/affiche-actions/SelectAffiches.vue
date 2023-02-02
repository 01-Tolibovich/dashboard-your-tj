<template>
  <div
    class="grid grid-cols-[64px_88px_1fr_repeat(4,_140px)_64px] gap-8 items-center py-4 border-b hover:bg-[#F3F4F6] p-4"
  >
    <input
      type="checkbox"
      :id="sellect_affiches.id"
      :name="sellect_affiches.id"
    />
    <label :for="sellect_affiches.id">
      <img
        :src="require(`../../assets/images/${sellect_affiches.img}`)"
        alt=""
      /> </label
    ><label class="font-bold" :for="sellect_affiches.id">{{
      sellect_affiches.title
    }}</label
    ><label :for="sellect_affiches.id">{{ sellect_affiches.type }}</label
    ><label :for="sellect_affiches.id">{{ sellect_affiches.see }}</label
    ><label :for="sellect_affiches.id">{{ sellect_affiches.status }}</label
    ><label :for="sellect_affiches.id">{{ sellect_affiches.date }}</label>
    <img class="cursor-pointer" src="../../assets/images/edit.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "SellectAffiches",
  props: {
    sellect_affiches: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
