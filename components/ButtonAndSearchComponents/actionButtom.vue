<template>
  <div
    class="action-button _select-wrap rounded-[4px]"
  >
    <select class="h-10 border border-[#D1D5DB] rounded-md px-3 pr-7" name="select">
      <option value="1">Действия</option>
      <option value="2">В корзину</option>
      <option value="1">В черновик</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "action-button",
};
</script>
