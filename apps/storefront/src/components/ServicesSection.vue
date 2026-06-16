<script setup lang="ts">
import ServiceCard from "./ServiceCard.vue";

const services = [
  {
    id: 1,
    title: "Instalación Profesional",
    description:
      "Instalamos tus equipos de forma segura y garantizada.",
    duration: "1 - 2 horas",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
  },

  {
    id: 2,
    title: "Mantenimiento",
    description:
      "Mantenimiento preventivo y correctivo para tus equipos.",
    duration: "2 - 4 horas",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
  },

  {
    id: 3,
    title: "Reparación Especializada",
    description:
      "Diagnóstico y reparación por técnicos certificados.",
    duration: "24 horas",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
  }
];
</script>

<template>
  <section class="mt-20">

    <div class="mb-10">

      <span
        class="inline-block px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
      >
        Servicios Profesionales
      </span>

      <h2
        class="text-4xl font-bold text-gray-900 mt-4"
      >
        También ofrecemos servicios
      </h2>

      <p
        class="text-gray-600 mt-3 max-w-2xl"
      >
        Contrata técnicos y especialistas para instalación,
        mantenimiento y reparación de tus productos.
      </p>

    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <ServiceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </div>

  </section>
</template>