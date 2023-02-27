<!-- Not active component -->
<template>
  <div>
    <p>Предварительный просмотр</p>
    <img :src="imageData" alt="">
  </div>
</template>

<script>
export default {
  name: "preview-for-social",
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
