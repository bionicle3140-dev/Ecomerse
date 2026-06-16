<script setup lang="ts">
import Navbar from './components/Main/Navbar.vue';
import HeroBanner from "./components/Main/HeroBanner.vue";
import SidebarFilters from "./components/Main/SidebarFilters.vue";
import ProductGrid from "./components/Main/ProductGrid.vue";
import ServicesSection from "./components/Main/ServicesSection.vue";
import Footer from "./components/Main/Footer.vue";
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
