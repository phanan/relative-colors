<template>
  <div>
    <h3>Color Palettes</h3>

    <div class="flex gap-5 min-h-[640px]">
      <article class="flex flex-col flex-1">
        <h4 class="text-lg mb-2">
          <a href="https://www.linearity.io/blog/monochromatic-colors/">Monochromatic</a>
          <label class="ml-4 text-base">
            <input type="checkbox" v-model="hueRotation" /> With slight hue rotation
          </label>
        </h4>
        <Instruction>
          Based on a single color, using different shades, tones, and tints of the same hue.
          If hue rotation is enabled, the hue is also slightly rotated.
        </Instruction>
        <div class="grid grid-rows-11 flex-1">
          <div
            v-for="i in 11"
            :key="i"
            :style="{  background: monochromaticBgr(i, hueRotation) }"
            class="flex p-2 justify-center items-center"
          >
            <LegendText>{{ monochromaticBgr(i, hueRotation) }}</LegendText>
          </div>
        </div>
      </article>

      <article class="flex flex-col flex-1">
        <h4 class="text-lg mb-2">
          <a href="https://www.elledecor.com/design-decorate/color/a27793858/analogous-color-scheme/">Analogous</a>
        </h4>
        <Instruction>
          Three colors that are next to each other on the color wheel.
          The colors are similar and create a cohesive look.
        </Instruction>
        <div class="grid grid-rows-3 flex-1">
          <div
            class="flex p-2 justify-center items-center"
            v-for="i in 3"
            :style="{  background: analogousBgr(i) }"
            :key="i"
          >
            <LegendText>{{ analogousBgr(i) }}</LegendText>
          </div>
        </div>
      </article>

      <article class="flex flex-col flex-1">
        <h4 class="text-lg mb-2">
          <a href="https://www.interaction-design.org/literature/article/triadic-color-scheme">Triadic</a>
        </h4>
        <Instruction>
          Three colors that are evenly spaced around the color wheel, forming a balanced triangle.
        </Instruction>
        <div class="grid grid-rows-3 flex-1">
          <div
            v-for="i in 3"
            :key="i"
            :style="{  background: triadicBgr(i) }"
            class="flex p-2 justify-center items-center"
          >
            <LegendText>{{ triadicBgr(i) }}</LegendText>
          </div>
        </div>
      </article>

      <article class="flex flex-col flex-1">
        <h4 class="text-lg mb-2">
          <a href="https://paletton.com/wiki/indexd516.html?title=Tetradic_color_scheme">Tetradic</a>
        </h4>
        <Instruction>
          Four colors evenly divided around the color wheel, creating a vibrant palette with no clear dominant value.
        </Instruction>
        <div class="grid grid-rows-4 flex-1">
          <div
            v-for="i in 4"
            :key="i"
            :style="{  background: tetradicBgr(i) }"
            class="flex p-2 justify-center items-center"
          >
            <LegendText>{{ tetradicBgr(i) }}</LegendText>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'
import Instruction from '@/components/Instruction.vue'
import LegendText from '@/components/LegendText.vue'

const brand = inject<Ref<string>>('brand')
const hueRotation = ref(false)

const monochromaticBgr = (i: number, h = false) => {
  const lightAdjustment = ((i - 6) * .1).toFixed(1)

  return h
    ? `oklch(from ${brand?.value} calc(l + ${lightAdjustment}) c calc(h + ${(i - 6) * 10}))`
    : `oklch(from ${brand?.value} calc(l + ${lightAdjustment}) c h)`
}

const analogousBgr = (i: number) => `oklch(from ${brand?.value} l c calc(h + ${(i - 2) * 45}))`

const triadicBgr = (i: number) => `oklch(from ${brand?.value} l c calc(h + ${(i - 2) * 120}))`

const tetradicBgr = (i: number) => `oklch(from ${brand?.value} l c calc(h + ${(i - 1) * 90}))`
</script>
