<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { provide, ref } from 'vue'
import { injectionKey } from './keys.js'

const count = ref(0)
function updateCount() {
  count.value = count.value ? 0 : 1
}
provide(injectionKey, { /*
  要供给的数据 */
  count,
  updateCount
});
</script>

<template>
  <router-view />
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
