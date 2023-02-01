<template>
  <div class="sidebar-menu sm:p-7 relative">
    <div class="fixed">
      <header class="mb-[40px] mt-4 mx-auto hidden sm:block">
        <img class="mx-auto" src="../assets/images/your.png" alt="your" />
      </header>
      <aside>
        <nav class="grid">
          <nuxt-link to="/">
            <img src="../assets/images/console.svg" alt="" />
            <p class="hidden sm:block">Консоль</p>
          </nuxt-link>
          <nuxt-link to="/rubrics">
            <img src="../assets/images/rubrics.svg" alt="" />
            <p class="hidden sm:block">Рубрики</p>
          </nuxt-link>
          <nuxt-link to="/publications">
            <img src="../assets/images/publics.svg" alt="" />
            <p class="hidden sm:block">Публикации</p>
          </nuxt-link>
          <nuxt-link to="/affiche">
            <img src="../assets/images/affiche.svg" alt="" />
            <p class="hidden sm:block">Афиша</p>
          </nuxt-link>
          <nuxt-link to="/spesial-projects">
            <img src="../assets/images/specialProjects.svg" alt="" />
            <p class="hidden sm:block">Спецпроекты</p>
          </nuxt-link>
          <nuxt-link to="/users">
            <img src="../assets/images/users.svg" alt="" />
            <p class="hidden sm:block">Пользователи</p>
          </nuxt-link>
          <nuxt-link to="/addvertisement">
            <img src="../assets/images/addvertisement.svg" alt="" />
            <p class="hidden sm:block">Реклама</p>
          </nuxt-link>
          <nuxt-link to="/comments">
            <img src="../assets/images/comments.svg" alt="" />
            <p class="hidden sm:block">Комментарии</p>
          </nuxt-link>
          <nuxt-link to="/media-files">
            <img src="../assets/images/media.svg" alt="" />
            <p class="hidden sm:block">Медиафайлы</p>
          </nuxt-link>
          <nuxt-link to="/history">
            <img src="../assets/images/history.svg" alt="" />
            <p class="hidden sm:block">История</p>
          </nuxt-link>
          <nuxt-link to="/roles">
            <img src="../assets/images/role.svg" alt="" />
            <p class="hidden sm:block">Роли</p>
          </nuxt-link>
          <nuxt-link to="/tags">
            <img src="../assets/images/tags.svg" alt="" />
            <p class="hidden sm:block">Теги</p>
          </nuxt-link>
          <nuxt-link to="/settings">
            <img src="../assets/images/settings.svg" alt="" />
            <p class="hidden sm:block">Настройки</p>
          </nuxt-link>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "sadebar-menu",
  data() {
    return {};
  },
};
</script>
