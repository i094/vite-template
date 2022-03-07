<script lang="ts">

import { defineComponent, ref, defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    required: false,
    default: 'Petter'
  },
  userInfo: Object,
  tags: Array
});

export default defineComponent({
  setup () {
    const msg = ref<string>('Hello World!');

    return {
      msg
    }
  }
})

</script>

<template>
  {{msg}}
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
