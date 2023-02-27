<template>
  <div>
    <HeadGrid>
      <headTitle head_title="Рубрики" />
    </HeadGrid>
    <MainBg>
      <AddPostsFormSlot>
        <p>Название</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Введите название рубрики"
        />
        <p>Описание</p>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <div class="flex gap-5">
          <button class="_blue-button">Сохранить</button>
          <span
            v-on:click="$router.push('/rubrics')"
            class="_grey-botton flex items-center justify-center px-5 py-2 cursor-pointer"
            >Отменить</span
          >
        </div>
      </AddPostsFormSlot>
    </MainBg>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import AddPostsFormSlot from "@/components/AddPostsFormSlot.vue";
import MainBg from "@/components/MainBg.vue";
export default {
  name: "edit-rubric",
  components: { HeadGrid, headTitle, AddPostsFormSlot, MainBg },
};
</script>
