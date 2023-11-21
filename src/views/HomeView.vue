<script setup>
import { onMounted, ref, computed, reactive } from 'vue';
import ListPokemons from '../components/ListPokemons.vue';
import PokemonModal from '../components/PokemonModal.vue';

let pokemons = reactive(ref());
let searchPokemonField = ref('');
let pokemonSelected = reactive(ref());

onMounted(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=386&offset=0')
    .then((res) => res.json())
    .then(async (res) => {
      const pokemonData = await Promise.all(
        res.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          const types = data.types.map((type) => type.type.name);
          return {
            name: data.name,
            imageUrl: data.sprites.front_default,
            types, 
            url: pokemon.url,
          };
        })
      );

      pokemons.value = pokemonData;
    });
});

const pokemonsFiltered = computed(() => {
  if (pokemons.value && searchPokemonField.value) {
    return pokemons.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchPokemonField.value.toLowerCase())
    );
  }
  return pokemons.value;
});

const selectPokemon = async (pokemon) => {
  await fetch(pokemon.url)
    .then((res) => res.json())
    .then((res) => (pokemonSelected.value = res));

  console.log(pokemonSelected.value);
};

</script>


<template>
  <main class="bg-custom-blue-100 pl-32 pr-32 pt-32 pb-32  main-bg">
    <div class="mb-3 ml-2 relative">
      <label for="searchPokemonField" class="hidden">Pesquisar...</label>
      <div class="max-w-md relative rounded-full bg-custom-blue-100 text-yellow-400 border border-black p-2 shadow-2xl">
        <input
          type="text"
          v-model="searchPokemonField"
          class="w-full bg-custom-blue-100 text-yellow-400 focus:outline-none placeholder-yellow-400 pl-8"
          id="searchPokemonField"
          placeholder="Pesquisar Pokemon..."
        />
        <!-- Coloque o ícone dentro do input com posição absoluta -->
        <svg
          class="w-4 h-4 text-yellow-400 mt-1  absolute left-3 top-2 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          @click="performSearch"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </div>

            <div class=" grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-2 ">
                <ListPokemons
                v-for="pokemon in pokemonsFiltered"
                :key="pokemon.name"
                :name="pokemon.name"
                :imageUrl="pokemon.imageUrl"
                :types="pokemon.types"
                @click="selectPokemon(pokemon)"
            />
            </div>
            <PokemonModal :pokemonSelected="pokemonSelected" @close="pokemonSelected = null" />

        </main>
        </template>

        <style scoped>
        .main-bg {
    background: linear-gradient(
        to bottom right,
        rgba(10, 10, 10, 1),
        rgba(12, 39, 63, 1)
        )
        no-repeat center center fixed !important;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover !important;
    background-position: center;
    min-height: 100vh;
    }
        </style>