<script setup>
import { defineProps } from 'vue';

defineProps({ name: String, imageUrl: String });
</script>

<template>
    <div class="p-2 col-span-1">
    <div class="bg-gray-500 rounded pt-2 pb-2 m-2 mt-5 p-2 shadow-lg">
        <p>{{ name }}</p>
        <img :src="imageUrl" :alt="name" />
    </div>
    </div>
</template>

<style>

</style>
</style>