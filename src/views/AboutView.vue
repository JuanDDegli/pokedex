<script setup>

</script>

<template>
    <main class="bg-custom-blue-100 pl-32 pr-32 pt-32 pb-32 main-bg">
      <div class="bg-white border-2 rounded w-100% h-100% p-6">
        <h1 class="text-3xl font-semibold">Sobre o Projeto</h1>
        <br>
        <p>
          Projeto de Pokedex com 386 Pokémons! Clique nos pokemons para ver os detalhes.
        </p>
  
        <h2 class="text-2xl font-semibold mt-4">Tecnologias Utilizadas</h2>
        <ul>
            <br>
          <li>PokéAPI: Uma API para buscar as informações dos Pokémons e outros dados relacionados.</li>
          <br>
          <li>Vue.js: Framework JavaScript para construção de interfaces de usuário e aplicações de página única.</li>
          <br>
          <li>Vite:  É um construtor de projetos e ferramenta de desenvolvimento para aplicativos da web, ele se concentra em fornecer um ambiente de desenvolvimento extremamente rápido e eficiente.</li>
          <br>
          <li>Tailwind.CSS: É um framework de CSS que simplifica o processo de criação de interfaces de usuário para aplicativos da web.</li>
          <br>
        </ul>
  
        <h2 class="text-2xl font-semibold mt-4">Ideias para Melhorias Futuras</h2>
        <ul>
            <br>
          <li>Adicionar Favoritos: Marque seus Pokémons favoritos e salve-os no Local Storage, Onde serão exibidos numa nova página para favoritos.</li>
          <br>
          <li>Pesquisa: Busque Pokémons específicos pelo ID.</li>
          <br>
          <li>Mais Detalhes dos Pokémons: Mais detalhes individuais dos Pokémons, como cadeias de evolução, moves ou raridade. </li>
          <br>
        </ul>
      </div>
    </main>
  </template>
  
  <style scoped>
  .main-bg {
    background: linear-gradient(
      to bottom right,
      rgba(10, 10, 10, 1),
      rgba(12, 39, 63, 1)
    ) no-repeat center center fixed !important;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover !important;
    background-position: center;
    min-height: 100vh;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  p {
    font-size: 1.2rem;
  }
  
  h1, h2 {
    margin-top: 20px;
  }
  
  h2 {
    margin-bottom: 10px;
  }
  </style>
  