<script setup lang="ts">
import { ref } from "vue"
import SearchBar from "./SearchBar.vue"

import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Search,
  Heart,
  ShoppingCart,
  User
} from "@lucide/vue"

const showDrawer = ref(false)

const onSearch = (query: string) => {
  console.log(query)

  // router.push(`/search?q=${query}`)
}
</script>

<template>
  <header class="bg-white border-b border-gray-200">

    <!-- Top Navbar -->
    <div class="max-w-[1600px] mx-auto px-6 py-4">

      <div class="flex items-center gap-6">

        <!-- Logo -->
        <div class="flex items-center gap-3 shrink-0">
          <div
            class="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center"
          >
            <ShoppingCart class="w-5 h-5 text-white" />
          </div>

          <h1 class="font-bold text-2xl text-gray-900">
            ShopZone
          </h1>
        </div>

        <!-- Search -->
        <div class="flex-1">
          <div class="relative">

            <input
              type="text"
              placeholder="Buscar productos, categorías o servicios..."
              class="w-full h-12 rounded-xl border border-gray-200 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            <button
              class="absolute right-1 top-1 h-10 w-10 rounded-lg bg-violet-600 flex items-center justify-center text-white hover:bg-violet-700 transition"
            >
              <Search class="w-5 h-5" />
            </button>

          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-6">

          <button
            class="hidden md:flex items-center gap-2 text-gray-600 hover:text-violet-600"
          >
            <Heart class="w-5 h-5" />
            <span>Favoritos</span>
          </button>

          <button
            class="hidden md:flex items-center gap-2 text-gray-600 hover:text-violet-600"
          >
            <User class="w-5 h-5" />
            <span>Mi cuenta</span>
          </button>

          <button class="relative">

            <ShoppingCart
              class="w-7 h-7 text-gray-700"
            />

            <span
              class="absolute -top-2 -right-2 bg-violet-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
            >
              3
            </span>

          </button>

        </div>

      </div>

    </div>

    <!-- Navigation -->
    <div class="border-t border-gray-100">

      <div
        class="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between"
      >

        <button
  @click="showDrawer = true"
  class="flex items-center gap-3 px-5 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition"
>
  <Menu class="w-5 h-5" />

  <span class="font-medium">
    Todas las categorías
  </span>

  <ChevronDown class="w-4 h-4" />
</button>

        <!-- Menu -->
        <nav class="hidden lg:flex gap-10">

          <a
            href="#"
            class="font-medium text-violet-600"
          >
            Inicio
          </a>

          <a
            href="#"
            class="font-medium text-gray-600 hover:text-violet-600"
          >
            Productos
          </a>

          <a
            href="#"
            class="font-medium text-gray-600 hover:text-violet-600"
          >
            Servicios
          </a>

          <a
            href="#"
            class="font-medium text-gray-600 hover:text-violet-600"
          >
            Ofertas
          </a>

          <a
            href="#"
            class="font-medium text-gray-600 hover:text-violet-600"
          >
            Novedades
          </a>

          <a
            href="#"
            class="font-medium text-gray-600 hover:text-violet-600"
          >
            Marcas
          </a>

          <a
            href="#"
            class="font-medium text-gray-600 hover:text-violet-600"
          >
            Contacto
          </a>

        </nav>

      </div>

    </div>

  </header>
  <Transition
  enter-active-class="transition-opacity duration-300"
  leave-active-class="transition-opacity duration-300"
  enter-from-class="opacity-0"
  leave-to-class="opacity-0"
>
  <div
    v-if="showDrawer"
    class="fixed inset-0 z-50"
  >

    <!-- Overlay -->

    <div
      @click="showDrawer = false"
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
    />

    <!-- Drawer -->

    <Transition
      enter-active-class="transition-transform duration-300"
      leave-active-class="transition-transform duration-300"
      enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full"
    >

      <aside
        class="absolute left-0 top-0 h-full w-[340px] bg-white shadow-2xl"
      >

        <!-- Header -->

        <div
          class="h-20 bg-violet-600 flex items-center justify-between px-6"
        >

          <h2
            class="text-white text-xl font-bold"
          >
            Categorías
          </h2>

          <button
            @click="showDrawer = false"
            class="text-white"
          >
            <X class="w-6 h-6" />
          </button>

        </div>

        <!-- Categorías -->

        <div
          class="overflow-y-auto h-[calc(100%-80px)]"
        >

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>💻 Tecnología</span>

            <ChevronRight class="w-5 h-5" />
          </button>

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>🎮 Gaming</span>

            <ChevronRight class="w-5 h-5" />
          </button>

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>📱 Celulares</span>

            <ChevronRight class="w-5 h-5" />
          </button>

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>🎧 Audio</span>

            <ChevronRight class="w-5 h-5" />
          </button>

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>📷 Cámaras</span>

            <ChevronRight class="w-5 h-5" />
          </button>

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>🖥️ Monitores</span>

            <ChevronRight class="w-5 h-5" />
          </button>

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>🏠 Hogar</span>

            <ChevronRight class="w-5 h-5" />
          </button>

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>🛠️ Herramientas</span>

            <ChevronRight class="w-5 h-5" />
          </button>

          <button
            class="w-full flex items-center justify-between px-6 py-4 hover:bg-violet-50 border-b"
          >
            <span>⚙️ Servicios</span>

            <ChevronRight class="w-5 h-5" />
          </button>

        </div>

      </aside>

    </Transition>

  </div>
</Transition>
</template>