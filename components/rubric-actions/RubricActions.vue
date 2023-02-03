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
          id: 1,
          rubric: "Бизнес",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          yarlik: "business",
          quantity: "144",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 2,
          rubric: "Путеществия",
          discription: "Возвращение Мухаммада. Как и чем живет",
          yarlik: "Javascript",
          quantity: "261",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 3,
          rubric: "Животные",
          discription: "Два в одном. Как колорист помогает приюту ",
          yarlik: "business",
          quantity: "119",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 4,
          rubric: "Люди",
          discription: "Казахстан меняет правила. С 27 января граждане",
          yarlik: "business",
          quantity: "834",
          date: "31.03.2023",
          editicon: "role.svg",
        },
        {
          id: 5,
          rubric: "Бизнес",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          yarlik: "business",
          quantity: "144",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 6,
          rubric: "Путеществия",
          discription: "Возвращение Мухаммада. Как и чем живет",
          yarlik: "Javascript",
          quantity: "261",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 7,
          rubric: "Животные",
          discription: "Два в одном. Как колорист помогает приюту ",
          yarlik: "business",
          quantity: "119",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 8,
          rubric: "Люди",
          discription: "Казахстан меняет правила. С 27 января граждане",
          yarlik: "business",
          quantity: "834",
          date: "31.03.2023",
          editicon: "role.svg",
        },
        {
          id: 9,
          rubric: "Бизнес",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          yarlik: "business",
          quantity: "144",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 10,
          rubric: "Путеществия",
          discription: "Возвращение Мухаммада. Как и чем живет",
          yarlik: "Javascript",
          quantity: "261",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 11,
          rubric: "Животные",
          discription: "Два в одном. Как колорист помогает приюту ",
          yarlik: "business",
          quantity: "119",
          date: "31.03.2023",
          editicon: "edit.svg",
        },
        {
          id: 12,
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
