    <script setup>
    defineProps({ name: String, imageUrl: String, types: Array,  });
    </script>

<template>
  <div class="cursor-pointer my-auto bg-gradient-to-r from-blue-950 via-slate-900  to-slate-900 -   gap-2 border-t-0 border-b-0 border-l-0 border-r-8 border-yellow-400 rounded-lg p-2 shadow-xl hover:p-3 transition delay-100 hover:-translate-y-1 hover:scale-105 duration-700 ...">
    <div class="flex items-start"> <!-- Usamos flex para alinhar os elementos verticalmente -->
      <div class="inline-block  text-gray-200 hover:p-5  rounded-full transition delay-150 hover:-translate-y-1 hover:scale-105 duration-700 ...">
        <img :src="imageUrl" :alt="name" class="pl-0" />
      </div>
      <div class="ml-2"> <!-- Adicionamos margem à esquerda para separar a imagem do conteúdo -->
        <div class="text-3xl overflow-ellipsis font-semibold whitespace-no-wrap overflow-hidden text-white inline-block  rounded">
          <span class="uppercase">{{ name.charAt(0) }}</span>{{ name.slice(1) }}
        </div>
        <div>
          <div
            v-for="type in types"
            :key="type"
            class= "text-yellow-400 rounded inline-block ml-1">
            <span class="uppercase">{{ type.charAt(0) }}</span>{{ type.slice(1) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

    <style scoped>

.main-bg{
        background-image: url('../assets/bg-gradient-blue.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
    </style>
    