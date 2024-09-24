<template>
  <nav class="bg-white shadow-md w-full rounded-lg mb-8">
    <div class="mx-auto px-4 py-2 flex items-center justify-between">
      <!-- Logo and Brand -->
      <div class="flex items-center">
        <img alt="Logo" class="h-16 w-16 object-contain" src="/logo2.png" />
        <span class="text-xl ml-2">Refix Chiropractic</span>
      </div>

      <!-- Hamburger Button (visible on small screens) -->
      <button
        class="md:hidden text-gray-700 focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6h16M4 12h16m-7 6h7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>

      <!-- Links (hidden on mobile, visible on larger screens) -->
      <div class="hidden md:flex space-x-4">
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

    <!-- Mobile Menu with Animation (visible when hamburger is clicked) -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-gray-100 py-2 transition-all duration-300 ease-in-out"
      >
        <NuxtLink
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.to"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-150 ease-in-out"
          @click="isOpen = false"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Mobile menu state
const isOpen = ref(false);

// Links in the navigation
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/chair", text: "4D Massage Chair" },
  { to: "/physiotherapy", text: "Physiotherapy" },
];
</script>

<style scoped>
/* Add transition effects for mobile menu opening */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
