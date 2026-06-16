<script setup lang="ts">
import { ArrowRight, Clock3 } from "@lucide/vue";

interface Service {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
}

defineProps<{
  service: Service;
}>();
</script>

<template>
  <div
    class="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
  >
    <div class="relative">
      <img
        :src="service.image"
        :alt="service.title"
        class="w-full h-56 object-cover"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
      />
    </div>

    <div class="p-6">
      <h3
        class="text-xl font-bold text-gray-900 mb-2"
      >
        {{ service.title }}
      </h3>

      <p
        class="text-gray-600 mb-4"
      >
        {{ service.description }}
      </p>

      <div
        class="flex items-center justify-between"
      >
        <div
          class="flex items-center gap-2 text-violet-600"
        >
          <Clock3 class="w-4 h-4" />
          <span>{{ service.duration }}</span>
        </div>

        <button
          class="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
        >
          Solicitar

          <ArrowRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>