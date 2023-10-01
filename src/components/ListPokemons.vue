    <script setup>
    defineProps(['name', 'imageUrl', 'types']);
    import { reactive,  } from 'vue';

const pokemonData = reactive({
  id: null,
  name: null,
  imageUrl: null,
  types: null,
});


const selectPokemon = () => {
  // Emita um evento para notificar o componente pai que um Pokémon foi selecionado.
  // Passe os dados do Pokémon selecionado como argumento.
  pokemonData.id = id;
  pokemonData.name = name;
  pokemonData.imageUrl = imageUrl;
  pokemonData.types = types;
  $emit('pokemon-selected', pokemonData);
};

</script>

<template>
  <div
    class="cursor-pointer my-auto bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 -   gap-2 border-t-0 border-b-0 border-l-0 border-r-8 border-yellow-400 rounded-lg p-2 shadow-xl hover:p-3 transition delay-100 hover:-translate-y-1 hover:scale-105 duration-700"
    @pokemon-selected="selectPokemon"
  >
    <div  class="flex items-start"> <!-- Usamos flex para alinhar os elementos verticalmente -->
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
              class=" type- + type.toLowerCase() +  text-white rounded inline-block  ml-1 border-2 ">

              <span class="uppercase">{{ type.charAt(0) }}</span>{{ type.slice(1) }}
            </div>
        </div>
      </div>
    </div> 
    </div>  
</template>s

<style scoped>

.main-bg{
        background-image: url('../assets/bg-gradient-blue.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }


.type-normal {
    background-color: var(--normal-color);
    background-image: url("../assets/Icons/normal.svg");
}
.type-grass {
    background-color: var(--grass-color);
    background-image: url("../assets/Icons/grass.svg");
}

.type-fire {
    background-color: var(--fire-color);
    background-image: url("../assets/Icons/fire.svg");
}

.type-water {
    background-color: var(--water-color);
    background-image: url("../assets/Icons/water.svg");
}

.type-electric {
    background-color: var(--electric-color);
    background-image: url("../assets/Icons/eletric.svg");
}

.type-ice {
    background-color: var(--ice-color);
    background-image: url("../assets/Icons/ice.svg");
}

.type-ground {
    background-color: var(--ground-color);
    background-image: url("../assets/Icons/ground.svg");
}

.type-flying {
    background-color: var(--flying-color);
    background-image: url("../assets/Icons/flying.svg");
}

.type-poison {
    background-color: var(--poison-color);
    background-image: url("../assets/Icons/poison.svg");
}

.type-fighting {
    background-color: var(--fighting-color);
    background-image: url("../assets/Icons/fighting.svg");
}

.type-psychic {
    background-color: var(--psychic-color);
    background-image: url("../assets/Icons/psychic.svg");
}

.type-dark {
    background-color: var(--dark-color);
    background-image: url("../assets/Icons/dark.svg");
}

.type-rock {
    background-color: var(--rock-color);
    background-image: url("../assets/Icons/rock.svg");
}

.type-bug {
    background-color: var(--bug-color);
    background-image: url("../assets/Icons/bug.svg");
}

.type-ghost {
    background-color: var(--ghost-color);
    background-image: url("../assets/Icons/ghost.svg");
}

.type-steel {
    background-color: var(--steel-color);
    background-image: url("../assets/Icons/steel.svg");
}

.type-dragon {
    background-color: var(--dragon-color);
    background-image: url("../assets/Icons/dragon.svg");
}

.type-fairy {
    background-color: var(--fairy-color);
    background-image: url("../assets/Icons/fairy.svg");
}

    </style>
    