```vue
<script setup lang="ts">
import { computed } from 'vue'

type Variant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'success'
  | 'warning'

type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'

interface Props {
  variant?: Variant
  size?: Size
  disabled?: boolean
  loading?: boolean
  block?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  block: false,
  type: 'button'
})

const variantClasses = computed(() => {
  const variants: Record<Variant, string> = {
    primary:
      'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50',

    secondary:
      'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50',

    outline:
      'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50',

    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100 border border-transparent',

    danger:
      'bg-white text-red-600 border border-red-300 hover:bg-red-50',

    success:
      'bg-white text-green-600 border border-green-300 hover:bg-green-50',

    warning:
      'bg-white text-amber-600 border border-amber-300 hover:bg-amber-50'
  }

  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes: Record<Size, string> = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  }

  return sizes[props.size]
})

const buttonClasses = computed(() => [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-3',

  'rounded-full',

  'font-semibold',

  'transition-all',
  'duration-200',

  'hover:shadow-md',
  'hover:scale-[1.02]',

  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',

  'disabled:cursor-not-allowed',
  'disabled:opacity-50',

  variantClasses.value,
  sizeClasses.value,

  props.block ? 'w-full' : ''
])
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
  >
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />

    <slot name="left-icon" />

    <slot />

    <slot name="right-icon" />
  </button>
</template>
```
