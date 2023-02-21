<template>
  <div>
    <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
    <select id="location" name="location" class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
      <option>United States</option>
      <option selected="">Canada</option>
      <option>Mexico</option>
    </select>
  </div>
</template>

<script>

</script>

<style>
.vs__dropdown-toggle {
    position: relative;
}
.vs__selected {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
}
.vs__actions {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
}
</style>