<template>
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page 2 !</p>
    <p>Le message est : {{ msg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const msg = route.params.msg ? ref(route.params.msg) : ref("Pas de params");
</script>