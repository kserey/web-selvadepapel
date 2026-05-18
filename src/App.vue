<template>
  <div class="d-flex flex-column min-height-screen">
    <MainNavbar />

    <main class="flex-grow-1">
      <router-view />
    </main>

    <MainFooter />
  </div>
</template>

<script setup>
import MainNavbar from './components/MainNavbar.vue'
import MainFooter from './components/MainFooter.vue' // Importamos tu nuevo footer
</script>

<style>
/* Pequeño truco CSS global opcional para que si una página tiene poco contenido, 
   el footer se mantenga empujado al fondo de la pantalla y no flote al medio */
.min-height-screen {
  min-height: 100vh;
}
.flex-grow-1 {
  flex-grow: 1;
}
</style>