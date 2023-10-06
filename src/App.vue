<template>
  <div>
    
<nav class="bg-black shadow-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <router-link to="/" class="flex items-center">
      <img src="https://raw.githubusercontent.com/yurimarcon/pokevite-preparacao/d0d020c76b0aa306f54033bd7325e1fe130287e7/src/assets/icon.svg" class="h-8 mr-3 self-start" alt="Flowobite Log" />
      <span class="self text-2xl font-semibold whitespace-nowrap text-yellow-500">Pokedex</span>
  </router-link>
  <div class="flex md:order-2">
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

      </div>
    </div>
    <button data-collapse-toggle="navbar" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        </div>
      </div>
      <ul class=" absolute right-10 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
        <li>
          <router-link to="/" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-yellow-400 md:hover:bg-transparent md:text-yellow-400 md:p-0 transition  delay-150  hover:-translate-y-1 hover:scale-105 duration-100 ..." aria-current="page">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-yellow-400 md:hover:bg-transparent md:text-yellow-400 md:p-0 transition  delay-150  hover:-translate-y-1 hover:scale-105 duration-100 ...">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>

      <!-- Content -->
      <div class="main">
      <router-view></router-view>
    </div>


</template>

<style>

</style>