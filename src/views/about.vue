<script setup>
import { inject } from 'vue'
import { injectionKey } from '@/keys.js'

const injected = inject(injectionKey, () => new ExpensiveClass())
const { count, updateCount } = injected
</script>

<template>
  about {{count}}
  <button @click="updateCount">update</button>
</template>

<style scoped>

</style>
