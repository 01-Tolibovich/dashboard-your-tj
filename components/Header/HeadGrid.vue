<template>
    <div class="head-title mt-6 mb-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-between items-center">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'head-grid'
}
</script>