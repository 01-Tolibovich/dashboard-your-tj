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
  </div>
</template>

<script>
import headTitle from "../components/headTitle.vue";
import parameterFilter from "../components/parameterFilter.vue";
import ButtonAndSearch from "../components/ButtonAndSearchComponents/ButtonAndSearch.vue";
export default {
  name: "hisrory",
  components: { headTitle, parameterFilter, ButtonAndSearch },
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
