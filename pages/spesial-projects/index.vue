<template>
  <div class="spesial-projects">
    <HeadGrid>
      <headTitle head_title="Спецпроекты" />
      <AddButton @click="$router.push('/spesial-projects/add-project')"/>
    </HeadGrid>

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
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import AddButton from "../../components/buttons/AddButton.vue";
import parameterFilter from "@/components/parameterFilter.vue";
import ButtonAndSearch from "@/components/ButtonAndSearchComponents/ButtonAndSearch.vue";
import Paginate from "@/node_modules/vuejs-paginate";
import Results from "@/components/pagination-results/Results.vue";
export default {
  name: "spesial-projects",
  components: {
    HeadGrid,
    headTitle,
    AddButton,
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
          text: "Архивные",
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
