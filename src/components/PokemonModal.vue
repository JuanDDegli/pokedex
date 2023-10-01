<script setup>
import { ref, watch } from 'vue';

const pokemon = ref(null);
const onClose = () => {
  pokemon.value = null;
};

// Recebendo a propriedade pokemonSelected
const props = defineProps({
  pokemonSelected: Object,
});

watch(
  () => props.pokemonSelected,
  (newVal, oldVal) => {
    pokemon.value = newVal;
  }
);
</script>

<template>
    <div v-if="pokemon" class="pokemon-modal">
      <div class="pokemon-modal-content">
        <button class="close-button" @click="onClose">Fechar</button>
        <div class="pokemon-details">
          <img :src="pokemon?.sprites.front_default" :alt="pokemon?.name" />
          <div class="text-3xl overflow-ellipsis font-semibold whitespace-no-wrap overflow-hidden text-black inline-block  rounded">
          <span class="uppercase">{{ pokemon.name.charAt(0) }}</span>{{ pokemon.name.slice(1) }}
        </div>
          <hr>
          <div class="pokemon-stats">
            <div class="stat">
              <strong>XP:</strong>
              <span>{{ pokemon?.base_experience }}</span>
            </div>
            <div class="stat">
              <strong>Altura:</strong>
              <span>{{ pokemon?.height }}</span>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  width: 100%;
  text-align: center;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
}

.pokemon-details img {
  max-width: 100px;
  margin: 0 auto;
}

.pokemon-details h2 {
  font-size: 24px;
  margin-top: 10px;
}

.pokemon-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.stat {
  text-align: center;
}

.stat strong {
  font-weight: bold;
  display: block;
}

.stat span {
  font-weight: normal;
}
</style>