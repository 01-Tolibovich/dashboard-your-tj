<template>
    <div class="_table-wrap">
      <div
        class="_table-value grid grid-cols-[min-content_1fr_min-content] md:grid-cols-[min-content_1fr_repeat(3,_200px)_min-content] bg-white"
      >
        <small class="font-bold"> </small>
        <small class="font-bold border-l border-[#E5E7EB] _text-left">Комментарий</small>
        <small class="font-bold hidden md:flex">Публикация</small>
        <small class="hidden md:flex font-bold">Дата</small>
        <small class=" font-bold hidden md:flex">Статус</small>
        
        <small class="font-bold"> </small>
  
        <template v-for="value in tableBody">
          <div
            class="_input w-[50px] flex items-center justify-center border-y border-[#E5E7EB]"
          >
            <input type="checkbox" id="value.id" name="value" />
          </div>
          <label class="border-l border-[#E5E7EB] _text-left" for="">{{
            value.comment
          }}</label>
          <label class="hidden md:flex" for="">{{ value.public }}</label>
          <label class="hidden md:flex justify-center items-center" for=""><span 
            :class="
            value.status == 'Одобрено'
              ? 'bg-[#D1FAE5] text-[#065F46]'
              : value.status == 'На модерации'
              ? 'bg-[#FEF3C7] text-[#92400E]'
              : 'bg-[#F3F4F6] text-[#1F2937]'
          "
            class="items-center w-full text-center px-4 py-[2px] rounded-full whitespace-nowrap">{{ value.status }}</span></label>
          <label class="hidden md:flex" for="">{{ value.date }}</label>
          <nuxt-link to="comments/edit-comment"
            class="_img border-y border-[#E5E7EB] flex items-center justify-center w-[50px]"
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
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "Одобрено",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "На модерации",
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
            status: "На модерации",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "На модерации",
            date: "31.03.2021",
          },
          {
            id: 1,
            comment: "Эксперты просыпаются и собираются на работу, мы с вами поболтаем в комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши зимние каникулы?",
            public: "Выставки",
            status: "На модерации",
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
            status: "На модерации",
            date: "31.03.2021",
          },
        ],
      };
    },
  };
  </script>
  