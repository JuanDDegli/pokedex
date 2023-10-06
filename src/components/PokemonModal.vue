<script setup>
import { ref, watch, computed } from 'vue';

const pokemon = ref(null);
const isStatusDrawerOpen = ref(false);
const onClose = () => {
  pokemon.value = null;
};

const toggleStatusDrawer = () => {
  isStatusDrawerOpen.value = !isStatusDrawerOpen.value;
};

const isShiny = ref(false);

const toggleShiny = () => {
  isShiny.value = !isShiny.value;
};

// Recebendo a propriedade pokemonSelected
const props = defineProps({
  pokemonSelected: Object,
});

watch(() => props.pokemonSelected, (newVal) => {
  pokemon.value = newVal;
});

const getStatColor = (statName) => {
  switch (statName.toLowerCase()) {
    default:
      return 'bg-yellow-500';
  }
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

    default:
      return 'bg-gray-500';
  }
};
</script>

<template>
  <div v-if="pokemon" class="pokemon-modal transition-all delay-100">
    <div class="pokemon-card bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 p-6 rounded-lg shadow-lg md:max-w-3xl" style="max-height: 90vh; overflow-y: auto;">
      <button class="close-button" @click="onClose">
        <h1 class="text-white"> ✖️ </h1>
      </button>
      <div class="pokemon-details flex flex-col md:flex-row items-center  overflow-y">
        <div class="relative">
          <img :src="isShiny ? pokemon?.sprites.front_shiny : pokemon?.sprites.front_default" :alt="pokemon?.name" class="w-96 md:w-80 inline-block mx-auto  rounded-lg shadow-md" />
          <button @click="toggleShiny" class="shiny-toggle-button text-black bg-custom-gray-300 block mx-auto mt-4 text white md:mt-2" :class="{ 'shiny-active': isShiny }">
            <h1 class="ss" > ✨ </h1>
          </button>
        </div>  
        <div class="mt-4 w-full md:w-2/3 ml-6">
          <h2 class="text-6xl  text-white overflow-ellipsis font-semibold whitespace-no-wrap inline-block overflow-hidden ml-0 mt-0">
  <span class=" text-5xl ml-8 " style="text-transform: capitalize;">{{ pokemon.name }}</span>
</h2>

          <h2 class="text-3xl pl-4 text-white overflow-ellipsis font-semibold whitespace-no-wrap inline-block overflow-hidden ml-4 mt-0">
            <span class="uppercase mt-0">#{{ pokemon.id }}</span>
          </h2>
          <hr class="my-2 border-t ml-6 ">
          <div class="mt-4 ml-6">
            <div class="flex flex-wrap ml-6">
              <div v-for="(type, index) in pokemon?.types" :key="index" class="type-chip mb-2  mr-2  rounded-xl p-2 text-white" :class="getTypeBackgroundColor(type.type.name)">
                {{ type.type.name }}
              </div>
            </div>
          </div>
          <div class="mt-4 ml-10">
            <h2 class="text-white">Altura e Peso:</h2>
            <div class="flex flex-wrap ml-2">
              <div class="stat bg-custom-gray-300 p-3 mb-3  rounded mr-2 shadow-white">
                <span class="text-black">{{ (pokemon?.height * 100 / 10).toFixed(0) }} cm</span>
              </div>
              <div class="stat bg-custom-gray-300 p-3 mb-3 rounded shadow-white ">
                <span class="text-black">{{ (pokemon?.weight / 10).toFixed(0) }} kg</span>
              </div>
            </div>
          </div>
          <div class="mt-4 ml-10">
  <h2 class="text-white">Habilidades:</h2>
  <div v-for="(ability, index) in pokemon?.abilities" :key="index" class="inline-block bg-custom-gray-300 p-3 rounded  ml-2 mt-4 mb-8 shadow-white">
    <span class="text-black ">{{ ability.ability.name }}</span>
  </div>
</div>
        </div>
      </div>
      <hr />
      <div class="pt-6 text-black">
        <button @click="toggleStatusDrawer" class="status-toggle-button text-black bg-yellow-400 hover:bg-yellow-600">
          {{ isStatusDrawerOpen ? 'Close Stats' : 'Open Stats' }}
        </button>
      </div>
      <!-- Conteúdo de Stats -->
      <div v-if="isStatusDrawerOpen" class="status-content">
  <div v-for="(stat, index) in pokemon?.stats" :key="index" class="stat items-center mb-4 pl-4 pr-4">
    <span class="uppercase text-white">{{ stat.stat.name }}:</span>
    <div class="flex items-center justify-between mt-2">
      <span class="text-white">{{ stat.base_stat }}</span>
      <div class="bg-gray-300 rounded-full h-2.0 ml-2 mr-2 flex-grow">
        <div :style="'width: ' + (stat.base_stat / 1.5) + '%' " :class="getStatColor(stat.stat.name) + ' h-2 rounded-full'"></div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>
<style scoped>
.pokemon-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-card {
  width: 100%;
  max-width: 600px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
}

.close-button img {
  width: 20px;
  height: 20px;
}

.pokemon-details img {
  max-width: 150px;
  margin: 0 auto;
}

.pokemon-details h2 {
  font-size: 28px;
  margin-top: 15px;
  font-weight: bold;
}

.stat {
  text-align: center;
  margin-top: 20px;
}

.stat strong {
  font-weight: bold;
  display: block;
}

.stat span {
  font-weight: normal;
}

.stat .uppercase {
  text-transform: capitalize;
}

.status-toggle-button {
  margin-top: 10px;
  cursor: pointer;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  width: 100%;
}

.status-content {
  margin-top: 20px;
}

.type-chip {
  font-size: 18px;
}


.shiny-toggle-button {
  margin-top: 10px;
  cursor: pointer;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  width: 100%;
  transition: background-color 0.3s ease;
}

.shiny-toggle-button.shiny-active {
  background-color: #ff9900; /* Cor de destaque para a versão shiny */
  color: white; /* Cor de texto para a versão shiny */
}

.pokemon-card {
  /* ... Outros estilos ... */
  overflow-y: auto; /* Ativar a barra de rolagem vertical quando necessário */

  /* Defina as cores desejadas para a barra de rolagem */
  scrollbar-width: thin; /* Estilo fino da barra de rolagem (suportado em alguns navegadores) */
  scrollbar-color: #333 #888; /* Cor da barra de rolagem e cor do fundo */

  /* Para navegadores que não suportam o estilo personalizado da barra de rolagem */
  /* Você pode adicionar estilos de fallback aqui */
}

/* Estilizando a alça da barra de rolagem */
.pokemon-card::-webkit-scrollbar-thumb {
  background-color: #888; /* Cor da alça da barra de rolagem */
  border-radius: 10px; /* Raio de borda da alça */
}

/* Estilizando o fundo da barra de rolagem */
.pokemon-card::-webkit-scrollbar-track {
  background-color: #333; /* Cor de fundo da barra de rolagem */
}
</style>