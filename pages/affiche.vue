<template>
  <div class="affiche">
    <headTitle head_title="Афиша" />
    <div class="flex flex-wrap bg-white rounded-lg">
      <ParameterFilter
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
  name: "affiche",
  components: { headTitle, parameterFilter },
  data() {
    return {
        filter: [
            {
                text: "Все",
                count: "1647"
            },
            {
                text: "Мои",
                count: "1577"
            },
            {
                text: "Активные",
                count: "1640"
            },
            {
                text: "Прошедшие",
                count: "7"
            },
            {
                text: "Корзина",
                count: "2"
            },
        ]
    };
  },
};
</script>
