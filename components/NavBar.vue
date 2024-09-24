<template>
  <nav class="bg-white shadow-md w-full">
    <div class="mx-auto px-4 py-2 flex items-center justify-between">
      <div class="flex items-center">
        <img alt="Logo" class="h-24 w-24 object-contain" src="/logo2.png" />
        <span class="text-xl">Refix Chairopractic</span>
      </div>
      <div class="space-x-4">
        <NuxtLink
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.to"
          class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/chair", text: "4D Massage Chair" },
  { to: "/physiotherapy", text: "Physiotherapy" },
];
</script>
