<template>
  <div class="publications">
    <HeadGrid>
      <headTitle head_title="Публикации" />
      <AddButton @click="$router.push('/publications/add-publication/')"/>
    </HeadGrid>

    <div class="flex flex-wrap bg-white rounded-lg">
      <ParameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
    <ButtonAndSearch></ButtonAndSearch>
    <PublicationsHead></PublicationsHead>
    <PublicTable/>
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
import ButtonAndSearch from "@/components/ButtonAndSearchComponents/ButtonAndSearch.vue";
import parameterFilter from "@/components/parameterFilter.vue";
import PublicTable from "@/components/publications-action/PublicTable.vue";
import Paginate from "@/node_modules/vuejs-paginate";
import Results from "@/components/pagination-results/Results.vue";
import PublicationsHead from "@/components/publications-action/PublicationsHead.vue";

export default {
  name: "publications",
  components: {
    HeadGrid,
    headTitle,
    AddButton,
    ButtonAndSearch,
    parameterFilter,
    PublicTable,
    Paginate,
    Results,
    PublicationsHead,
  },
  data() {
    return {
      buttonForAdd: true,
      filter: [
        {
          text: "Все",
          count: "1647",
        },
        {
          text: "Опубликованные",
          count: "3",
        },
        {
          text: "На модерации",
          count: "2",
        },
        {
          text: "На доработку",
          count: "2",
        },
        {
          text: "Черновики",
          count: "2",
        },
        {
          text: "Корзина",
          count: "2",
        },
        {
          text: "Заметки",
          count: "1",
        },
      ],
    };
  },
};
</script>
