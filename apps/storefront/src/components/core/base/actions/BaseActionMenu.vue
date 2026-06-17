<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

type Variant = 'default' | 'danger'

interface Props {
  disabled?: boolean
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  width: 'w-56'
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
function handleClickOutside(e: MouseEvent) {
  if (!root.value) return
  if (!root.value.contains(e.target as Node)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="root" class="relative inline-block">

    <!-- Trigger -->
    <button
      type="button"
      class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full
             bg-white border border-slate-300 text-slate-700
             hover:bg-slate-50 hover:scale-[1.02]
             transition-all duration-200
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
             disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="disabled"
      @click="toggle"
    >
      <slot name="trigger">
        Acciones
      </slot>

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

    <!-- Menu -->
    <transition name="fade">
      <div
        v-if="open"
        :class="[
          'absolute right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden',
          width
        ]"
      >
        <div class="p-1">

          <slot :close="close" />

        </div>
      </div>
    </transition>

  </div>
</template>