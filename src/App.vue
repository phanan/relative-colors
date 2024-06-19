<template>
  <div class="h-full w-full p-10">
    <div class="mb-4 flex gap-4">
      <label class="inline-flex items-center gap-1">
        <input type="color" v-model="brand" />
        <span class="font-mono ml-2">{{ brand }}</span>
      </label>
      <label class="inline-flex items-center gap-1">
        <input type="checkbox" v-model="showLegend" /> Legends pls
      </label>
    </div>

    <div
      class="space-x-1 pl-4 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-400"
    >
      <button @click="component = 'basics'" :class="component === 'basics' && 'active'">The Basics</button>
      <button @click="component = 'brightness'" :class="component === 'brightness' && 'active'">
        Brightness & Opacity
      </button>
      <button @click="component = 'inversion'" :class="component === 'inversion' && 'active'">
        Inversion & Complement
      </button>
      <button @click="component = 'contrast'" :class="component === 'contrast' && 'active'">Contrast</button>
      <button @click="component = 'palettes'" :class="component === 'palettes' && 'active'">Palettes</button>
    </div>

    <div class="p-4 border border-t-0 border-gray-400" v-if="component">
      <Basics v-if="component === 'basics'" />
      <Brightness v-if="component === 'brightness'" />
      <Inversion v-if="component === 'inversion'" />
      <Contrast v-if="component === 'contrast'" />
      <Palettes v-if="component === 'palettes'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

import Basics from '@/components/Basics.vue'
import Brightness from '@/components/Brightness.vue'
import Inversion from '@/components/Inversion.vue'
import Contrast from '@/components/Contrast.vue'
import Palettes from '@/components/Palettes.vue'

const component = ref<'basics' | 'brightness' | 'inversion' | 'contrast' | 'palettes' | null>(null)
const brand = ref('#ffffff')
const showLegend = ref(false)

provide('brand', brand)
provide('show-legend', showLegend)
</script>

<style scoped>
:root {
  --brand-color: v-bind(brand);
}

button {
  @apply relative text-gray-700 px-3 py-1 border border-b-transparent border-gray-400 rounded-t bg-gray-200 transition;

  &.active {
    @apply bg-white text-gray-950 border-b-white z-10;
  }
}
</style>
