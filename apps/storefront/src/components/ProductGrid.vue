<script setup lang="ts">
import ProductCard from "./ProductCard.vue";

const products = [
  {
    id: 1,
    name: "Laptop Gamer RTX",
    price: 25999,
    rating: 4.8,
    category: "Tecnología",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    id: 2,
    name: "Smart TV 65 pulgadas",
    price: 18999,
    rating: 4.7,
    category: "Electrónica",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6"
  },
  {
    id: 3,
    name: "Servicio de Instalación",
    price: 999,
    rating: 5,
    category: "Servicios",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
  },
  {
    id: 4,
    name: "Silla Ergonómica",
    price: 4999,
    rating: 4.9,
    category: "Hogar",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  }
];
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>