<template>
  <div class="actions-head bg-white rounded-b-lg">
    <div
      class="grid grid-cols-[64px_88px_1fr_repeat(4,_140px)_64px] gap-8 items-center border-b p-4"
    >
      <small class="font-bold" v-for="title in affiheHead" :key="title.index">{{
        title.text
      }}</small>
    </div>
    <SelectAffiches
      v-for="item in afficheActions"
      :key="item.index"
      :sellect_affiches="item"
    ></SelectAffiches>
  </div>
</template>

<script>
import SelectAffiches from "./SelectAffiches.vue";
export default {
  name: "actions-head",
  components: { SelectAffiches },
  data() {
    return {
      affiheHead: [
        { text: " " },
        { text: "Фото" },
        { text: "Заголовок" },
        { text: "Тип мероприятия" },
        { text: "Просмотры" },
        { text: "Статус" },
        { text: "Дата" },
      ],
      afficheActions: [
        {
          id: 1,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          see: "8.3k",
          status: "Отказано",
          date: "31.03.2021",
        },
        {
          id: 2,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          see: "8.3k",
          status: "На модерации",
          date: "31.03.2021",
        },
        {
          id: 3,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          see: "8.3k",
          status: "Одобрено",
          date: "31.03.2021",
        },
        {
          id: 4,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          see: "8.3k",
          status: "Отказано",
          date: "31.03.2021",
        },
        {
          id: 5,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          see: "8.3k",
          status: "На модерации",
          date: "31.03.2021",
        },
        {
          id: 6,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          see: "8.3k",
          status: "На модерации",
          date: "31.03.2021",
        },
        {
          id: 7,
          img: "Avatar.jpg",
          title: "Фото и видео выставка синематик проекта...",
          type: "Выставки",
          see: "8.3k",
          status: "Одобрено",
          date: "31.03.2021",
        },
      ],
    };
  },
};
</script>
