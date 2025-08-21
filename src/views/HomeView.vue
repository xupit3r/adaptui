<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
</script>

<template>
  <BaseLayout>
  <template v-slot:header>
    header
  </template>
  main
  <template v-slot:footer>
    footer
  </template>
  </BaseLayout>
</template>
