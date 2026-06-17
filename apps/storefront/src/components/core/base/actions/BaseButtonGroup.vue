<script setup lang="ts">
import { computed } from 'vue'

type Orientation = 'horizontal' | 'vertical'
type Align = 'start' | 'center' | 'end'

interface Props {
  orientation?: Orientation
  align?: Align
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg'
  attached?: boolean
  wrap?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  align: 'start',
  gap: 'sm',
  attached: false,
  wrap: false
})

const orientationClass = computed(() => {
  return props.orientation === 'vertical'
    ? 'flex-col'
    : 'flex-row'
})

const alignClass = computed(() => {
  const map: Record<Align, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end'
  }
  return map[props.align]
})

const gapClass = computed(() => {
  if (props.attached) return ''

  const map = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  }

  return map[props.gap]
})

const baseClasses = computed(() => [
  'inline-flex',
  'items-center',
  orientationClass.value,
  alignClass.value,
  gapClass.value,
  props.wrap ? 'flex-wrap' : 'flex-nowrap'
])
</script>

<template>
  <div
    class="base-button-group"
    :class="baseClasses"
    role="group"
  >
    <slot />
  </div>
</template>

<style scoped>
/* 🔥 MODO ATTACHED (segmented control) */
.base-button-group.attached :slotted(button) {
  border-radius: 0;
  margin-left: -1px;
}

/* primer botón */
.base-button-group.attached :slotted(button:first-child) {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  margin-left: 0;
}

/* último botón */
.base-button-group.attached :slotted(button:last-child) {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}

/* hover layering fix */
.base-button-group.attached :slotted(button:hover) {
  z-index: 1;
  position: relative;
}
</style>