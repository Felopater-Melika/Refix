<template>
  <div>
    <!--    <div class="min-h-screen">-->
    <div class="container mx-auto px-4 py-8">
      <NavBar />
      <!-- Main Content -->
      <div class="bg-white shadow-md rounded-lg p-8">
        <!--        <h2 class="text-3xl font-bold mb-6">-->
        <!--          {{ content.mainContent.title }}-->
        <!--        </h2>-->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="mb-4 text-gray-700 leading-relaxed">
              {{ content.mainContent.description }}
            </p>
            <img
              alt="Logo"
              class="w-80 h-auto object-contain"
              src="/IMG_7578[1].jpg"
            />
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">
              {{ content.mainContent.subtitle }}
            </h3>
            <p class="mb-4 text-gray-700 leading-relaxed">
              {{ content.mainContent.packageIntro }}
            </p>
            <ul class="list-disc list-inside mb-4">
              <li
                v-for="(item, index) in content.mainContent.packageItems"
                :key="index"
                class="text-gray-700 leading-relaxed"
              >
                {{ item }}
              </li>
            </ul>
            <!-- Pricing Table -->
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div
                v-for="(item, index) in content.pricingTable"
                :key="index"
                class="border-t border-b border-gray-200 py-2"
              >
                <h4 class="font-bold">{{ item.title }}</h4>
                <p>{{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Sections -->
        <div
          v-for="(section, index) in content.sections"
          :key="index"
          class="mt-8"
        >
          <p class="text-gray-700 leading-relaxed">{{ section.content }}</p>
        </div>
      </div>
      <FooterComponent />
    </div>
    <!--    </div>-->
  </div>
</template>

<script setup>
const { data: content } = await useAsyncData("massageChairData", () =>
  queryContent("chair").findOne(),
);
</script>
