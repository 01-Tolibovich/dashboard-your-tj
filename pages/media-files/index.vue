<template>
  <div class="media-files">
    <HeadGrid>
      <headTitle head_title="Медиафайлы" />
      <AddButton/>
    </HeadGrid>
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
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import AddButton from "@/components/buttons/AddButton.vue";
import parameterFilter from "@/components/parameterFilter.vue";
import ButtonAndSearch from "@/components/ButtonAndSearchComponents/ButtonAndSearch.vue";

export default {
  name: "media-files",
  components: { HeadGrid, headTitle, AddButton, parameterFilter, ButtonAndSearch },
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
