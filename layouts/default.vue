<template>
    <div class=" grid xl:grid-cols-[minmax(250px,_300px)_1fr] overflow-x-hidden">
        <sidebarMenu class="hidden xl:block"/>
        <div class="border-l border-[#E5E7EB] z-10 bg-[#F8F8F9] min-h-screen w-full overflow-x-hidden">
            <topAdmin/>
            <Nuxt class="px-8"/>
        </div>
    </div>
</template>

<script>
import sidebarMenu from '@/components/sidebarMenu.vue';
import topAdmin from '../components/topAdmin.vue';
export default {
    components: {sidebarMenu, topAdmin}
}
</script>

<style>
</style>