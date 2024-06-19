<template>
  <div>
    <h3>Inversion & Complement</h3>

    <Instruction>
      To invert a color, convert it to RGB and subtract each channel's value from 1.<br />
      To find the complement, rotate its hue by half the color wheel (180°).
    </Instruction>

    <div class="h-40 flex gap-5">
      <div class="sample brand">
        <LegendText>{{ brand }}</LegendText>
      </div>
      <div class="sample inverted">
        <LegendText>rgb(from {{ brand }} calc(255 - r) calc(255 - g) calc(255 - b))</LegendText>
      </div>
      <div class="sample complement">
        <LegendText>hsl(from {{ brand }} calc(h + 180) s l)</LegendText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import LegendText from '@/components/LegendText.vue'
import Instruction from '@/components/Instruction.vue'

const brand = inject<Ref<string>>('brand')
</script>

<style scoped>
.brand {
  background: v-bind(brand);
}

.inverted {
  background: rgb(from v-bind(brand) calc(255 - r) calc(255 - g) calc(255 - b));
}

.complement {
  background: hsl(from v-bind(brand) calc(h + 180) s l);
}
</style>