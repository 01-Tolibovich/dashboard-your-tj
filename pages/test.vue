<template>
    <div>
        <HeadGrid>
            <h1 class=" bg-slate-400 text-2xl p-5 text-slate-800">Заголовак 1</h1>
            <h1 class=" bg-slate-400 text-2xl p-5 text-slate-800">Заголовок 2</h1>
        </HeadGrid>
    </div>
</template>

<script>
import HeadGrid from '@/components/Header/HeadGrid.vue';
export default {
    name: 'test',
    components: {HeadGrid}
}
</script>