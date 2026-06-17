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
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'secondary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button'
})

const variantClasses = computed(() => {
  const variants: Record<Variant, string> = {
    primary:
      'bg-transparent text-blue-600 border border-blue-200 hover:bg-blue-50',

    secondary:
      'bg-transparent text-slate-600 border border-slate-200 hover:bg-slate-50',

    outline:
      'bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-50',

    ghost:
      'bg-transparent text-slate-600 border border-transparent hover:bg-slate-100',

    danger:
      'bg-transparent text-red-600 border border-red-200 hover:bg-red-50',

    success:
      'bg-transparent text-green-600 border border-green-200 hover:bg-green-50',

    warning:
      'bg-transparent text-amber-600 border border-amber-200 hover:bg-amber-50'
  }

  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes: Record<Size, string> = {
    xs: 'h-8 w-8',
    sm: 'h-9 w-9',
    md: 'h-10 w-10',
    lg: 'h-11 w-11',
    xl: 'h-12 w-12'
  }

  return sizes[props.size]
})

const buttonClasses = computed(() => [
  'inline-flex',
  'items-center',
  'justify-center',

  'rounded-full',

  'transition-all',
  'duration-200',

  'select-none',

  'hover:scale-105',

  'disabled:cursor-not-allowed',
  'disabled:opacity-50',

  variantClasses.value,
  sizeClasses.value
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

    <slot v-else />
  </button>
</template>
```
