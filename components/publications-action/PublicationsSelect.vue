<template>
  <div
    class="publications-select grid grid-cols-[48px_1fr_200px_110px_110px_210px_104px_48px] items-center border-b border-[#E5E7EB] h-12 min-w-[1100px] "
  >
    <input
      class="justify-center"
      type="checkbox"
      :id="select_public.id"
      :name="select_public.id"
    />
    <label class="border-l border-[#E5E7EB] flex h-full items-center pl-4 pr-2" :for="select_public.id">{{
      select_public.title
    }}</label>
    <label @click="shovPublic" class="px-2" :for="select_public.id">{{ select_public.admin }}</label>
    <label class="px-2" :for="select_public.id">{{ select_public.rubric }}</label>
    <label class="px-2" :for="select_public.id">{{ select_public.whatch }}</label>
    <label class="px-2" :for="select_public.id">{{ select_public.status }}</label>
    <label class="pr-4 pl-2 border-r border-[#E5E7EB] h-full flex items-center" :for="select_public.id">{{ select_public.date }}</label>
    <img class="justify-self-center" border-l src="../../assets/images/edit.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "publications-select",
  props: {
    select_public: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    shovPublic: function () {
      alert(this.admin)
    }
  }
};
</script>
