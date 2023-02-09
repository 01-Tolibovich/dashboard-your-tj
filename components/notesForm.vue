<template>
  <div class="notes-form grid grid-cols-2 gap-4 rounded-lg bg-white py-10 px-6">
    <p class="col-start-1 col-end-2 text-lg font-bold">Заметки</p>
    <nuxt-link class="col-start-2 col-end-3 justify-self-end" to="/">Посмотреть все заметки</nuxt-link>
    <form action="submit" class="grid gap-4 col-start-1 col-end-3">
      <div class="grid gap-1">
        <span class="text-sm">Заголовок</span>
        <input class="rounded-md border p-2" type="text" placeholder="Введите заголовок" />
      </div>
      <div class="grid gap-1">
        <span class="text-sm">Содержимое</span>
        <textarea class="rounded-md border p-2" name="text" id="" cols="30" rows="10"></textarea>
      </div>
      <button class="blue-button">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "notes-form",
};
</script>
