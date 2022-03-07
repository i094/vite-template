<script setup>
defineProps(['title', 'id'])
defineEmits(['remove'])
</script>

<template>
  <li>
    {{ id }} {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>