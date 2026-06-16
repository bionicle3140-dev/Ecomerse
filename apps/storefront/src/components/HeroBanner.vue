<script setup lang="ts">
</script>

<template>
  <section>

    <div
      class="relative overflow-hidden rounded-2xl md:rounded-[40px] min-h-[500px] md:min-h-[700px]"
    >

      <!-- Imagen fondo -->

      <img
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        alt="Hero"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay -->

      <div
        class="absolute inset-0 bg-gradient-to-r from-black/90 via-violet-950/75 to-black/40"
      />

      <!-- Contenido -->

      <div
        class="relative z-10 flex items-center min-h-[500px] md:min-h-[700px]"
      >

        <div
          class="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12"
        >

          <!-- Badge -->

          <span
            class="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs sm:text-sm"
          >
            Tecnología Premium
          </span>

          <!-- Título -->

          <h1
            class="mt-6 font-black text-white leading-none
                   text-4xl
                   sm:text-5xl
                   md:text-6xl
                   lg:text-7xl"
          >
            IMPULSA
          </h1>

          <h1
            class="font-black text-violet-300 leading-none
                   text-4xl
                   sm:text-5xl
                   md:text-6xl
                   lg:text-7xl"
          >
            TU NEGOCIO
          </h1>

          <!-- Descripción -->

          <p
            class="mt-6 text-white/90
                   text-base
                   sm:text-lg
                   md:text-xl
                   max-w-2xl"
          >
            Miles de productos, servicios especializados
            y soluciones tecnológicas para tu hogar y empresa.
          </p>

          <!-- Botones -->

          <div
            class="flex flex-col sm:flex-row gap-4 mt-8"
          >

            <button
              class="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              Comprar ahora
            </button>

            <button
              class="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white"
            >
              Ver servicios
            </button>

          </div>

          <!-- Métricas -->

          <div
            class="grid grid-cols-3 gap-4 md:flex md:gap-10 mt-10 md:mt-16"
          >

            <div>
              <h3
                class="text-white font-black
                       text-2xl
                       md:text-4xl"
              >
                +50K
              </h3>

              <p
                class="text-white/70 text-sm"
              >
                Clientes
              </p>
            </div>

            <div>
              <h3
                class="text-white font-black
                       text-2xl
                       md:text-4xl"
              >
                +12K
              </h3>

              <p
                class="text-white/70 text-sm"
              >
                Productos
              </p>
            </div>

            <div>
              <h3
                class="text-white font-black
                       text-2xl
                       md:text-4xl"
              >
                +800
              </h3>

              <p
                class="text-white/70 text-sm"
              >
                Servicios
              </p>
            </div>

          </div>

        </div>

      </div>

      <!-- Oferta flotante -->

      <div
        class="hidden lg:block absolute bottom-10 right-10"
      >

        <div
          class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white w-72"
        >

          <p class="text-white/70">
            Oferta especial
          </p>

          <h3
            class="text-5xl font-black mt-2"
          >
            50%
          </h3>

          <p class="text-white/80">
            Descuento en productos seleccionados
          </p>

        </div>

      </div>

    </div>

  </section>
</template>