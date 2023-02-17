<template>
  <div>
    <HeadGrid>
      <headTitle head_title="Добавить афишу" />
    </HeadGrid>
    <MainBg>
      <AddPostsFormSlot>
        <div class="flex flex-wrap gap-5">
          <DatePicker datePicker="Дата и время (Начало)" />
          <DatePicker datePicker="Дата и время (Конец)" />
          <div class="h-[42px] flex flex-wrap gap-5 items-center" id="price">
            <div class="bg-white shadow-sm rounded-md flex items-center p-2 border">
              <input
                @click="showInput = false"
                type="radio"
                name="price"
                id="1"
              /><label @click="showInput = false" class="mx-2 p-0" for="1"
                >Бесплатно</label
              >
            </div>
            <div class="bg-white shadow-sm rounded-md flex items-center p-2 border">
              <input
                @click="showInput = true"
                type="radio"
                name="price"
                id="2"
              /><label @click="showInput = true" class="mx-2 p-0" for="2"
                >Платно</label
              >
            </div>
            <input
              v-show="showInput"
              class="_margin-0 w-min"
              type="number"
              name=""
              id=""
              placeholder="Введите сумму"
            />
          </div>

          <div></div>
        </div>
        <section>
          
        </section>
      </AddPostsFormSlot>
    </MainBg>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid.vue";
import headTitle from "@/components/Header/headTitle.vue";
import AddPostsFormSlot from "@/components/AddPostsFormSlot.vue";
import DatePicker from "@/components/DatePicker.vue";
import MainBg from "@/components/MainBg";

export default {
  name: "add-affiche",
  components: { HeadGrid, headTitle, AddPostsFormSlot, DatePicker, MainBg },
  data() {
    return {
      showInput: false,
    };
  },
};
</script>

<style scoped>
._margin-0,
.min {
  margin: 0 !important;
}
</style>
