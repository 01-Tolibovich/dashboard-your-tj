<template>
  <div
    class="rubric-head px-5 min-w-[940px] rounded-b-lg mb-32 bg-white relative"
  >
    <div
      class="grid grid-cols-[64px_104px_1fr_repeat(3,_150px)_64px;] items-center gap-x-8 bg-white"
    >
      <small
        class="py-4 font-bold"
        v-for="title in rubricHead"
        :key="title.text"
        >{{ title.text }}</small
      >
      <div class="border-b col-span-7"></div>
    </div>
    <SelectRubrics
      v-for="field in rubric"
      :key="field.index"
      :select_rubric="field"
    ></SelectRubrics>
  </div>
</template>

<script>
import SelectRubrics from "./SelectRubrics.vue";
export default {
  name: "RubricActions",
  components: { SelectRubrics },
  props: {
    rubric_actions: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      rubricHead: [
        { text: " " },
        { text: "Название" },
        { text: "Описани" },
        { text: "Ярлык" },
        { text: "Записи" },
        { text: "Даты" },
        { text: " " },
      ],
      rubric: [
        {
          rubric: "Бизнес",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          yarlik: "business",
          quantity: "144",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Путеществия",
          discription: "Возвращение Мухаммада. Как и чем живет",
          yarlik: "Javascript",
          quantity: "261",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Животные",
          discription: "Два в одном. Как колорист помогает приюту ",
          yarlik: "business",
          quantity: "119",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Люди",
          discription: "Казахстан меняет правила. С 27 января граждане",
          yarlik: "business",
          quantity: "834",
          date: "31.03.2023",
          editicon: "role.svg",
        },
        {
          rubric: "Бизнес",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          yarlik: "business",
          quantity: "144",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Путеществия",
          discription: "Возвращение Мухаммада. Как и чем живет",
          yarlik: "Javascript",
          quantity: "261",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Животные",
          discription: "Два в одном. Как колорист помогает приюту ",
          yarlik: "business",
          quantity: "119",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Люди",
          discription: "Казахстан меняет правила. С 27 января граждане",
          yarlik: "business",
          quantity: "834",
          date: "31.03.2023",
          editicon: "role.svg",
        },
        {
          rubric: "Бизнес",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          yarlik: "business",
          quantity: "144",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Путеществия",
          discription: "Возвращение Мухаммада. Как и чем живет",
          yarlik: "Javascript",
          quantity: "261",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Животные",
          discription: "Два в одном. Как колорист помогает приюту ",
          yarlik: "business",
          quantity: "119",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          rubric: "Люди",
          discription: "Казахстан меняет правила. С 27 января граждане",
          yarlik: "business",
          quantity: "834",
          date: "31.03.2023",
          editicon: "role.svg",
        },
      ],
    };
  },
};
</script>
