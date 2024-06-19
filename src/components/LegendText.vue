<template>
  <span
    class="px-3 py-1 bg-white/90 rounded-full font-mono text-sm shadow shadow-black/20
    transition duration-200 ease-in-out hover:scale-110"
    :class="showLegend ? 'opacity-100' : 'opacity-0'"
  >
    <slot/>
  </span>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'

const showLegend = inject<Ref<boolean>>('show-legend')
</script>
