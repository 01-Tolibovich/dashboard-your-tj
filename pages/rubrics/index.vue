<template>
  <div class="rubrics">
    <HeadGrid>
      <headTitle head_title="Рубрики" />
      <AddButton @click="$router.push('/rubrics/add-rubric/')"/>
    </HeadGrid>

    <div class="flex flex-wrap bg-white rounded-lg">
      <ParameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
    <ButtonAndSearch></ButtonAndSearch>
    <RubricTable/>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import ParameterFilter from "@/components/parameterFilter";
import headTitle from "@/components/Header/headTitle.vue";
import AddButton from "@/components/buttons/AddButton.vue";
import parameterFilter from "@/components/parameterFilter.vue";
import ButtonAndSearch from "@/components/ButtonAndSearchComponents/ButtonAndSearch.vue";
import RubricTable from "@/components/RubricActions/RubricTable.vue";
export default {
  name: "rubrics",
  components: {
    HeadGrid,
    ParameterFilter,
    headTitle,
    AddButton,
    parameterFilter,
    ButtonAndSearch,
    RubricTable,
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
