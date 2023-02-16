<template>
  <div class="_table-wrap">
    <div
      class="_table-value grid grid-cols-[min-content_1fr_repeat(2,_min-content)] md:grid-cols-[repeat(2,_min-content)_1fr_repeat(3,_min-content)] bg-white"
    >
      <small class="font-bold"> </small>
      <small class="font-bold border-l border-[#E5E7EB]">Название</small>
      <small class="font-bold hidden md:block">Описание</small>
      <small class=" font-bold">Записи</small>
      <small class="hidden md:block font-bold">Даты</small>
      <small class="font-bold"> </small>

      <template v-for="vulue in tableBody">
        <div
          class="_input w-[50px] flex items-center justify-center border-y border-[#E5E7EB]"
        >
          <input type="checkbox" id="value.id" name="value" />
        </div>
        <label class="border-l border-[#E5E7EB]" for="">{{
          vulue.rubric
        }}</label>
        <label class="hidden md:block" for="">{{ vulue.discription }}</label>
        <label class="" for="">{{ vulue.posts }}</label>
        <label class="hidden md:block" for="">{{ vulue.date }}</label>
        <div
          class="_img border-y border-[#E5E7EB] flex items-center justify-center w-[50px]"
        >
          <img border-l src="../../assets/images/edit.svg" alt="" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "public-table",
  data() {
    return {
      tableBody: [
        {
          id: 1,
          rubric: "НОВОСТИ",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          posts: "135",
          date: "31.03.2021",
        },
        {
          id: 1,
          rubric: "ИСТОРИИ",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          posts: "135",
          date: "31.03.2021",
        },
        {
          id: 1,
          rubric: "ПОДКАСТЫ",
          discription: "Мы рассказываем о бизнесе в Таджикистане.",
          posts: "135",
          date: "31.03.2021",
        },
      ],
    };
  },
};
</script>
