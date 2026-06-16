<script setup lang="ts">
import {
  ShoppingCart,
  Heart,
  Star
} from "@lucide/vue";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div
    class="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
  >

    <!-- Imagen -->
    <div class="relative">

      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-60 object-cover"
      />

      <button
        class="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-violet-50"
      >
        <Heart class="w-5 h-5 text-gray-500" />
      </button>

      <span
        class="absolute top-3 left-3 bg-violet-600 text-white px-3 py-1 rounded-full text-xs"
      >
        {{ product.category }}
      </span>

    </div>

    <!-- Info -->
    <div class="p-5">

      <div class="flex items-center gap-1 mb-2">

        <Star
          class="w-4 h-4 fill-yellow-400 text-yellow-400"
        />

        <span class="text-sm">
          {{ product.rating }}
        </span>

      </div>

      <h3
        class="font-semibold text-lg text-gray-800 line-clamp-2"
      >
        {{ product.name }}
      </h3>

      <div
        class="mt-4 flex items-center justify-between"
      >

        <div>

          <p class="text-2xl font-bold text-violet-700">
            ${{ product.price }}
          </p>

        </div>

        <button
          class="bg-violet-600 text-white p-3 rounded-xl hover:bg-violet-700 transition"
        >
          <ShoppingCart class="w-5 h-5" />
        </button>

      </div>

    </div>

  </div>
</template>