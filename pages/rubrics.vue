<template>
  <div class="rubrics">
    <headTitle head_title="Рубрики" :addButtonComponent="true" />
    <div class="flex flex-wrap bg-white rounded-lg">
      <ParameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
    <ButtonAndSearch></ButtonAndSearch>
    <RubricActions></RubricActions>
  </div>
</template>

<script>
import ParameterFilter from "../components/parameterFilter";
import headTitle from "../components/headTitle.vue";
import parameterFilter from "../components/parameterFilter.vue";
import ButtonAndSearch from "../components/ButtonAndSearchComponents/ButtonAndSearch.vue";
import RubricActions from "../components/rubric-actions/RubricActions.vue";
export default {
  name: "rubrics",
  components: {
    ParameterFilter,
    headTitle,
    parameterFilter,
    ButtonAndSearch,
    RubricActions,
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
          text: "Корзина",
          count: "2",
        },
      ],
    };
  },
};
</script>
