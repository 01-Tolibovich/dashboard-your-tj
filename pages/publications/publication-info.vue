<template>
  <div class="_publication-info ">
    <HeadGrid><headTitle head_title="Информация о публикации" /></HeadGrid>
    <MainBg>
      <div class="grid grid-cols-1 md:grid-cols-3 _full-info">
        <h2 class="md:col-span-3 text-[#0048B7] text-lg font-[500] mb-[14px]">Автор</h2>
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
        <h2 class="md:col-span-3 text-[#0048B7] text-lg font-[500] mb-[14px]">Редактор</h2>
        <div>
          <small>Имя</small>
          <p>Гафур</p>
        </div>
        <div>
          <small>Фамилия</small>
          <p>Абуамриддин</p>
        </div>
        <div>
          <small>Электронная почта</small>
          <p>index@mail.com</p>
        </div>
        <div>
          <small >Название публикации</small>
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
      <div class="mt-6 flex flex-wrap gap-6">
        <button v-on:click="$router.push('/publications')" class="_blue-button">Перейти к публикации</button
        ><button v-on:click="$router.push('/publications')" class="_grey-botton">Назад</button
        >
      </div>
    </MainBg>
  </div>
</template>

<script>
import HeadGrid from "@/components/Header/HeadGrid";
import headTitle from "@/components/Header/headTitle.vue";
import MainBg from "@/components/MainBg.vue";
export default {
  name: "publications-info",
  components: { HeadGrid, headTitle, MainBg },
};
</script>
