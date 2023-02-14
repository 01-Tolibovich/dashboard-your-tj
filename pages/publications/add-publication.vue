<template>
  <div class="relative">
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
          <div class="flex flex-wrap gap-2 items-center" id="type">
            <input type="radio" name="type" id="standart" />
            <label for="standart">Стандартная</label>
            <input type="radio" name="type" id="molniya" />
            <label for="molniya">Молния</label>
            <input type="radio" name="type" id="photoOfDay" />
            <label for="photoOfDay">Фото дня</label>
          </div>
        </form>
        <UploadMediaInPost />
      </div>
      <form class="mb-6">
        <p>Заголовок</p>
        <input :type="text" placeholder="Введите заголовок" />
        <p>Подзаголовок (Описание)</p>
        <input type="text" placeholder="Введите подзаголовок" />
        <p>Рубрики</p>
        <select name="rubric" id="rubric">
          <option value="1">Рубрика 1</option>
          <option value="2">Рубрика 2</option>
          <option value="3">Рубрика 3</option>
          <option value="4">Рубрика 4</option>
          <option value="5">Рубрика 5</option>
        </select>
        <p>Теги</p>
        <select name="rubric" id="rubric">
          <option value="1">Тег 1</option>
          <option value="2">Тег 2</option>
          <option value="3">Тег 3</option>
          <option value="4">Тег 4</option>
          <option value="5">Тег 5</option>
        </select>
        <p>Расположение на сайте ($)</p>
        <div class="grid grid-cols-[1fr_auto] items-center gap-4">
          <div class="w-full">
            <select class="m-0" name="rubric" id="rubric">
              <option value="1">ADVERTISIMENT 1920x200</option>
              <option value="2">A1 (10$)</option>
              <option value="3">A2 (10$)</option>
              <option value="4">A3 (10$)</option>
              <option value="5">A4 (10$)</option>
              <option value="6">A5 (10$)</option>
              <option value="7">A6 (10$)</option>
              <option value="8">A7 (10$)</option>
              <option value="9">A8 (10$)</option>
              <option value="10">PARTNERS PLACE</option>
              <option value="11">PARTNERS PLACE</option>
              <option value="12">NEWSLETTER</option>
              <option value="13">AFFICHE</option>
              <option value="14">ADVERTISIMENT 1280x200</option>
              <option value="15">PARTNERS PLACE</option>
              <option value="16">ADVERTISIMENT 410x440</option>
              <option value="17">PARTNERS PLACE</option>
              <option value="18">A9 (10$)</option>
              <option value="19">A10 (10$)</option>
              <option value="20">A11 (10$)</option>
              <option value="21">A12 (10$)</option>
              <option value="22">ADVERTISIMENT 1280x200</option>
            </select>
          </div>
          <PositionPostPlace @buttonToggle="modal = !modal" />
        </div>
        <Editor
          api-key="no-api-key"
          :init="{
            plugins: 'lists link image table code help wordcount',
          }"
        />
        <div class="bg-[#F3F4F6] p-7">
          <div>
            <NeoButton neo_button="Соцсети" />
            <NeoButton neo_button="SEO" />
          </div>
        </div>
      </form>   
    </MainBg>
    <LayoultPositions
      class="w-full"
      v-show="modal"
      @modalClose="modal = false"
    />
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import MainBg from "@/components/MainBg.vue";
import NeoButton from "@/components/buttons/NeoButton.vue";
import UploadMediaInPost from "@/components/UploadMediaInPost.vue";
import PositionPostPlace from "@/components/buttons/PositionPostPlace.vue";
import LayoultPositions from "@/components/LayoultPositions.vue";
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "add-publications",
  components: {
    HeadGrid,
    headTitle,
    MainBg,
    NeoButton,
    UploadMediaInPost,
    PositionPostPlace,
    LayoultPositions,
    Editor,
  },
  data() {
    return {
      modal: false,
    };
  },
};
</script>
