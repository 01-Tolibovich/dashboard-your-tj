<template>
  <div class="console">
    <headTitle head_title="Консоль" />
    <div
      class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-11 mb-7"
    >
      <MainComponent
        v-for="item in mainComponents"
        :key="item.index"
        :main_component="item"
      />
    </div>
    <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-7">
      <notesForm />
      <publicationHistory
        v-for="posts in publication"
        :key="posts.index"
        :publication_history="posts"
      />
    </div>
  </div>
</template>

<script>
import MainComponent from "../components/mainComponent";
import headTitle from "../components/headTitle.vue";
import mainComponent from "../components/mainComponent.vue";
import notesForm from "../components/notesForm.vue";
import publicationHistory from "../components/preliminaryPublications/publicationHistory.vue";
export default {
  name: "console",
  components: {
    MainComponent,
    headTitle,
    mainComponent,
    notesForm,
    publicationHistory,
  },
  data() {
    return {
      mainComponents: [
        {
          text: "Публикации",
          title: "1637 записей",
        },
        {
          text: "Просмотров",
          title: "798 просмотров",
        },
        {
          text: "Комментарии",
          title: "0 комментариев",
        },
      ],
      publication: [
        {
          title: "История публикаций",
          linkText: "Посмотреть всё",
        },
      ],
    };
  },
};
</script>
