<template>
    <div class="publication-posts">
        <div>
            <small class="text-[#4B5563] text-sm mb-2">{{ publication_posts.date }}</small>
            <p class="text-black ">{{ publication_posts.paragrph }}</p>
        </div>
    </div>
</template>

<script>
export  default {
    name: 'publication-posts',
    props: {
        publication_posts: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>