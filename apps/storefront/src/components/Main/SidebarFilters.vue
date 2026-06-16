<script setup lang="ts">
import { computed, ref } from "vue";

import {
  ChevronDown,
  Search,
  Star,
  SlidersHorizontal,
  X,
} from "@lucide/vue";

/* ==========================
   UI
========================== */

const mobileFilters = ref(false);

const categoriesOpen = ref(true);
const priceOpen = ref(true);
const brandsOpen = ref(true);
const ratingOpen = ref(true);

/* ==========================
   DATA
========================== */

const categories = ref([
  { id: 1, name: "Electrónica", count: 120 },
  { id: 2, name: "Computadoras", count: 85 },
  { id: 3, name: "Audio", count: 60 },
  { id: 4, name: "Smartphones", count: 95 },
  { id: 5, name: "Accesorios", count: 150 },
  { id: 6, name: "Gaming", count: 70 },
  { id: 7, name: "Hogar", count: 40 },
  { id: 8, name: "Servicios", count: 20 },
]);

const brands = ref([
  { id: 1, name: "Apple", count: 45 },
  { id: 2, name: "Samsung", count: 38 },
  { id: 3, name: "Sony", count: 27 },
  { id: 4, name: "Dell", count: 20 },
  { id: 5, name: "Bose", count: 15 },
]);

const ratings = ref([
  { stars: 5, count: 128 },
  { stars: 4, count: 95 },
  { stars: 3, count: 42 },
  { stars: 2, count: 15 },
  { stars: 1, count: 8 },
]);

/* ==========================
   FILTERS
========================== */

const selectedCategories = ref<number[]>([]);
const selectedBrands = ref<number[]>([]);
const selectedRatings = ref<number[]>([]);

const minPrice = ref(10);
const maxPrice = ref(2000);

const brandSearch = ref("");

const filteredBrands = computed(() =>
  brands.value.filter((brand) =>
    brand.name.toLowerCase().includes(
      brandSearch.value.toLowerCase()
    )
  )
);

const activeFilters = computed(() => {
  return (
    selectedCategories.value.length +
    selectedBrands.value.length +
    selectedRatings.value.length
  );
});

function clearFilters() {
  selectedCategories.value = [];
  selectedBrands.value = [];
  selectedRatings.value = [];

  minPrice.value = 10;
  maxPrice.value = 2000;
}
</script>

<template>
  <!-- MOBILE BUTTON -->

  <button
    @click="mobileFilters = true"
    class="lg:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-violet-600 text-white mb-4"
  >
    <SlidersHorizontal class="w-5 h-5" />
    Filtros
  </button>

  <!-- DESKTOP -->

  <aside
    class="hidden lg:block w-[280px] bg-white border border-gray-200 rounded-2xl p-5 sticky top-24"
  >
    <FilterPanel />
  </aside>

  <!-- MOBILE DRAWER -->

  <Transition
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="mobileFilters"
      class="fixed inset-0 z-50 lg:hidden"
    >
      <div
        @click="mobileFilters = false"
        class="absolute inset-0 bg-black/50"
      />

      <aside
        class="absolute right-0 top-0 h-full w-[320px] bg-white shadow-2xl overflow-y-auto"
      >
        <div
          class="sticky top-0 bg-white border-b px-5 py-4 flex items-center justify-between"
        >
          <h2 class="font-bold text-lg">
            Filtros
          </h2>

          <button
            @click="mobileFilters = false"
          >
            <X />
          </button>
        </div>

        <div class="p-5">
          <!-- HEADER -->

          <div
            class="flex justify-between items-center mb-6"
          >
            <h2 class="font-bold text-lg">
              Filtros
            </h2>

            <button
              @click="clearFilters"
              class="text-violet-600 text-sm"
            >
              Limpiar todo
            </button>
          </div>

          <!-- CATEGORÍAS -->

          <div class="border-b pb-5">
            <button
              @click="categoriesOpen = !categoriesOpen"
              class="w-full flex justify-between"
            >
              <span class="font-semibold">
                Categorías
              </span>

              <ChevronDown
                class="w-4 h-4 transition"
                :class="{ 'rotate-180': !categoriesOpen }"
              />
            </button>

            <div
              v-show="categoriesOpen"
              class="space-y-3 mt-4"
            >
              <label
                v-for="item in categories"
                :key="item.id"
                class="flex justify-between text-sm"
              >
                <div
                  class="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    :value="item.id"
                    v-model="selectedCategories"
                  />

                  {{ item.name }}
                </div>

                <span class="text-gray-400">
                  ({{ item.count }})
                </span>
              </label>

              <button
                class="text-violet-600 text-sm"
              >
                Ver todas →
              </button>
            </div>
          </div>

          <!-- PRECIO -->

          <div class="border-b py-5">
            <button
              @click="priceOpen = !priceOpen"
              class="w-full flex justify-between"
            >
              <span class="font-semibold">
                Precio
              </span>

              <ChevronDown
                class="w-4 h-4 transition"
                :class="{ 'rotate-180': !priceOpen }"
              />
            </button>

            <div
              v-show="priceOpen"
              class="mt-4"
            >
              <div
                class="flex justify-between text-sm"
              >
                <span>${{ minPrice }}</span>
                <span>${{ maxPrice }}</span>
              </div>

              <input
                type="range"
                min="10"
                max="2000"
                v-model="maxPrice"
                class="w-full accent-violet-600 mt-2"
              />

              <div
                class="grid grid-cols-2 gap-2 mt-4"
              >
                <input
                  v-model="minPrice"
                  class="border rounded-lg p-2 text-sm"
                />

                <input
                  v-model="maxPrice"
                  class="border rounded-lg p-2 text-sm"
                />
              </div>
            </div>
          </div>

          <!-- MARCAS -->

          <div class="border-b py-5">
            <button
              @click="brandsOpen = !brandsOpen"
              class="w-full flex justify-between"
            >
              <span class="font-semibold">
                Marca
              </span>

              <ChevronDown
                class="w-4 h-4 transition"
                :class="{ 'rotate-180': !brandsOpen }"
              />
            </button>

            <div
              v-show="brandsOpen"
              class="mt-4"
            >
              <div class="relative mb-4">
                <input
                  v-model="brandSearch"
                  placeholder="Buscar marca..."
                  class="w-full border rounded-lg py-2 pl-3 pr-10 text-sm"
                />

                <Search
                  class="absolute right-3 top-3 w-4 h-4 text-gray-400"
                />
              </div>

              <div class="space-y-3">
                <label
                  v-for="brand in filteredBrands"
                  :key="brand.id"
                  class="flex justify-between text-sm"
                >
                  <div
                    class="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      :value="brand.id"
                      v-model="selectedBrands"
                    />

                    {{ brand.name }}
                  </div>

                  <span class="text-gray-400">
                    ({{ brand.count }})
                  </span>
                </label>
              </div>
            </div>
          </div>

          <!-- RATING -->

          <div class="py-5">
            <button
              @click="ratingOpen = !ratingOpen"
              class="w-full flex justify-between"
            >
              <span class="font-semibold">
                Valoración
              </span>

              <ChevronDown
                class="w-4 h-4 transition"
                :class="{ 'rotate-180': !ratingOpen }"
              />
            </button>

            <div
              v-show="ratingOpen"
              class="space-y-3 mt-4"
            >
              <label
                v-for="rating in ratings"
                :key="rating.stars"
                class="flex justify-between"
              >
                <div
                  class="flex items-center gap-1"
                >
                  <input
                    type="checkbox"
                    :value="rating.stars"
                    v-model="selectedRatings"
                  />

                  <Star
                    v-for="n in rating.stars"
                    :key="n"
                    class="w-4 h-4 fill-orange-400 text-orange-400"
                  />
                </div>

                <span class="text-gray-400 text-sm">
                  ({{ rating.count }})
                </span>
              </label>
            </div>
          </div>

          <!-- APPLY -->

          <button
            class="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold mt-4"
          >
            Aplicar filtros ({{ activeFilters }})
          </button>
        </div>
      </aside>
    </div>
  </Transition>
</template>