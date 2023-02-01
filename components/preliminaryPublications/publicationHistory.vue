<template>
  <div
    class="publication-history py-10 px-6 bg-white rounded-lg grid grid-cols-2"
  >
    <h2>{{ publication_history.title }}</h2>
    <nuxt-link class="justify-self-end" to="/">{{ publication_history.linkText }}</nuxt-link>
    <publicationPosts
      class="col-start-1 col-end-3"
      v-for="post in posts"
      :key="post.index"
      :publication_posts="post"
    />
  </div>
</template>

<script>
import publicationPosts from "./publicationPosts.vue";
export default {
  name: "publication-history",
  components: { publicationPosts },
  data() {
    return {
      posts: [
        {
          date: "Сегодня, 12:01",
          paragrph:
            "Советы колориста Манучехра. Все, что вы не знали про окрашивание волос",
        },
        {
          date: "Завтра, 12:01",
          paragrph:
            "10 вместо 01. Владельцам автомобилей в Душанбе будут выдавать госномера с новой серией",
        },
        {
          date: "Вчера, 12:01",
          paragrph:
            "Бизнес и искусство. Сложно ли в Таджикистане вести арт-бизнес",
        },
      ],
    };
  },
  props: {
    publication_history: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
