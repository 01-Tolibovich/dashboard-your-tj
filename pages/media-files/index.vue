<template>
  <div class="media-files">
    <headTitle head_title="Медиафайлы" :addButtonComponent="true"/>
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
import headTitle from "../../components/headTitle.vue";
import parameterFilter from "../../components/parameterFilter.vue";
import ButtonAndSearch from "../../components/ButtonAndSearchComponents/ButtonAndSearch.vue";
export default {
  name: "media-files",
  components: { headTitle, parameterFilter, ButtonAndSearch },
  data() {
    return {
      filter: [
        {
          text: "Все",
          count: "1647",
        },
      ],
    };
  },
};
</script>
