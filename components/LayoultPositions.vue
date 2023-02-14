<template>
  <div class="_layoul-positions max-w-[1280px] mx-auto grid gap-6 my-10 absolute w-full top-0 opacity-95">
    <button @click="modalClose" class=" fixed cursor-pointer bg-[#0048B7] p-2  rounded-md text-white">Закрыть</button>
    <div class="bg-[#6B7280] h-[184px]">
      <h2 class="text-white">ADVERTISIMENT</h2>
      <h2 class="text-white">1920x200</h2>
    </div>
    <main class="grid grid-flow-col gap-6 text-black">
      <div class="bg-[#D1D5DB] h-[440px]">
        <h2>A1 (10$)</h2>
      </div>
      <div class="bg-[#D1D5DB] h-[440px]">
        <h2>A2 (10$)</h2>
      </div>
      <div class="bg-[#D1D5DB] h-[440px]">
        <h2>A3 (10$)</h2>
      </div>
    </main>
    <div class="bg-[#D1D5DB] h-[135px]">
      <h2>A4 (10$)</h2>
    </div>
    <div class="bg-[#D1D5DB] h-[475px]">
      <h2>A5 (10$)</h2>
    </div>
    <div class="bg-[#D1D5DB] h-[135px]">
      <h2>A6 (10$)</h2>
    </div>
    <main class="grid grid-flow-col gap-6 text-black">
      <div class="bg-[#D1D5DB] h-[354px]">
        <h2>A7 (10$)</h2>
      </div>
      <div class="bg-[#D1D5DB] h-[354px]">
        <h2>A8 (10$)</h2>
      </div>
    </main>
    <main class="grid grid-flow-col gap-6 text-black">
      <div class="bg-[#4B5563] h-[440px]">
        <h2 class="text-white">PARTNERS PLACE</h2>
      </div>
      <div class="bg-[#4B5563] h-[440px]">
        <h2 class="text-white">PARTNERS PLACE</h2>
      </div>
      <div class="bg-[#4B5563] h-[440px]">
        <h2 class="text-white">NEWSLETTER</h2>
      </div>
    </main>
    <div class="bg-[#4B5563] h-[456px]">
      <h2 class="text-white">AFFICHE</h2>
    </div>
    <div class="bg-[#6B7280] h-[200px]">
      <h2 class="text-white">ADVERTISIMENT</h2>
      <h2 class="text-white">1280x200</h2>
    </div>
    <main class="grid grid-flow-col gap-6 text-black">
      <div class="bg-[#4B5563] h-[440px]">
        <h2 class="text-white">PARTNERS PLACE</h2>
      </div>
      <div class="bg-[#6B7280] h-[440px]">
        <h2 class="text-white">ADVERTISIMENT</h2>
        <h2 class="text-white">410x440</h2>
      </div>
      <div class="bg-[#4B5563] h-[440px]">
        <h2 class="text-white">PARTNERS PLACE</h2>
      </div>
    </main>
    <main class="grid grid-flow-col gap-6 text-black">
      <div class="bg-[#D1D5DB] h-[296px]">
        <h2>A9 (10$)</h2>
      </div>
      <div class="bg-[#D1D5DB] h-[296px]">
        <h2>A10 (10$)</h2>
      </div>
      <div class="bg-[#D1D5DB] h-[296px]">
        <h2>A11 (10$)</h2>
      </div>
      <div class="bg-[#D1D5DB] h-[296px]">
        <h2>A12 (10$)</h2>
      </div>
    </main>
    <div class="bg-[#6B7280] h-[200px]">
      <h2 class="text-white">ADVERTISIMENT</h2>
      <h2 class="text-white">1280x200</h2>
    </div>
  </div>
</template>

<script>
export  default {
    name: 'layoult-positions',
    methods: {
        modalClose() {
            this.$emit("modalClose")
        }
    }
}
</script>
