<script setup>
import { onMounted, reactive, ref } from 'vue';
import ListPokemons from '../components/ListPokemons.vue';

let pokemons = reactive(ref([]));

    onMounted(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=386&offset=0")
        .then((res) => res.json())
        .then(async (res) => {
        const pokemonData = await Promise.all(res.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return {
            name: data.name,
            imageUrl: data.sprites.front_default,
            };
        }));
        pokemons.value = pokemonData;
        });
});
</script>

    <template>
    <main class="bg-gray-300 pl-32 pr-32 pt-32 pb-32 border-solid border-2 border-red-600">
        <div class="container rounded-xl bg-white grid grid-cols-3 gap-4 p-5 border-solid border-2 border-yellow-600 ">
        <ListPokemons
            v-for="pokemon in pokemons"
            :key="pokemon.name"
            :name="pokemon.name"
            :imageUrl="pokemon.imageUrl"
        />
        </div>
    </main>
    </template>
