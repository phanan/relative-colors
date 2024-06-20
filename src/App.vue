<template>
  <div class="p-10">
    <div class="space-x-1 pl-4 relative z-10">
      <button :class="component === 'basics' && 'active'" @click="component = 'basics'">The Basics</button>
      <button :class="component === 'brightness' && 'active'" @click="component = 'brightness'">
        Brightness & Opacity
      </button>
      <button :class="component === 'inversion' && 'active'" @click="component = 'inversion'">
        Inversion & Complement
      </button>
      <button :class="component === 'contrast' && 'active'" @click="component = 'contrast'">Contrast</button>
      <button :class="component === 'saturation' && 'active'" @click="component = 'saturation'">Saturation</button>
      <button :class="component === 'palettes' && 'active'" @click="component = 'palettes'">Palettes</button>
    </div>

    <div class="p-4 border border-gray-400 -mt-px rounded">
      <div class="unsupported mb-4 bg-red-700 text-white px-4 py-2 rounded-md shadow">
        Your browser does not support relative color syntax.
      </div>

      <div v-if="component" class="mb-4 flex px-4 py-3 border border-fuchsia-300 bg-fuchsia-50 rounded-md shadow justify-between">
        <label class="inline-flex items-center gap-1">
          <span>Pick the origin color:</span>
          <input v-model="origin" type="color" />
          <span class="font-mono ml-2">{{ origin }}</span>
        </label>
        <label class="inline-flex items-center gap-1">
          <input v-model="showLegend" type="checkbox" switch /> Show derived color code
        </label>
      </div>

      <Basics v-if="component === 'basics'" />
      <Brightness v-if="component === 'brightness'" />
      <Inversion v-if="component === 'inversion'" />
      <Contrast v-if="component === 'contrast'" />
      <Saturation v-if="component === 'saturation'" />
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
import Saturation from '@/components/Saturation.vue'

const component = ref<'basics' | 'brightness' | 'inversion' | 'contrast' | 'palettes' | 'saturation' | null>(null)
const origin = ref('#663399')
const showLegend = ref(false)

provide('origin', origin)
provide('show-legend', showLegend)
</script>

<style scoped>
button {
  @apply relative text-gray-700 px-3 py-1 border border-gray-400 rounded-t bg-gray-200 transition;

  &.active {
    @apply bg-white text-gray-950 border-b-white;
  }
}

@supports (color: hsl(from white h s l)) {
  .unsupported {
    display: none;
  }
}
</style>
