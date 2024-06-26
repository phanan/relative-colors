<template>
  <div>
    <h3>Brightness &amp; Opacity</h3>

    <Intro>
      To lighten or darken a color, adjust the lightness (L) channel. These examples use the
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl">HSL</a> color format.<br />
      To make a color more or less transparent, adjust the alpha (A) channel.
    </Intro>

    <div class="flex gap-5 h-40">
      <div class="sample lighten">
        <LegendText>hsl(from {{ origin }} h s calc(l * 1.25))</LegendText>
      </div>
      <div class="sample darken">
        <LegendText>hsl(from {{ origin }} h s calc(l * .75))</LegendText>
      </div>
      <div class="sample see-through">
        <LegendText>rgba(from {{ origin }} r g b / 0.75)</LegendText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import LegendText from '@/components/LegendText.vue'
import Intro from '@/components/Intro.vue'

const origin = inject<string>('origin')
</script>

<style scoped>
.lighten {
  background: hsl(from v-bind(origin) h s calc(l * 1.25));
}

.darken {
  background: hsl(from v-bind(origin) h s calc(l * .5));
}

.see-through {
  background: rgba(from v-bind(origin) r g b / 0.75);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cpath fill='%23002166' fill-opacity='0.82' d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 0 1-3.9 3.9v6.27a3 3 0 1 1-2 0V31.9a5 5 0 0 1-3.9-3.9h-6.27a3 3 0 1 1 0-2h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 1 1 2 0v6.27a5 5 0 0 1 3.9 3.9h6.27a3 3 0 1 1 0 2H31.9z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
