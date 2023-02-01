<template>
  <div class="media-files">
    <headTitle head_title="Медиафайлы" />
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
import headTitle from "../../components/headTitle.vue";
import parameterFilter from "../../components/parameterFilter.vue";
export default {
  name: "media-files",
  components: { headTitle, parameterFilter },
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
