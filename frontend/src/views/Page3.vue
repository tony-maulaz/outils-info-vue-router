<template>
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page 3 !</p>
    <p>Le message est : {{ msg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();
const msg = ref( route.query.msg );
</script>