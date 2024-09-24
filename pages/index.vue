<template>
  <div class="container mx-auto px-4 py-8">
    <NavBar />
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Content Section -->
      <div class="md:w-1/2 flex flex-col">
        <div class="bg-white shadow-md rounded-lg p-5 flex-grow flex flex-col">
          <div class="flex-grow">
            <div
              v-for="(section, index) in data.sections"
              :key="index"
              class="mb-6"
            >
              <p class="text-gray-700 leading-relaxed text-xl">
                {{ section.content }}
              </p>
            </div>
          </div>
          <div class="mt-auto">
            <a
              class="inline-block bg-white text-gray-800 font-medium py-2 px-6 border-2 border-gray-400 hover:bg-gray-100 hover:border-gray-500 transition duration-300 ease-in-out"
              href="#schedule"
            >
              Schedule a Session
            </a>
          </div>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="md:w-1/2 flex">
        <img
          alt="Dr. Merna Habib"
          class="w-full h-full object-cover rounded-lg shadow-lg"
          src="/92956.jpg"
        />
      </div>
    </div>

    <!--
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          alt="Office 1"
          class="w-full h-auto object-contain"
          src="/IMG_7567[1].jpg"
        />
        <img
          alt="Office 2"
          class="w-full h-auto object-contain"
          src="/IMG_7568[1].jpg"
        />
      </div>
      -->
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from "~/components/FooterComponent.vue";

const { data } = await useAsyncData("aboutData", () =>
  queryContent("/").findOne(),
);
</script>
