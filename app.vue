<template>
  <NuxtLayout>
    <div class="relative min-h-screen w-full">
      <!-- Blurry background image -->
      <!-- Disable ESLint and Prettier for the image URL -->
      <!-- eslint-disable-next-line -->
      <!-- prettier-ignore -->
      <div
          class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat blur-sm opacity-60"
          style="background-image: url('/IMG_0943[1].jpg');"
      ></div>

      <!-- Main content -->
      <div class="relative z-10">
        <v-app>
          <NuxtPage />
        </v-app>
      </div>
    </div>
  </NuxtLayout>
</template>
