<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
import Input from '@/components/Input.vue';
</script>

<template>
  <BaseLayout>
  <template v-slot:header>
    header
  </template>

  <Input type="text" />
  <Input type="radio" />
  <Input type="checkbox" />

  <template v-slot:footer>
    footer
  </template>
  </BaseLayout>
</template>
