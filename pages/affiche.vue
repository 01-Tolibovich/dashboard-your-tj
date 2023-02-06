<template>
  <div class="affiche mb-10">
    <headTitle head_title="Афиша" :addButtonComponent="true"/>
    <div class="flex flex-wrap bg-white rounded-lg">
      <ParameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
    <ButtonAndSearch></ButtonAndSearch>
    <ActionsHead></ActionsHead>
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
import ActionsHead from "../components/affiche-actions/ActionsHead.vue";
import Results from "../components/pagination-results/Results.vue";
export default {
  name: "affiche",
  components: {
    headTitle,
    parameterFilter,
    ButtonAndSearch,
    ActionsHead,
    Paginate: () => import("vuejs-paginate").then(({ Paginate }) => Paginate),
    Results,
  },
  data() {
    return {
      page: 10,
      filter: [
        {
          text: "Все",
          count: "1647",
        },
        {
          text: "Мои",
          count: "1577",
        },
        {
          text: "Активные",
          count: "1640",
        },
        {
          text: "Прошедшие",
          count: "7",
        },
        {
          text: "Корзина",
          count: "2",
        },
      ],
    };
  },
};
</script>

<style></style>
