<script setup lang="ts">
import {
  ShoppingCart,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-vue-next";
</script>

<template>
  <footer
    class="mt-24 bg-white border-t border-gray-200"
  >
    <div
      class="max-w-[1600px] mx-auto px-6 py-16"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
      >

        <!-- Marca -->
        <div>

          <div
            class="flex items-center gap-3 mb-5"
          >
            <div
              class="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center"
            >
              <ShoppingCart
                class="w-6 h-6 text-white"
              />
            </div>

            <div>
              <h2
                class="font-bold text-2xl text-gray-900"
              >
                ShopZone
              </h2>

              <p
                class="text-sm text-gray-500"
              >
                Productos y servicios
              </p>
            </div>
          </div>

          <p
            class="text-gray-600 leading-relaxed"
          >
            Encuentra productos, servicios y
            soluciones profesionales para tu hogar
            y negocio en un solo lugar.
          </p>

        </div>

        <!-- Categorías -->
        <div>

          <h3
            class="font-bold text-gray-900 mb-4"
          >
            Categorías
          </h3>

          <ul class="space-y-3">

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Tecnología
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Electrónica
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Hogar
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Herramientas
              </a>
            </li>

          </ul>

        </div>

        <!-- Servicios -->
        <div>

          <h3
            class="font-bold text-gray-900 mb-4"
          >
            Servicios
          </h3>

          <ul class="space-y-3">

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Instalación
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Reparación
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Mantenimiento
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Soporte Técnico
              </a>
            </li>

          </ul>

        </div>

        <!-- Empresa -->
        <div>

          <h3
            class="font-bold text-gray-900 mb-4"
          >
            Empresa
          </h3>

          <ul class="space-y-3">

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Contacto
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Términos
              </a>
            </li>

            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-violet-600"
              >
                Privacidad
              </a>
            </li>

          </ul>

        </div>

        <!-- Contacto -->
        <div>

          <h3
            class="font-bold text-gray-900 mb-4"
          >
            Contacto
          </h3>

          <div
            class="space-y-4 text-gray-600"
          >

            <div class="flex gap-3">
              <Phone class="w-5 h-5 text-violet-600" />
              <span>+52 33 1234 5678</span>
            </div>

            <div class="flex gap-3">
              <Mail class="w-5 h-5 text-violet-600" />
              <span>contacto@shopzone.com</span>
            </div>

            <div class="flex gap-3">
              <MapPin class="w-5 h-5 text-violet-600" />
              <span>Jalisco, México</span>
            </div>

          </div>

        </div>

      </div>

      <!-- Línea -->
      <div
        class="border-t border-gray-200 mt-12 pt-8"
      >

        <div
          class="flex flex-col md:flex-row justify-between items-center gap-5"
        >

          <p
            class="text-gray-500 text-sm"
          >
            © 2026 ShopZone. Todos los derechos reservados.
          </p>

          <div
            class="flex items-center gap-4"
          >

            <button
              class="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center hover:bg-violet-200"
            >
              <Facebook class="w-5 h-5 text-violet-700" />
            </button>

            <button
              class="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center hover:bg-violet-200"
            >
              <Instagram class="w-5 h-5 text-violet-700" />
            </button>

            <button
              class="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center hover:bg-violet-200"
            >
              <Youtube class="w-5 h-5 text-violet-700" />
            </button>

          </div>

        </div>

      </div>

    </div>
  </footer>
</template>