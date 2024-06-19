<template>
  <div class="flex p-2 justify-center items-center">
    <LegendText>{{ background }}</LegendText>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref, toRefs } from 'vue'

import LegendText from '@/components/LegendText.vue'

const props = defineProps<{
  palette: 'monochromatic' | 'analogous' | 'triadic' | 'tetradic'
  hueRotation?: boolean
  distance: number
}>()

const primary = inject<Ref<string>>('primary')

const { palette, hueRotation, distance } = toRefs(props)

const background = computed(() => {
  let color

  switch (palette.value) {
    case 'analogous':
      color = `oklch(from ${primary!.value} l c calc(h + ${distance.value * 45}))`
      break
    case 'triadic':
      color = `oklch(from ${primary!.value} l c calc(h + ${distance.value * 120}))`
      break
    case 'tetradic':
      color = `oklch(from ${primary!.value} l c calc(h + ${(distance.value - 1) * 90}))`
      break
    default:
      const lightAdjustment = (distance.value * .1).toFixed(1)
      color = hueRotation.value
        ? `oklch(from ${primary!.value} calc(l + ${lightAdjustment}) c calc(h + ${distance.value * 10}))`
        : `oklch(from ${primary!.value} calc(l + ${lightAdjustment}) c h)`
      break
  }

  // Remove unnecessary artifacts like "+ -" or "+ 0" from `calc` functions
  return color.replace(/\+ -/g, '- ')
    .replace(/calc\(([hlc]) \+ 0(\.0)?\)/g, '$1')
})
</script>

<style scoped>
div {
  background: v-bind(background);
}
</style>
