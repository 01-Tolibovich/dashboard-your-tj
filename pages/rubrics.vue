<template>
  <div class="rubrics">
    <headTitle head_title="Рубрики" />
    <div class="flex flex-wrap bg-white rounded-lg">
      <ParameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
    <div class="grid grid-cols-[min-content_1fr;] mt-7">
      <ActionButtom></ActionButtom>
      <Search></Search>
    </div>
  </div>
</template>

<script>
import ParameterFilter from "../components/parameterFilter";
import headTitle from "../components/headTitle.vue";
import parameterFilter from "../components/parameterFilter.vue";
import ActionButtom from "../components/actionButtom.vue";
import Search from "../components/Search.vue";
export default {
  name: "rubrics",
  components: {
    ParameterFilter,
    headTitle,
    parameterFilter,
    ActionButtom,
    Search
  },
  data() {
    return {
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
