<template>
  <div class="flex gap-5 flex-wrap">
    <div class="relative w-[210px]">
      <input
        @mouseover="typeDateAndRemoveIcon1"
        @change="($event) => currentDate = $event.target.value"
        id="date"
        required=""
        :type="text1"
        class="h-[42px] formDate placeholder:font-[600] placeholder:text-sm placeholder:text-slate-900"
        placeholder="Дата и время (Начало)"
        :max="maxDate"
        :min="currentDate"
      />
      <a
        v-show="icon1"
        href="#date"
        class="absolute top-[44%] right-[19px] translate-y-[-50%]"
        ><img src="../assets/images/date.svg" alt=""
      /></a>
    </div>
    <div class="relative w-[210px]">
      <input
        @mouseover="typeDateAndRemoveIcon2"
        @change="($event) => maxDate = $event.target.value"
        id="date2"
        required=""
        :type="text2"
        class="h-[42px] formDate placeholder:font-[600] placeholder:text-sm placeholder:text-slate-900"
        placeholder="Дата и время (Конец)"
        :min="currentDate"
      />
      <a
        v-show="icon2"
        href="#date"
        class="absolute top-[44%] right-[19px] translate-y-[-50%]"
        ><img src="../assets/images/date.svg" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "date-packer",
  components: { moment },
  data() {
    return {
      icon1: true,
      icon2: true,
      text1: "text",
      text2: "text",
      selectedDataFrom: '',
      currentDate: moment().format("YYYY-MM-DDTHH:mm"),
      maxDate: ''
    };
  },
  computed: {
  },
  methods: {
    typeDateAndRemoveIcon1() {
      this.icon1 = false;
      this.text1 = "datetime-local";
    },
    typeDateAndRemoveIcon2() {
      this.icon2 = false;
      this.text2 = "datetime-local";
    },
  },
};
</script>

<style scoped>
input {
  margin: 0 !important;
}
input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  color: rgba(0, 0, 0, 0);
  opacity: 1;
  display: block;
  background: url(../assets/images/date.svg) no-repeat;
  width: 20px;
  height: 20px;
  border-width: thin;
}
</style>
