<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

type Variant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'success'
  | 'warning'

interface Props {
  variant?: Variant
  disabled?: boolean
  block?: boolean
  closeOnSelect?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
  block: false,
  closeOnSelect: true
})

const open = ref(false)
const root = ref<HTMLElement | null>(null)

function toggle() {
  if (props.disabled) return
  open.value = !open.value
}

function close() {
  open.value = false
}

/**
 * click outside
 */
function onClickOutside(e: MouseEvent) {
  if (!root.value) return
  if (!root.value.contains(e.target as Node)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})

const buttonClasses = computed(() => {
  const variants: Record<Variant, string> = {
    primary: 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50',
    secondary: 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50',
    outline: 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 border border-transparent',
    danger: 'bg-white text-red-600 border border-red-300 hover:bg-red-50',
    success: 'bg-white text-green-600 border border-green-300 hover:bg-green-50',
    warning: 'bg-white text-amber-600 border border-amber-300 hover:bg-amber-50'
  }

  return [
    'inline-flex items-center justify-center gap-2',
    'rounded-full font-semibold',
    'transition-all duration-200',
    'hover:scale-[1.02]',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    props.block ? 'w-full' : '',
    variants[props.variant]
  ]
})
</script>

<template>
  <div ref="root" class="relative inline-block" :class="{ 'w-full': block }">

    <!-- Trigger -->
    <button
      type="button"
      :disabled="disabled"
      :class="buttonClasses"
      @click="toggle"
    >
      <slot name="trigger">
        Opciones
      </slot>

      <!-- arrow -->
      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': open }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Dropdown -->
    <transition name="fade">
      <div
        v-if="open"
        class="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden"
      >
        <!-- content slot -->
        <div class="p-2">
          <slot :close="close" />
        </div>
      </div>
    </transition>
  </div>
</template>