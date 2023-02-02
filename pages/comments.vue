<template>
  <div class="comments">
    <headTitle head_title="Комментарии" />
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
  name: "comments",
  components: { headTitle, parameterFilter, ButtonAndSearch },
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
