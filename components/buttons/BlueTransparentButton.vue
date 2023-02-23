<template>
  <div class="relative">
    <input
      class="h-[0.01px] w-[0.01px] absolute"
      ref="fileInput"
      type="file"
      id="fileInput"
      @change="previewImage"
      accept="image/*"
    />
    <label
    v-if="imageData == ''"
      class="text-[#0048B7] font-bold py-2 px-4 rounded-md border border-[#0048B7] my-2 mr-4 hover:bg-[#0049b70e] focus:bg-[#0049b70e] active:bg-[#0049b70e] block whitespace-nowrap w-min"
      for="fileInput"
      >{{ blueTransparentButton }}</label
    >
    <div class="relative inline-block max-w-[410px] w-full h-auto">
      <img class="preview max-w-[410px] w-full h-auto" :src="imageData" />
      <div v-if="imageData" class="absolute bottom-0 flex w-full justify-between p-4"><label class="text-[#0048B7] text-[10px] bg-white px-3 py-2 rounded-md font-[500] cursor-pointer" for="fileInput">Изменить</label>
        <label @click="imageData = ''" class="text-[#0048B7] text-[10px] bg-white px-3 py-2 rounded-md font-[500] cursor-pointer">Удалить</label></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blue-transparent-button",
  props: { blueTransparentButton: String },
  data() {
    return {
      imageData: "", // мы будем хранить формат base64 изображения в этой строке
    };
  },

  methods: {
    previewImage: function (event) {
      // Ссылка на элемент ввода DOM
      var input = event.target;
      // Убедитесь, что у вас есть файл, прежде чем пытаться его прочитать
      if (input.files && input.files[0]) {
        // создать новый FileReader для чтения этого изображения и преобразования в формат base64
        var reader = new FileReader();
        // Определите функцию обратного вызова, которая будет выполняться, когда FileReader завершит свою работу
        reader.onload = (e) => {
          // Примечание: здесь используется функция arrow, так что "this.imageData" ссылается на imageData компонента Vue
          // Считать изображение в формате base64 и установить в imageData
          this.imageData = e.target.result;
        };
        // Запуск задания чтения - чтение файла как url данных (формат base64)
        reader.readAsDataURL(input.files[0]);
      } else {
        this.imageData = "";
      }
    },
  },
};
</script>
