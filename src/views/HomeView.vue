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
        <main class="bg-custom-blue-100 pl-32 pr-32 pt-32 pb-32  main-bg">
            <div class=" grid grid-cols-3 gap-4 p-2 ">
            <ListPokemons
                v-for="pokemon in pokemons"
                :key="pokemon.name"
                :name="pokemon.name"
                :imageUrl="pokemon.imageUrl"
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