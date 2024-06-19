<template>
  <div>
    <h3>The Basics</h3>

    <div class="h-40 flex gap-5">
      <div class="r sample">
        <LegendText>rgb(from {{ brand }} r 0 0)</LegendText>
      </div>
      <div class="g sample">
        <LegendText>rgb(from {{ brand }} 0 g 0)</LegendText>
      </div>
      <div class="b sample">
        <LegendText>rgb(from {{ brand }} 0 0 b)</LegendText>
      </div>
      <div class="rg sample">
        <LegendText>rgb(from {{ brand }} r g 0)</LegendText>
      </div>
      <div class="gb sample">
        <LegendText>rgb(from {{ brand }} 0 g b)</LegendText>
      </div>
      <div class="rb sample">
        <LegendText>rgb(from {{ brand }} r 0 b)</LegendText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import LegendText from '@/components/LegendText.vue'

const brand = inject<Ref<string>>('brand')
</script>

<style scoped>
.r {
  background: rgb(from v-bind(brand) r 0 0);
}

.g {
  background: rgb(from v-bind(brand) 0 g 0);
}

.b {
  background: rgb(from v-bind(brand) 0 0 b);
}

.rg {
  background: rgb(from v-bind(brand) r g 0);
}

.gb {
  background: rgb(from v-bind(brand) 0 g b);
}

.rb {
  background: rgb(from v-bind(brand) r 0 b);
}
</style>