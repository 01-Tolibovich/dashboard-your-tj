<template>
  <div class="spesial-projects">
    <headTitle head_title="Спецпроекты" />
    <div class="flex flex-wrap bg-white rounded-lg">
      <parameterFilter
        v-for="parameteres in filter"
        :key="parameteres.index"
        :parameter_filter="parameteres"
      />
    </div>
  </div>
</template>

<script>
import headTitle from "../components/headTitle.vue";
import parameterFilter from "../components/parameterFilter.vue";
export default {
  name: "spesial-projects",
  components: { headTitle, parameterFilter },
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
