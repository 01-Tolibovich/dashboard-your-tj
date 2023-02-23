<template>
  <div class="comments">
    <HeadGrid><headTitle head_title="Комментарии" /></HeadGrid>

    <div class="flex flex-wrap bg-white rounded-lg">
      <parameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
    <ButtonAndSearch></ButtonAndSearch>
    <CommentTable />
    <div
      class="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] p-5 bg-white rounded-b-lg gap-4"
    >
      <Results></Results>
      <paginate
        :page-count="20"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      >
      </paginate>
    </div>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import parameterFilter from "@/components/parameterFilter.vue";
import ButtonAndSearch from "@/components/ButtonAndSearchComponents/ButtonAndSearch.vue";
import CommentTable from "@/components/comments-actions/CommentTable.vue";
import Paginate from "@/node_modules/vuejs-paginate";
import Results from "@/components/pagination-results/Results.vue";
export default {
  name: "comments",
  components: {
    HeadGrid,
    headTitle,
    parameterFilter,
    ButtonAndSearch,
    CommentTable,
    Paginate,
    Results,
  },
  data() {
    return {
      filter: [
        {
          text: "Все",
          count: "1647",
        },
        {
          text: "Одобренные",
          count: "1577",
        },
        {
          text: "На модерации",
          count: "1",
        },
      ],
    };
  },
};
</script>
