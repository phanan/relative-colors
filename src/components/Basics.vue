<template>
  <div>
    <h3>The Basics</h3>

    <div class="h-40 flex gap-5">
      <div class="r sample">
        <LegendText>rgb(from {{ primary }} r 0 0)</LegendText>
      </div>
      <div class="g sample">
        <LegendText>rgb(from {{ primary }} 0 g 0)</LegendText>
      </div>
      <div class="b sample">
        <LegendText>rgb(from {{ primary }} 0 0 b)</LegendText>
      </div>
      <div class="rg sample">
        <LegendText>rgb(from {{ primary }} r g 0)</LegendText>
      </div>
      <div class="gb sample">
        <LegendText>rgb(from {{ primary }} 0 g b)</LegendText>
      </div>
      <div class="rb sample">
        <LegendText>rgb(from {{ primary }} r 0 b)</LegendText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import LegendText from '@/components/LegendText.vue'

const primary = inject<Ref<string>>('primary')
</script>

<style scoped>
.r {
  background: rgb(from v-bind(primary) r 0 0);
}

.g {
  background: rgb(from v-bind(primary) 0 g 0);
}

.b {
  background: rgb(from v-bind(primary) 0 0 b);
}

.rg {
  background: rgb(from v-bind(primary) r g 0);
}

.gb {
  background: rgb(from v-bind(primary) 0 g b);
}

.rb {
  background: rgb(from v-bind(primary) r 0 b);
}
</style>
