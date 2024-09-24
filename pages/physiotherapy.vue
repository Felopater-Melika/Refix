<template>
  <div class="container mx-auto px-4">
    <NavBar />
    <div class="mt-8">
      <div class="bg-white shadow-md rounded-lg p-5">
        <!-- Render section content -->
        <!--        <div-->
        <!--          v-for="(section, index) in data.sections"-->
        <!--          :key="index"-->
        <!--          class="pb-4 mb-6 border-b border-gray-200 last:border-none"-->
        <!--        >-->
        <!--          <p class="text-gray-700 leading-relaxed">{{ section.content }}</p>-->
        <!--        </div>-->

        <!-- Render list items -->
        <ul class="list-disc pl-5 mt-4 mb-6 space-y-2">
          <li
            v-for="(item, index) in data.list"
            :key="index"
            class="text-gray-700 leading-relaxed"
          >
            {{ item }}
          </li>
        </ul>

        <!-- Render Images -->
        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            alt="Physiotherapy benefit"
            class="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            src="/57801.jpg"
          />
          <img
            alt="Exercise for recovery"
            class="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            src="/62506.jpg"
          />
          <img
            alt="Hands-on therapy"
            class="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            src="/image1.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("physiotherapyData", () =>
  queryContent("physiotherapy").findOne(),
);
</script>
