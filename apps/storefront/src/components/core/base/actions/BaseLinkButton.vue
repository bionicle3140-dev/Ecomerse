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
  to?: string
  href?: string
  variant?: Variant
  size?: Size
  disabled?: boolean
  block?: boolean
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  block: false,
  external: false
})

const isRouterLink = computed(() => !!props.to)
const isExternal = computed(() => !!props.href || props.external)

const variantClasses = computed(() => {
  const variants: Record<Variant, string> = {
    primary:
      'text-blue-600 hover:bg-blue-50 border border-transparent',

    secondary:
      'text-slate-700 hover:bg-slate-50 border border-transparent',

    outline:
      'text-slate-600 border border-slate-300 hover:bg-slate-50',

    ghost:
      'text-slate-700 hover:bg-slate-100 border border-transparent',

    danger:
      'text-red-600 hover:bg-red-50 border border-transparent',

    success:
      'text-green-600 hover:bg-green-50 border border-transparent',

    warning:
      'text-amber-600 hover:bg-amber-50 border border-transparent'
  }

  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes: Record<Size, string> = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
    xl: 'px-6 py-3 text-lg'
  }

  return sizes[props.size]
})

const baseClasses = computed(() => [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',

  'rounded-full',

  'font-semibold',

  'transition-all',
  'duration-200',

  'hover:scale-[1.02]',

  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-blue-500',

  'disabled:opacity-50',
  'disabled:pointer-events-none',

  props.block ? 'w-full' : '',

  variantClasses.value,
  sizeClasses.value
])
</script>

<template>
  <!-- Router Link -->
  <RouterLink
    v-if="isRouterLink"
    :to="to"
    :class="baseClasses"
  >
    <slot />
  </RouterLink>

  <!-- External Link -->
  <a
    v-else-if="isExternal"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="baseClasses"
  >
    <slot />
  </a>

  <!-- Fallback (actúa como link visual) -->
  <span v-else :class="baseClasses">
    <slot />
  </span>
</template>