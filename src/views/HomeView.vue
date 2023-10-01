<script setup>
import { onMounted, ref, computed, reactive } from 'vue';
import CardPokemonSelected from '../components/CardPokemonSelected.vue';
import ListPokemons from '../components/ListPokemons.vue';

let pokemons = reactive(ref());
let searchPokemonField = ref('');
let pokemonSelected = reactive(ref());

onMounted(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then((res) => res.json())
    .then(async (res) => {
      const pokemonData = await Promise.all(
        res.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          const types = data.types.map((type) => type.type.name); // Certifique-se de que está pegando os tipos corretamente aqui.
          return {
            name: data.name,
            imageUrl: data.sprites.front_default,
            types, // Atribua corretamente os tipos ao objeto Pokémon.
            url: pokemon.url, // Adicione a URL do Pokémon ao objeto.
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

          <CardPokemonSelected
          :name="pokemonSelected?.name"
          :xp="pokemonSelected?.base_experience"
          :height="pokemonSelected?.height"
          :img="pokemonSelected?.sprites.front_default"
          />

            <div class="mb-3 ml-3 relative">
                <label for="searchPokemonField" class="hidden">Pesquisar...</label>
                    <input
                        type="text"
                        v-model="searchPokemonField"
                        class="bg-custom-blue-100 text-yellow-400 border border-black p-2 shadow-2xl rounded-full focus:outline-none placeholder-yellow-400"
                        id="searchPokemonField"
                        placeholder="Pikachu..."
                    >
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