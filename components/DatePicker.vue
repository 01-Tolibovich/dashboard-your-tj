<template>
  <div class="relative w-[210px]">
    <input
      
      @mouseover="typeDateAndRemoveIcon"
      id="date"
      required=""
      :type="text"
      class="h-[42px] formDate placeholder:font-[600] placeholder:text-sm placeholder:text-slate-900"
      :placeholder="datePicker"
    />
    <a
      v-show="icon"
      href="#date"
      class="absolute top-[44%] right-[19px] translate-y-[-50%]"
      ><img src="../assets/images/date.svg" alt=""
    /></a>
  </div>
</template>

<script>
export default {
  name: "date-packer",
  props: {
    datePicker: String,
  },
  data() {
    return {
      icon: true,
      type: "text",
    };
  },
  methods: {
    typeDateAndRemoveIcon() {
      this.icon = false;
      this.text = "date";
    },
  },
};
</script>

<style scoped>
input {
  margin: 0 !important;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  color: rgba(0, 0, 0, 0);
  opacity: 1;
  display: block;
  background: url(../assets/images/date.svg) no-repeat;
  width: 20px;
  height: 20px;
  border-width: thin;
}
</style>
