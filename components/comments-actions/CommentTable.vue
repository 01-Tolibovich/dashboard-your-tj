<template>
    <div class="_table-wrap">
      <div
        class="_table-value grid grid-cols-[min-content_1fr_min-content] md:grid-cols-[min-content_1fr_repeat(4,_min-content)] bg-white"
      >
        <small class="font-bold"> </small>
        <small class="font-bold border-l border-[#E5E7EB]">Комментарий</small>
        <small class="font-bold hidden md:block">Публикация</small>
        <small class=" font-bold hidden md:block">Статус</small>
        <small class="hidden md:block font-bold">Дата</small>
        <small class="font-bold"> </small>
  
        <template v-for="vulue in tableBody">
          <div
            class="_input w-[50px] flex items-center justify-center border-y border-[#E5E7EB]"
          >
            <input type="checkbox" id="value.id" name="value" />
          </div>
          <label class="border-l border-[#E5E7EB]" for="">{{
            vulue.comment
          }}</label>
          <label class="hidden md:block" for="">{{ vulue.public }}</label>
          <label class="hidden md:block" for="">{{ vulue.status }}</label>
          <label class="hidden md:block" for="">{{ vulue.date }}</label>
          <div
            class="_img border-y border-[#E5E7EB] flex items-center justify-center w-[50px]"
          >
            <img border-l src="../../assets/images/edit.svg" alt="" />
          </div>
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
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
        ],
      };
    },
  };
  </script>
  