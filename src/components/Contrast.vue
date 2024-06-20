<template>
  <div>
    <h3>Contrast</h3>

    <Intro>
      As a method of achieving accessible color contrast ratios, modify the lightness (L) channel from
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch">LCH</a> and
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch">OKLCH</a>.
      Depending if you are targeting low, medium or high contrast, the L* delta is around ~40, ~50, or ~60.
    </Intro>

    <div class="h-40 flex gap-5">
      <div v-if="isDark" class="sample origin">
        <div class="space-y-4 text-center">
          <p class="from-darker">
            This text's color is derived from the origin color by INCREASING the lightness by 60%.
          </p>
          <LegendText>oklch(from {{ origin }} calc(l + .6) c h)</LegendText>
        </div>
      </div>
      <div v-else class="sample origin">
        <div class="space-y-4 text-center">
          <p class="from-lighter">
            This text's color is derived from the origin color by DECREASING the lightness by 60%.
          </p>
          <LegendText>oklch(from {{ origin }} calc(l - .6) c h)</LegendText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { useColor } from '@/composables/useColor'

import LegendText from '@/components/LegendText.vue'
import Intro from '@/components/Intro.vue'

const origin = inject<Ref<string>>('origin')!
const { isDark } = useColor(origin)
</script>

<style scoped>
.origin {
  background: v-bind(origin);
}

.from-darker {
  color: oklch(from v-bind(origin) calc(l + .6) c h);
}

.from-lighter {
  color: oklch(from v-bind(origin) calc(l - .6) c h);
}
</style>
