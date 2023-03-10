<template>
  <div class="console">
    <HeadGrid>
      <headTitle head_title="Консоль" />
    </HeadGrid>
    
    <div
      class="grid sm:grid-cols-[repeat(auto-fit,_minmax(370px,_1fr))] gap-x-11 mb-7"
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
    <div></div>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import MainComponent from "@/components/mainComponent";
import headTitle from "@/components/Header/headTitle.vue";
import mainComponent from "@/components/mainComponent.vue";
import notesForm from "@/components/notesForm.vue";
import publicationHistory from "@/components/preliminaryPublications/publicationHistory.vue";
export default {
  name: "console",
  components: {
    HeadGrid,
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
