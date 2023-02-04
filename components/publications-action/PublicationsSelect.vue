<template>
  <div
    class="publications-select grid grid-cols-[64px_1fr_200px_110px_110px_210px_104px_64px] items-center gap-4 border-b h-12"
  >
    <input
      class="justify-center"
      type="checkbox"
      :id="select_public.id"
      :name="select_public.id"
    />
    <label class="border-l flex h-full items-center" :for="select_public.id">{{
      select_public.title
    }}</label>
    <label :for="select_public.id">{{ select_public.admin }}</label>
    <label :for="select_public.id">{{ select_public.rubric }}</label>
    <label :for="select_public.id">{{ select_public.whatch }}</label>
    <label :for="select_public.id">{{ select_public.status }}</label>
    <label :for="select_public.id">{{ select_public.date }}</label>
    <img border-l src="../../assets/images/edit.svg" alt="" />
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
};
</script>
