<template>
  <div class="_table-wrap">
    <div
      class="_table-value grid grid-cols-[repeat(2,_min-content)_1fr_min-content] sm:grid-cols-[repeat(2,_min-content)_1fr_repeat(2,_min-content)] md:grid-cols-[repeat(2,_min-content)_1fr_repeat(3,_min-content)] lg:grid-cols-[repeat(2,_min-content)_1fr_repeat(4,_min-content)] bg-white"
    >
      <small class="font-bold"> </small>
      <small class="font-bold border-l border-[#E5E7EB]">Фото</small>
      <small class="font-bold">Заголовок</small>
      <small class="hidden md:block font-bold">Просмотры</small>
      <small class="hidden sm:block font-bold">Статус</small>
      <small class="hidden lg:block font-bold">Дата</small>
      <small class="font-bold"> </small>

      <template v-for="vulue in tableBody">
        <div
          class="_input w-[50px] flex items-center justify-center border-y border-[#E5E7EB]"
        >
          <input type="checkbox" id="value.id" name="value" />
        </div>
        <div class="border-l border-y border-[#E5E7EB] flex items-center justify-center "><img :src="require(`../../assets/images/${vulue.img}`)" alt=""></div>
        <label for="">{{ vulue.title }}</label>
        <label class="hidden md:block" for="">{{ vulue.whatch }}</label>
        <label class="hidden sm:block" for="">{{ vulue.status }}</label>
        <label class="hidden lg:block" for="">{{ vulue.date }}</label>
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
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          whatch: "6.3k",
          status: "Одобрено",
          date: "31.03.2021",
        },
        {
          id: 2,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          whatch: "8.2k",
          status: "Одобрено",
          date: "31.03.2021",
        },
        {
          id: 3,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          whatch: "7.3k",
          status: "Одобрено",
          date: "31.03.2021",
        },
        {
          id: 4,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          whatch: "8.8k",
          status: "Одобрено",
          date: "31.03.2021",
        },
        {
          id: 5,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          whatch: "9.3k",
          status: "Одобрено",
          date: "31.03.2021",
        },
        {
          id: 6,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          whatch: "9.3k",
          status: "Одобрено",
          date: "31.03.2021",
        },
        {
          id: 7,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          whatch: "1.3k",
          status: "Одобрено",
          date: "31.03.2021",
        },
        {
          id: 8,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          whatch: "6.3k",
          status: "Одобрено",
          date: "31.03.2021",
        },
      ],
    };
  },
};
</script>
