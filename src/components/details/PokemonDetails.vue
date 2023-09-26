<template>
  <div>
    <div class="pokemon-details">
      <h2>{{ pokemon.name }}</h2>
      <img :src="pokemon.imageUrl" :alt="pokemon.name" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
};
</script>

<style>
.pokemon-details {
  text-align: center;
  margin: 20px;
}
</style>