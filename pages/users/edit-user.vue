<template>
    <div>
        <HeadGrid>
            <headTitle head_title="Редактирование пользователей"/>
        </HeadGrid>
    </div>
</template>

<script>
import HeadGrid from '@/components/Header/HeadGrid.vue';
import headTitle from '@/components/Header/headTitle.vue';
export default {
    name: 'edit-user',
    components: {HeadGrid, headTitle}

}
</script>