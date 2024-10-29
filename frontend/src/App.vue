<template>
  <div>
    <h1>Le titre de la page principale</h1>
    <nav>
      <router-link to="/">Page 1</router-link>
      <router-link to="/page2/Bonjour">Page 2</router-link>
      <router-link to="/page3/Hello">Page 3</router-link>
    </nav>
    <router-view class="router"/>
    <button @click="changePage(2)">Page 2</button>
    <button @click="changePage(3)">Page 3</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function changePage(page) {
  router.push(`/page${page}/Un message`)
}
</script>

<style>

.router{
  border: 1px solid black;
  padding: 10px;
  background-color: lightcyan;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}

nav a.router-link-active {
  font-weight: bold;
  color: green;
}
</style>