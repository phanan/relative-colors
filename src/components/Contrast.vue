<template>
  <div>
    <h3>Contrast</h3>

    <Instruction>
      As a method of achieving accessible color contrast ratios, modify the lightness (L) channel from
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch">LCH</a> and
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch">OKLCH</a>.
      Depending if you are targeting low, medium or high contrast, the L* delta is around ~40, ~50, or ~60.
    </Instruction>

    <div class="h-40 flex gap-5">
      <div class="sample brand" v-if="isDark">
        <div class="space-y-4 text-center">
          <LegendText>oklch(from {{ brand }} calc(l + .6) c h)</LegendText>
          <p class="from-darker">
            This text's color is derived from the brand color by INCREASING the lightness by 60%.
          </p>
        </div>
      </div>
      <div class="sample brand" v-else>
        <div class="space-y-4 text-center">
          <LegendText>oklch(from {{ brand }} calc(l - .6) c h)</LegendText>
          <p class="from-lighter">
            This text's color is derived from the brand color by DECREASING the lightness by 60%.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { useColor } from '@/composables/useColor'

import LegendText from '@/components/LegendText.vue'
import Instruction from '@/components/Instruction.vue'

const brand = inject<Ref<string>>('brand')!
const { isDark } = useColor(brand)
</script>

<style scoped>
.brand {
  background: v-bind(brand);
}

.from-darker {
  color: oklch(from v-bind(brand) calc(l + .6) c h);
}

.from-lighter {
  color: oklch(from v-bind(brand) calc(l - .6) c h);
}
</style>
