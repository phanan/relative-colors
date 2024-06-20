<template>
  <div>
    <h3>The Basics</h3>

    <Intro class="intro">
      <p>
        The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors">CSS colors module</a>
        defines a <em>relative color</em> syntax, which allows a CSS color to be defined relative to another color.
        For example, the instruction <code>hsl(from #f00 h 80% cal(l * 1.5))</code>:
      </p>
      <ol class="list-decimal ml-8 my-2">
        <li>takes <code>#f00</code> as the origin color</li>
        <li>converts it to an equivalent HSL color (<code>hsl(0 100% 50%)</code>)</li>
        <li>defines a new HSL color with
          <code>h</code> the same value of the origin color,
          <code>s</code> hard-set to <code>80%</code>,
          and <code>l</code> set to be 50% lighter than that of the origin color using <code>calc()</code>
        </li>
      </ol>
      <p>
        This is a powerful feature that enables easy creation of complements to existing colors — such as lighter,
        darker, saturated, semi-transparent, or inverted variants — enabling more effective color palette creation.
      </p>
      <p>The colors below are examples derived from the origin color.</p>
    </Intro>

    <div class="h-40 flex gap-5">
      <div class="r sample">
        <LegendText>rgb(from {{ origin }} r 0 0)</LegendText>
      </div>
      <div class="g sample">
        <LegendText>rgb(from {{ origin }} 0 g 0)</LegendText>
      </div>
      <div class="b sample">
        <LegendText>rgb(from {{ origin }} 0 0 b)</LegendText>
      </div>
      <div class="rg sample">
        <LegendText>rgb(from {{ origin }} r g 0)</LegendText>
      </div>
      <div class="gb sample">
        <LegendText>rgb(from {{ origin }} 0 g b)</LegendText>
      </div>
      <div class="rb sample">
        <LegendText>rgb(from {{ origin }} r 0 b)</LegendText>
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
.intro code {
  @apply text-pink-700 bg-amber-50;
}

.r {
  background: rgb(from v-bind(origin) r 0 0);
}

.g {
  background: rgb(from v-bind(origin) 0 g 0);
}

.b {
  background: rgb(from v-bind(origin) 0 0 b);
}

.rg {
  background: rgb(from v-bind(origin) r g 0);
}

.gb {
  background: rgb(from v-bind(origin) 0 g b);
}

.rb {
  background: rgb(from v-bind(origin) r 0 b);
}
</style>
