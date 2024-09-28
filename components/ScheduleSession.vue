<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    @click.self="closeModal"
  >
    <div
      class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto text-center relative"
    >
      <button
        class="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
        @click="closeModal"
      >
        &times;
      </button>
      <p class="text-lg">To schedule a session, please call or text</p>
      <a class="block text-xl font-semibold mt-2" href="tel:+15619098214">
        (561) 909-8214
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
