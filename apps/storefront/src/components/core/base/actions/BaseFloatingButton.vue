<script setup lang="ts">
import { computed } from 'vue'

type Variant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'

interface Props {
  variant?: Variant
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  position: 'bottom-right',
  size: 'md',
  disabled: false
})

const positionClass = computed(() => {
  const map = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  }
  return map[props.position]
})

const sizeClass = computed(() => {
  const map = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-14 h-14 text-base',
    lg: 'w-16 h-16 text-lg'
  }
  return map[props.size]
})

const variantClass = computed(() => {
  const map: Record<Variant, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-slate-600 hover:bg-slate-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    warning: 'bg-amber-500 hover:bg-amber-600 text-white'
  }
  return map[props.variant]
})
</script>

<template>
  <div
    class="fixed z-50"
    :class="positionClass"
  >
    <button
      type="button"
      :disabled="disabled"
      :class="[
        'flex items-center justify-center rounded-full shadow-lg',
        'transition-all duration-200',
        'hover:scale-110 active:scale-95',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClass,
        variantClass
      ]"
    >
      <slot>
        +
      </slot>
    </button>
  </div>
</template>