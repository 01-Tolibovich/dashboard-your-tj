<template>
  <div>
    <div
      class="publications-head grid grid-cols-[48px_1fr_200px_110px_110px_210px_104px_48px] bg-white font-bold border-b border-[#E5E7EB] h-12 items-center min-w-[1100px]"
    >
      <small v-for="title in publicHead" :key="title.text">{{
        title.text
      }}</small>
    </div>
    <div class="bg-white">
      <PublicationsSelect
        v-for="list in publicSelect"
        :key="list.index"
        :select_public="list"
      ></PublicationsSelect>
    </div>
  </div>
</template>

<script>
import PublicationsSelect from "./PublicationsSelect.vue";
export default {
  name: "publications-head",
  components: { PublicationsSelect },
  data() {
    return {
      publicHead: [
        { text: " " },
        { text: "Заголовок" },
        { text: "Администратор" },
        { text: "Рубрики" },
        { text: "Просмотры" },
        { text: "Статус" },
        { text: "Дата" },
        { text: " " },
      ],
      publicSelect: [
        {
          id: 1,
          title: "Муроҷиати фаъолон ба Рустам...",
          admin: "Абуамриддин Гафуров",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 2,
          title: "Муроҷиати фаъолон ба Рустам...",
          admin: "Абуамриддин Гафуров",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 3,
          title: "Муроҷиати фаъолон ба Рустам...",
          admin: "Абуамриддин Гафуров",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 4,
          title: "Муроҷиати фаъолон ба Рустам...",
          admin: "Абуамриддин Гафуров",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 5,
          title: "Муроҷиати фаъолон ба Рустам...",
          admin: "Абуамриддин Гафуров",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 6,
          title: "Муроҷиати фаъолон ба Рустам...",
          admin: "Абуамриддин Гафуров",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 7,
          title: "Муроҷиати фаъолон ба Рустам...",
          admin: "Абуамриддин Гафуров",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 8,
          title: "Муроҷиати фаъолон ба Рустам...",
          admin: "Абуамриддин Гафуров",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
      ],
    };
  },
};
</script>
