<template>
  <div class="_table-wrap">
    <div
      class="_table-value grid grid-cols-[min-content_repeat(1,_1fr)_min-content] md:grid-cols-[min-content_1fr_repeat(4,_min-content)] lg:grid-cols-[min-content_1fr_repeat(5,_min-content)] xl:grid-cols-[min-content_1fr_repeat(6,_min-content)] bg-white"
    >
      <small class=""> </small>
      <small class="border-l border-[#E5E7EB]">Заголовок</small>
      <small class="hidden md:block">Администратор</small>
      <small class="hidden md:block text-center">Рубрики</small>
      <small class="hidden lg:block text-center">Просмотры</small>
      <small class="hidden md:block text-center">Статус</small>
      <small class="hidden xl:block border-r border-[#E5E7EB] text-center">Дата</small>
      <small class=" "> </small>

      <template v-for="value in tableBody">
        <div
          class="_input w-[50px] flex items-center justify-center border-y border-[#E5E7EB]"
        >
          <input type="checkbox" id="value.id" name="value" />
        </div>
        <label class="border-l border-[#E5E7EB] font-[500]" for="">{{
          value.title
        }}</label>
        <label @click="alertadmin" class="hidden md:block whitespace-nowrap " for="">{{ value.admin }}</label>
        <label class="hidden md:block whitespace-nowrap " for="">{{ value.rubric }}</label>
        <label class="hidden lg:block text-center" for="">{{ value.whatch }}</label>
        <label
          class="_status hidden md:flex justify-center px-4"
          
          for=""
          ><span 
          :class="
            value.status == 'Опубликовано'
              ? 'bg-[#D1FAE5] text-[#065F46]'
              : value.status == 'На редактировании'
              ? 'bg-[#FEF3C7] text-[#92400E]'
              : value.status == 'На доработку'
              ? 'bg-[#FEE2E2] text-[#991B1B]'
              : value.status == 'Черновик'
              ? 'bg-[#E0E7FF] text-[#3730A3]'
              : value.status == 'В корзине'
              ? 'bg-[#F3F4F6] text-[#1F2937]'
              : 'bg-[#F3F4F6] text-[#1F2937]'
          "
          class="items-center w-full text-center px-4 py-[2px] rounded-full">{{ value.status }}</span>
          </label
        >
        <label class="hidden xl:block" for="">{{ value.date }}</label>
        <nuxt-link to="/publications/edit-publication/"
          class="_img border-y flex items-center justify-center w-[50px] border-l border-[#E5E7EB]"
        >
          <img border-l src="../../assets/images/edit.svg" alt="" />
        </nuxt-link>
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
          status: "В корзине",
          date: "31.03.2021",
          filter: "Все"
        },
        {
          id: 2,
          title: "Таҷикистон ба пеш...",
          admin: "Эшматов Тошмат",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Черновик",
          date: "31.03.2021",
          filter: "Опубликованные"
        },
        {
          id: 3,
          title:
            "Ведущий казахстанский маркетолог проведет цикл мастер-классов и тренингов «Управление продажами и продвижением»",
          admin: "Сиддиқав Абубакр",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "На доработку",
          date: "31.03.2021",
          filter: "На модерации"
        },
        {
          id: 4,
          title:
            "В Душанбе казахстанский миллионер проведет цикл тренингов и мастер-классов. Количество мест ограничено",
          admin: "Насруллоева Нилуфар",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "На редактировании",
          date: "31.03.2021",
          filter: "На доработку"
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
          filter: "Черновики"
        },
        {
          id: 6,
          title:
            "На Первом совещании координационного комитета обсуждены основные достижения Программы здравоохранения, финансируемой Евросоюзом",
          admin: "Тирандозов Табар",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "В корзине",
          date: "31.03.2021",
          filter: "Корзина"
        },
        {
          id: 7,
          title:
            "Среди крупнейших: таджикский онлайн-кинотеатр SOMON.TV выходит на мировой рынок",
          admin: "Абдуллоев Будулай",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "Черновик",
          date: "31.03.2021",
          filter: "Заметки"
        },
        {
          id: 8,
          title:
            "Хотите сделать свою компанию успешной? Пройдите инновационный курс «Построение эффективной организации»",
          admin: "Асроров Хоҷа",
          rubric: "Life, People",
          whatch: "8.3k",
          status: "На доработку",
          date: "31.03.2021",
          filter: "Все"
        },
      ],
    };
  },
  methods: {
    alertadmin() {
      alert()
    }
  },
};
</script>
