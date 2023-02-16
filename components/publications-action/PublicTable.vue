<template>
  <div class="_table-wrap">
    <div class="_table-value grid grid-cols-[min-content_repeat(2,_1fr)_min-content] md:grid-cols-[min-content_1fr_repeat(4,_min-content)] lg:grid-cols-[min-content_1fr_repeat(5,_min-content)] xl:grid-cols-[min-content_1fr_repeat(6,_min-content)] bg-white">
      <small class="font-bold"> </small>
      <small class="font-bold border-l border-[#E5E7EB]">Заголовок</small>
      <small class="font-bold">Администратор</small>
      <small class="hidden md:block font-bold">Рубрики</small>
      <small class="hidden lg:block font-bold">Просмотры</small>
      <small class="hidden md:block font-bold">Статус</small>
      <small class="hidden  xl:block font-bold border-r border-[#E5E7EB]">Дата</small>
      <small class="font-bold "> </small>

      <template v-for="vulue in tableBody">
        <div class="_input w-[50px] flex items-center justify-center border-y border-[#E5E7EB]"><input type="checkbox" id="value.id" name="value" /></div>
        <label class="border-l border-[#E5E7EB]" for="">{{ vulue.title }}</label>
        <label for="">{{ vulue.admin }}</label>
        <label class="hidden md:block" for="">{{ vulue.rubric }}</label>
        <label class="hidden lg:block" for="">{{ vulue.whatch }}</label>
        <label class="hidden md:block" for="">{{ vulue.status }}</label>
        <label class="hidden xl:block border-r border-[#E5E7EB]" for="">{{ vulue.date }}</label>
        <div class="_img border-y border-[#E5E7EB] flex items-center justify-center w-[50px]"><img border-l src="../../assets/images/edit.svg" alt="" /></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "public-table",
  data() {
    return {
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
