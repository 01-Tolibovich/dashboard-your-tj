<template>
  <div class="history">
    <headTitle head_title="История" />
    <div class="flex flex-wrap bg-white rounded-lg">
      <parameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
    <ButtonAndSearch></ButtonAndSearch>
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
import headTitle from "../components/headTitle.vue";
import parameterFilter from "../components/parameterFilter.vue";
import ButtonAndSearch from "../components/ButtonAndSearchComponents/ButtonAndSearch.vue";
import Paginate from "@/node_modules/vuejs-paginate";
import Results from "../components/pagination-results/Results.vue";
export default {
  name: "hisrory",
  components: {
    headTitle,
    parameterFilter,
    ButtonAndSearch,
    Paginate,
    Results,
  },
  data() {
    return {
      filter: [
        {
          text: "Все",
          count: "11",
        },
        {
          text: "Редакторы",
          count: "11",
        },
        {
          text: "Авторы",
          count: "11",
        },
      ],
    };
  },
};
</script>
