    <script setup>
    import { defineProps } from 'vue';

    const { name, imageUrl, types } = defineProps(['name', 'imageUrl', 'types']);

    const selectPokemon = () => {
    const pokemonData = {
        id: null,
        name,
        imageUrl,
        types,
    };
    $emit('pokemon-selected', pokemonData);
    };


    const getTypeBackgroundColor = (type) => {
  switch (type.toLowerCase()) {
    case 'fire':
      return 'bg-orange-500';
    case 'water':
      return 'bg-blue-500';
    case 'grass':
      return 'bg-green-600';
    case 'bug':
    return 'bg-custom-green-500';
    case 'psychic':
    return 'bg-pink-400';
    case 'fighting':
    return 'bg-red-700';
    case 'poison':
    return 'bg-custom-pink-100';
    case 'normal':
    return 'bg-custom-gray-50';
    case 'flying':
    return 'bg-custom-blue-50';
    case 'fairy':
    return 'bg-custom-pink-50';
    case 'steel':
    return 'bg-custom-gray-700';
    case 'ground':
    return 'bg-custom-brown-100';
    case 'ice':
    return 'bg-custom-blue-200';
    case 'dark':
    return 'bg-custom-gray-600';
    case 'ghost':
    return 'bg-custom-purple-50';
    case 'electric':
    return 'bg-yellow-400';
    case 'dragon':
    return 'bg-custom-yellow-50';
    case 'rock':
    return 'bg-custom-brown-200';
        };
    };
    </script>

<template>
    <div
      class="cursor-pointer my-auto bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 gap-2 border-t-0 border-b-0 border-l-0 border-r-8 border-yellow-400 rounded-lg p-2 shadow-xl hover: transition delay-100 hover:-translate-y-1 hover:scale-105 duration-700"
      @pokemon-selected="selectPokemon"
    >
      <div class="flex items-start">
        <div class="text-gray-200 hover:rounded-full transition delay-250 hover:-translate-y-1 hover:scale-100">
        <img :src="imageUrl" :alt="name" class="w-16 h-16 md:w-24 md:h-24" /> <!-- Tamanhos ajustados -->
      </div>
        <div class="ml-2">
          <div class="text-3xl overflow-ellipsis font-semibold whitespace-no-wrap overflow-hidden text-white inline-block rounded">
            <span class="uppercase">{{ name.charAt(0) }}</span>{{ name.slice(1) }}
          </div>
          <div>
            <div class="mt-2"> <!-- Adicione espaço vertical entre os chips de tipo -->
              <div
                v-for="type in types"
                :key="type"
                class="type-chip inline-flex items-center justify-center rounded-2xl mr-2 mb-2 px-2 py-1" 
                :class="getTypeBackgroundColor(type.toLowerCase())"
              >
                <span class="uppercase text-center">{{ type.charAt(0) }}</span>{{ type.slice(1) }}
              </div>
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

        
.type-chip {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.type-chip:hover {
  background-color: transparent;
}
        </style>