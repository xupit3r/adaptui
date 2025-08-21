<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
import Input from '@/components/Input.vue';
</script>

<template>
  <BaseLayout>
  <template v-slot:header>
    header
  </template>

  <Input type="text">Text</Input>
  <Input type="radio">Radio</Input>
  <Input type="checkbox">Checkbox</Input>

  <template v-slot:footer>
    footer
  </template>
  </BaseLayout>
</template>
