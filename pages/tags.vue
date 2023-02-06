<template>
  <div class="tags">
    <headTitle head_title="Теги" :addButtonComponent="true"/>
  </div>
</template>

<script>
import headTitle from '../components/headTitle.vue';
export default {
  name: "tags",
  components: {headTitle}
};
</script>
