<script setup>
const pokemon = defineProps(["name", "xp", "height", "img"])

</script >


<template>
  <div class="bg-white w-72 mx-auto mt-12 p-4 rounded-lg shadow-md text-center">
    <img
      :src="pokemon.img" class="mx-auto" alt=""/>
    <div class="card-body">
      <h5 class="text-xl font-semibold">{{pokemon.name}}</h5>
      <hr>
      <div class="row">
        <section class="col"> 
          <strong>Altura:</strong>
          <span>{{pokemon.height}}</span>
        </section>
        
        <section class="col"> 
          <strong>XP:</strong>
          <span>{{pokemon.xp}}</span>
        </section>
      </div>
      <p class="text-yellow-500">Electric</p>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  margin-top: -20px; /* Para centralizar o conteúdo verticalmente */
}
</style>