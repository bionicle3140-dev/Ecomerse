<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HeroBanner from "./components/HeroBanner.vue";
import SidebarFilters from "./components/SidebarFilters.vue";
import ProductGrid from "./components/ProductGrid.vue";
import ServicesSection from "./components/ServicesSection.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
   <main class="max-w-[1600px] mx-auto p-6">
    <HeroBanner />
    <div class="grid grid-cols-12 gap-6 mt-8">

      <div class="col-span-3">
        <SidebarFilters />
      </div>

      <div class="col-span-9">

        <ProductGrid />
        <ServicesSection />
        <Footer />
    
  </div>


    </div>
  </main>
</template>
