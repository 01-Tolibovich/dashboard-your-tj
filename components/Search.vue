<template>
    <div class="search">
        <form action="submit" class="relative"><button type="submit" class="absolute"><img src="@/assets/images/search.svg" alt=""></button><input class="w-full" type="text" placeholder="Поиск публикации"></form>
    </div>
</template>

<script>
export default {
    name: 'search'
}
</script>

<!-- <style>
.search button::before {
    content: "\f002";
}
</style> -->