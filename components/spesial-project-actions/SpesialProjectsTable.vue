<template>
  <div class="_table-wrap">
    <div
      class="_table-value grid grid-cols-[repeat(2,_min-content)_1fr_min-content] sm:grid-cols-[repeat(2,_min-content)_1fr_repeat(2,_min-content)] md:grid-cols-[repeat(2,_min-content)_1fr_repeat(3,_min-content)] lg:grid-cols-[repeat(2,_min-content)_1fr_repeat(5,_min-content)] bg-white"
    >
      <small class="font-bold"> </small>
      <small class="font-bold border-l border-[#E5E7EB]">Фото</small>
      <small class="font-bold">Заголовок</small>
      <small class="font-bold hidden lg:block whitespace-nowrap"
        >Тип мероприятия</small
      >
      <small class="hidden md:block font-bold whitespace-nowrap"
        >Просмотры</small
      >
      <small class="hidden sm:block font-bold whitespace-nowrap">Статус</small>
      <small class="hidden lg:block font-bold whitespace-nowrap">Дата</small>
      <small class="font-bold"> </small>

      <template v-for="value in tableBody">
        <div
          class="_input w-[50px] flex items-center justify-center border-y border-[#E5E7EB]"
        >
          <input type="checkbox" id="value.id" name="value" />
        </div>
        <div
          class="border-l border-y border-[#E5E7EB] flex items-center justify-center"
        >
          <img :src="require(`../../assets/images/${value.img}`)" alt="" />
        </div>
        <label for="">{{ value.title }}</label>
        <label class="hidden lg:block" for="">{{ value.type }}</label>
        <label class="hidden md:block" for="">{{ value.whatch }}</label>
        <label class="hidden sm:flex" for=""
          ><span
            class="items-center w-full text-center px-4 py-[2px] rounded-full"
            :class="
              value.status == 'Активный'
                ? 'bg-[#D1FAE5] text-[#065F46]'
                : value.status == 'Архивный'
                ? 'bg-[#FEF3C7] text-[#92400E]'
                : 'bg-[#F3F4F6] text-[#1F2937]'
            "
            >{{ value.status }}</span
          ></label
        >
        <label class="hidden lg:block" for="">{{ value.date }}</label>
        <nuxt-link
          to="spesial-projects/edit-project"
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
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          whatch: "6.3k",
          status: "Архивный",
          date: "31.03.2021",
        },
        {
          id: 2,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          whatch: "8.2k",
          status: "Активный",
          date: "31.03.2021",
        },
        {
          id: 3,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          whatch: "7.3k",
          status: "Архивный",
          date: "31.03.2021",
        },
        {
          id: 4,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          whatch: "8.8k",
          status: "Активный",
          date: "31.03.2021",
        },
        {
          id: 5,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          whatch: "9.3k",
          status: "Активный",
          date: "31.03.2021",
        },
        {
          id: 6,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          whatch: "9.3k",
          status: "Архивный",
          date: "31.03.2021",
        },
        {
          id: 7,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          whatch: "1.3k",
          status: "Активный",
          date: "31.03.2021",
        },
        {
          id: 8,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          whatch: "6.3k",
          status: "Архивный",
          date: "31.03.2021",
        },
      ],
    };
  },
};
</script>
