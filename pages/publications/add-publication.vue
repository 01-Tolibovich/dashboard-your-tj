<template>
  <div class="relative">
    <HeadGrid><headTitle head_title="Добавить публикацию" /></HeadGrid>
    <MainBg>
      <AddPostsFormSlot>
        <section>
          <NeoButton neo_button="Русский" />
          <NeoButton neo_button="Таджикский" />
          <NeoButton neo_button="Английский" />
        </section>
        <section class="my-4">
          <p>Вид публикации</p>
          <div>
            <div class="flex flex-wrap gap-2 items-center" id="type">
              <input type="radio" name="type" id="standart" />
              <label for="standart">Стандартная</label>
              <input type="radio" name="type" id="molniya" />
              <label for="molniya">Молния</label>
              <input type="radio" name="type" id="photoOfDay" />
              <label for="photoOfDay">Фото дня</label>
            </div>
          </div>
          <UploadMediaInPost />
        </section>
        <section class="mb-6">
          <p>Заголовок</p>
          <input type="text" placeholder="Введите заголовок" />
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
          <p class="mb-2">Расположение на сайте ($)</p>
          <div
            class="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4 mb-6"
          >
            <div class="w-full">
              <select
                class="_position-post-place-select"
                name="rubric"
                id="rubric"
              >
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
          <p>Ссылка</p>
          <div class="relative">
            <input class="bg-[#F3F4F6]" type="url" name="link" id="link" /> 
            <a class="absolute top-2/4 right-3 translate-y-[-50%]" href="#link">
            <img  src="../../assets/images/edit.svg" alt=""></a></div>
          <Editor
            api-key="no-api-key"
            :init="{
              plugins: 'lists link image table code help wordcount',
            }"
          />
        </section>
        <section class="bg-[#F3F4F6] p-7 rounded-md">
          <div>
            <NeoButton neo_button="Соцсети" />
            <NeoButton neo_button="SEO" />
          </div>
          <div class="mb-6">
            <p class="mt-6 mb-2">{{ select_file_input }}</p>
            <div class="grid grid-flow-col items-center grid-cols-1">
              <input
                class="col-start-1 col-end-2 row-start-1 row-end-2"
                type="file"
                ref="fileInput2"
                name="selectFile"
                id="fileInput2"
                placeholder="Введите заголовок"
              />
              <label
                class="col-start-1 col-end-2 row-start-1 row-end-2 min-w-min w-[134px] text-white rounded-l-md bg-[#BCC1C9] h-[32px] flex items-center justify-center m-0"
                for="fileInput2"
                >Выбрать файл</label
              >
            </div>
          </div>
          <p>Заголовок в Facebook</p>
          <input type="text" name="" id="" placeholder="Введите заголовок" />
          <p>Описание в Facebook</p>
          <textarea name="" id="" rows="10"></textarea>
        </section>
        <section class="bg-[#F3F4F6] p-7 rounded-md mt-6">
          <p>Комментарий для Автора*</p>
          <textarea name="" id="" rows="10"></textarea>
        </section>
        <div class="my-6 flex gap-5 flex-wrap justify-between">
          <div class="flex gap-5 flex-wrap">
            <button class="_blue-button">Опубликовать</button>
            <button class="_red-transparent-button">На доработку</button>
            <button class="_grey-botton">Отменить</button>
          </div>
          <div>
            <button class="_blue-transparent-button">
              Предварительный просмотр
            </button>
          </div>
        </div>
      </AddPostsFormSlot>
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
import AddPostsFormSlot from "@/components/AddPostsFormSlot.vue";
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
    AddPostsFormSlot,
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
