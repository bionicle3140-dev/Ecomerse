<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@lucide/vue";

const search = ref("");

const emit = defineEmits<{
  search: [value: string];
}>();

const handleSearch = () => {
  emit("search", search.value);
};
</script>

<template>
  <div class="w-full">
    <div class="relative">

      <input
        v-model="search"
        @keyup.enter="handleSearch"
        type="text"
        placeholder="Buscar productos, categorías o servicios..."
        class="w-full h-12 rounded-xl border border-gray-200 bg-white pl-5 pr-16 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
      />

      <button
        @click="handleSearch"
        class="absolute right-1 top-1 h-10 w-10 rounded-lg bg-violet-600 flex items-center justify-center text-white hover:bg-violet-700 transition"
      >
        <Search class="w-5 h-5" />
      </button>

    </div>
  </div>
</template>