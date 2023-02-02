<template>
  <div class="publications">
    <headTitle head_title="Публикации" />
    <div class="flex flex-wrap bg-white rounded-lg">
      <ParameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
    <ButtonAndSearch></ButtonAndSearch>
  </div>
</template>

<script>
import headTitle from "../components/headTitle.vue";
import ButtonAndSearch from "../components/ButtonAndSearchComponents/ButtonAndSearch.vue";
import parameterFilter from "../components/parameterFilter.vue";
export default {
  name: "publications",
  components: { headTitle, ButtonAndSearch, parameterFilter },
  data() {
    return {
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
