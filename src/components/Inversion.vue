<template>
  <div>
    <h3>Inversion & Complement</h3>

    <Intro>
      To invert a color, convert it to RGB and subtract each channel's value from 1.<br />
      To find the complement, rotate its hue by half the color wheel (180°).
    </Intro>

    <div class="h-40 flex gap-5">
      <div class="sample origin">
        <LegendText>{{ origin }}</LegendText>
      </div>
      <div class="sample inverted">
        <LegendText>rgb(from {{ origin }} calc(255 - r) calc(255 - g) calc(255 - b))</LegendText>
      </div>
      <div class="sample complement">
        <LegendText>hsl(from {{ origin }} calc(h + 180) s l)</LegendText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import LegendText from '@/components/LegendText.vue'
import Intro from '@/components/Intro.vue'

const origin = inject<Ref<string>>('origin')
</script>

<style scoped>
.origin {
  background: v-bind(origin);
}

.inverted {
  background: rgb(from v-bind(origin) calc(255 - r) calc(255 - g) calc(255 - b));
}

.complement {
  background: hsl(from v-bind(origin) calc(h + 180) s l);
}
</style>
