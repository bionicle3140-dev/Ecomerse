<script setup lang="ts">
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus
} from "@lucide/vue";

const cartItems = [
  {
    id: 1,
    name: "Laptop Gamer RTX",
    price: 25999,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    id: 2,
    name: "Smart TV 65",
    price: 18999,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6"
  }
];

const subtotal = 44998;
const shipping = 299;
const total = subtotal + shipping;
</script>

<template>
  <aside
    class="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm"
  >

    <div class="flex items-center gap-3 mb-6">

      <ShoppingBag class="w-6 h-6 text-violet-600" />

      <h2 class="font-bold text-xl">
        Mi carrito
      </h2>

    </div>

    <div class="space-y-4">

      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex gap-4 pb-4 border-b"
      >

        <img
          :src="item.image"
          :alt="item.name"
          class="w-20 h-20 rounded-xl object-cover"
        />

        <div class="flex-1">

          <h3
            class="font-medium text-gray-800"
          >
            {{ item.name }}
          </h3>

          <p
            class="text-violet-700 font-bold mt-1"
          >
            ${{ item.price }}
          </p>

          <div
            class="flex items-center gap-3 mt-3"
          >

            <button
              class="w-8 h-8 rounded-lg border flex items-center justify-center"
            >
              <Minus class="w-4 h-4" />
            </button>

            <span>
              {{ item.quantity }}
            </span>

            <button
              class="w-8 h-8 rounded-lg border flex items-center justify-center"
            >
              <Plus class="w-4 h-4" />
            </button>

          </div>

        </div>

        <button
          class="text-red-500 hover:text-red-700"
        >
          <Trash2 class="w-5 h-5" />
        </button>

      </div>

    </div>

    <div class="mt-8 space-y-3">

      <div class="flex justify-between">
        <span>Subtotal</span>
        <span>${{ subtotal }}</span>
      </div>

      <div class="flex justify-between">
        <span>Envío</span>
        <span>${{ shipping }}</span>
      </div>

      <div
        class="flex justify-between text-xl font-bold border-t pt-4"
      >
        <span>Total</span>
        <span class="text-violet-700">
          ${{ total }}
        </span>
      </div>

    </div>

    <button
      class="w-full mt-6 bg-violet-600 text-white py-4 rounded-2xl font-semibold hover:bg-violet-700 transition"
    >
      Proceder al pago
    </button>

  </aside>
</template>