<template>
  <div>
    <HeadGrid>
      <headTitle head_title="Добавить спецпроект" />
    </HeadGrid>
    <MainBg>
      <AddPostsFormSlot>
        <UploadMediaInPost />
        <p>Заголовок</p>
        <input type="text" name="" id="" placeholder="Введите заголовок" />
        <p>Ссылка</p>
        <input type="url" name="" id="" placeholder="Введите ссылку" />
        <div class="flex gap-5">
          <button class="_blue-button">Опубликовать</button>
          <span
            v-on:click="$router.push('/spesial-projects')"
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
import MainBg from "@/components/MainBg.vue";
import AddPostsFormSlot from "@/components/AddPostsFormSlot.vue";
import UploadMediaInPost from "@/components/UploadMediaInPost.vue";
export default {
  name: "add-project",
  components: {
    HeadGrid,
    headTitle,
    MainBg,
    AddPostsFormSlot,
    UploadMediaInPost,
  },
};
</script>
