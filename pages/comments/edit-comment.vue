<template>
  <div>
    <HeadGrid><headTitle head_title="Комментарии" /></HeadGrid>
    <MainBg>
      <div class=" grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <small>Имя</small>
          <p>Абуамриддин</p>
        </div>
        <div>
          <small>Фамилия</small>
          <p>Гафуров</p>
        </div>
        <div>
          <small>Электронная почта</small>
          <p>index@mail.com</p>
        </div>
        <div>
          <small>Название публикации</small>
          <nuxt-link to="#">Новогодние будни</nuxt-link>
        </div>
        <div>
          <small>Дата публикации</small>
          <p>31.12.2023</p>
        </div>
        <div>
          <small>Статус</small>
          <p>Одобрено</p>
        </div>
        <div class="md:col-span-3">
          <small>Комментарий</small>
          <p>
            Эксперты просыпаются и собираются на работу, мы с вами поболтаем в
            комментариях. Уважаемый Автор, поделитесь о том, как прошли ваши
            зимние каникулы?
          </p>
        </div>
      </div>
      <button class="_blue-button">Назад</button>
    </MainBg>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid";
import headTitle from "@/components/Header/headTitle.vue";
import MainBg from "@/components/MainBg.vue";
export default {
  name: "edit-comment",
  components: { HeadGrid, headTitle, MainBg },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  small {
    @apply text-sm block text-[#4B5563];
  }
  p {
    @apply text-base;
  }
  a {
    @apply text-[#0048B7]
  }
}
</style>
