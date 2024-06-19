import { computed, type Ref } from 'vue'

export const useColor = (color: Ref<string>) => {
  const isDark = computed(() => {
    const c = +("0x" + color.value.slice(1).replace(color.value.length < 5 ? /./g : '', '$&$&'))

    const r = c >> 16
    const g = c >> 8 & 255
    const b = c & 255

    return Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)) <= 127.5
  })

  return { isDark }
}
