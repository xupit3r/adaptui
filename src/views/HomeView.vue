<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
</script>

<template>
  <BaseLayout>
  <template v-slot:header>
    header
  </template>
  <BaseInput type="text" />
  <template v-slot:footer>
    footer
  </template>
  </BaseLayout>
</template>
