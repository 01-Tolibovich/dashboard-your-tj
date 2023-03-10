<template>
    <div class="relative grid xl:grid-cols-[minmax(250px,_300px)_1fr] overflow-x-hidden " :class="{ 'h-screen overflow-y-hidden': MenuBtn }" >
        <sidebarMenu class="absolute xl:block translate-x-[-100%] xl:translate-x-0 ease-in duration-300" :class="{ 'translate-x-0' : MenuBtn }"/>
        <div  class="border-l border-[#E5E7EB] z-10 bg-[#F8F8F9] min-h-screen w-full ease-in duration-300 " :class="{ 'overlay-body': MenuBtn }">
            <topAdmin/>
            <div @click="menuClose" @mouseover="closePrButtons"><Nuxt class="px-4 sm:px-8 mt-[100px] " /></div>
            
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex';
import sidebarMenu from '@/components/sidebarMenu.vue';
import topAdmin from '../components/topAdmin.vue';
export default {
    components: {sidebarMenu, topAdmin},
    computed: {
        ...mapState(['MenuBtn'])
    },
    methods: {
        ...mapMutations({
            menuClose: 'menuClose',
            closePrButtons: 'closeProfileButtons',
            
        })
    }
}
</script>

<style>
.overlay-body {
    filter: brightness(0.8) blur(0.8px);
}
</style>