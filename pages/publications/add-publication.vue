<template>
  <div>
    <HeadGrid><headTitle head_title="Добавить публикацию" /></HeadGrid>
    <MainBg>
      <div>
        <NeoButton neo_button="Русский" />
        <NeoButton neo_button="Таджикский" />
        <NeoButton neo_button="Английский" />
      </div>
      <div class="my-4">
        <p>Вид публикации</p>
        <form>
          <div id="group1">
            <InputRadio
              v-for="list in typePost"
              :key="list.index"
              :inputRadio="list"
            />
          </div>
        </form>
        <UploadMediaInPost/>
      </div>
      <form>
        <input class="border block w-full mb-6 py-2 px-3 rounded-md" type="text" placeholder="dfhgdfbgsf">
        <input class="border block w-full mb-6 py-2 px-3 rounded-md" type="text" placeholder="dfhgdfbgsf">
        <input class="border block w-full mb-6 py-2 px-3 rounded-md" type="text" placeholder="dfhgdfbgsf">
      </form>
    </MainBg>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import MainBg from "@/components/MainBg.vue";
import NeoButton from "@/components/buttons/NeoButton.vue";
import UploadMediaInPost from "@/components/UploadMediaInPost.vue";
import InputRadio from "../../components/InputRadio.vue";
export default {
  name: "add-publications",
  components: {
    HeadGrid,
    headTitle,
    MainBg,
    NeoButton,
    UploadMediaInPost,
    InputRadio,
  },
  data() {
    return {
      typePost: [
        {
          id: 1,
          text: "Стандартная",
        },
        {
          id: 2,
          text: "Молния",
        },
        {
          id: 3,
          text: "Фото дня",
        },
      ],
    };
  },
};
</script>
