<template>
  <div class="search">
    <form action="submit" class="relative">
      <button type="submit" class="absolute h-10">
        <img src="@/assets/images/search.svg" alt="" /></button
      ><input
        class="h-10 w-full border border-[#D1D5DB] rounded-md pl-12"
        type="search"
        placeholder="Поиск публикации"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "search",
};
</script>

<!-- <style>
.search button::before {
    content: "\f002";
}
</style> -->
