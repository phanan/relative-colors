import type { Ref } from 'vue'
import { computed } from 'vue'

export const useColor = (color: Ref<string>) => {
  const isDark = computed(() => {
    let r, g, b, hsp, c;
    c = +("0x" + color.value.slice(1).replace(color.value.length < 5 && /./g, '$&$&')) // @ts-ignore

    r = c >> 16;
    g = c >> 8 & 255;
    b = c & 255;

    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );

    return hsp <= 127.5
  })

  return { isDark }
}