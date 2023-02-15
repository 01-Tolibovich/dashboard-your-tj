<template>
  <div>
    <div class="_table-value grid grid-cols-[min-content_1fr_repeat(6,_min-content)] gap-4 bg-white">
      <small v-for="title in tableHead" :key="title" class="font-bold">{{
        title.text
      }}</small>

      <template v-for="vulue in tableBody">
        <input type="checkbox" id="value.id" name="value" />
        <label for="value.id">{{ vulue.title }}</label>
        <label for="select_public.id">{{ vulue.admin }}</label>
        <label for="list.id">{{ vulue.rubric }}</label>
        <label for="list.id">{{ vulue.whatch }}</label>
        <label for="list.id">{{ vulue.status }}</label>
        <label for="value.id">{{ vulue.date }}</label>
        <img border-l src="../../assets/images/edit.svg" alt="" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "public-table",
  data() {
    return {
      tableHead: [
        { text: " " },
        { text: "Заголовок" },
        { text: "Администратор" },
        { text: "Рубрики" },
        { text: "Просмотры" },
        { text: "Статус" },
        { text: "Дата" },
        { text: " " },
      ],
      tableBody: [
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
          title: "Таҷикистон ба пеш...",
          admin: "Эшматов Тошмат",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 3,
          title:
            "Ведущий казахстанский маркетолог проведет цикл мастер-классов и тренингов «Управление продажами и продвижением»",
          admin: "Сиддиқав Абубакр",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 4,
          title:
            "В Душанбе казахстанский миллионер проведет цикл тренингов и мастер-классов. Количество мест ограничено",
          admin: "Насруллоева Нилуфар",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 5,
          title:
            "SMM для девушек: курс, который помог таджикским девушкам получить новые навыки, востребованные на рынке",
          admin: "Ходжаева Ходжамо",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 6,
          title:
            "На Первом совещании координационного комитета обсуждены основные достижения Программы здравоохранения, финансируемой Евросоюзом",
          admin: "Тирандозов Табар",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 7,
          title:
            "Среди крупнейших: таджикский онлайн-кинотеатр SOMON.TV выходит на мировой рынок",
          admin: "Абдуллоев Будулай",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Опубликовано",
          date: "31.03.2021",
        },
        {
          id: 8,
          title:
            "Хотите сделать свою компанию успешной? Пройдите инновационный курс «Построение эффективной организации»",
          admin: "Асроров Хоҷа",
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
