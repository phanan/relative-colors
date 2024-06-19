<template>
  <div>
    <h3>Saturation</h3>

    <label class="flex items-center gap-3 mb-4">
      Saturation value
      <input v-model="saturation" max="2.4" min="0" step="0.1" type="range" />
      <span class="text-xs font-mono border border-amber-500 px-2 py-0.5 bg-amber-200 text-amber-900 rounded-md">
        {{ saturation }}
      </span>
    </label>

    <div class="h-40 flex gap-5">
      <div class="sample saturated">
        <LegendText>{{ background }}</LegendText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref, ref } from 'vue'

import LegendText from '@/components/LegendText.vue'

const saturation = ref(1)
const primary = inject<Ref<string>>('primary')

const background = computed(() => `hsl(from ${primary?.value} h calc(s * ${saturation.value}) l)`)
</script>

<style scoped>
.saturated {
  background: v-bind(background);
}
</style>
