  <template>
  <div>
    <h1>Le titre de la page principale</h1>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

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