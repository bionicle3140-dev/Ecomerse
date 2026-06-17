<script setup lang="ts">
import Navbar from '@/components/Main/Navbar.vue';
import HeroBanner from "@/components/Main/HeroBanner.vue";
import SidebarFilters from "@/components/Main/SidebarFilters.vue";
import ProductGrid from "@/components/Main/ProductGrid.vue";
import ServicesSection from "@/components/Main/ServicesSection.vue";
import Footer from "@/components/Main/Footer.vue";
import BaseButton from "@/components/Core/base/actions/BaseButton.vue";
import BaseIconButton from "@/components/Core/base/actions/BaseIconButton.vue";
import BaseButtonGroup from "@/components/Core/base/actions/BaseButtonGroup.vue";
import BaseLinkButton from "@/components/Core/base/actions/BaseLinkButton.vue";
import BaseDropdownButton from "@/components/Core/base/actions/BaseDropdownButton.vue";
import BaseActionMenu from "@/components/Core/base/actions/BaseActionMenu.vue";
import BaseFloatingButton from "@/components/Core/base/actions/BaseFloatingButton.vue";
</script>

<template>
  <Navbar />
   <main class="max-w-[1600px] mx-auto p-6">
    <BaseActionMenu />
    <HeroBanner />
    <div class="grid grid-cols-12 gap-6 mt-8">

      <div class="col-span-3">
        <SidebarFilters />
      </div>

      <div class="col-span-9">

        <ProductGrid />
        <ServicesSection />
        <Footer />
    <BaseButton variant="success">
  Actualizado
</BaseButton>

<BaseButton variant="danger">
  Cancelado
</BaseButton>

<BaseButton variant="warning">
  Pendiente
</BaseButton>

<BaseButton variant="primary">
  Procesando
</BaseButton>

<BaseButton variant="secondary">
  Inactivo
</BaseButton>

<BaseButton
  variant="success"
  :show-indicator="false"
>
  Guardar
</BaseButton>
<div class="flex gap-4"> <BaseIconButton variant="primary"> <Search :size="18" /> </BaseIconButton> <BaseIconButton variant="success"> <Pencil :size="18" /> </BaseIconButton> <BaseIconButton variant="danger"> <Trash2 :size="18" /> </BaseIconButton> <BaseIconButton variant="secondary"> <Settings :size="18" /> </BaseIconButton> <BaseIconButton variant="ghost"> <X :size="18" /> </BaseIconButton> </div>
<BaseButtonGroup>
  <BaseButton variant="primary">
    Guardar
  </BaseButton>

  <BaseButton variant="secondary">
    Cancelar
  </BaseButton>

  <BaseButton variant="danger">
    Eliminar
  </BaseButton>
</BaseButtonGroup>
<BaseLinkButton to="/dashboard" variant="primary">
  Ir al dashboard
</BaseLinkButton>
<BaseDropdownButton>
  <template #trigger>
    Acciones
  </template>

  <div class="space-y-1">
    <button class="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-lg">
      Editar
    </button>

    <button class="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-lg">
      Eliminar
    </button>
    <button class="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-lg">
      Editar
    </button>

    <button class="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-lg">
      Eliminar
    </button>
  </div>
</BaseDropdownButton>
<BaseActionMenu>
  <template #trigger>
    Acciones
  </template>

  <div class="space-y-1">
    <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100">
      Editar
    </button>

    <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100">
      Duplicar
    </button>

    <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 text-red-600">
      Eliminar
    </button>
  </div>
</BaseActionMenu>
<BaseFloatingButton>
  +
</BaseFloatingButton>
  </div>


    </div>
  </main>
</template>