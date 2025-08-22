<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
import Input from '@/components/Input.vue';
</script>

<template>
  <BaseLayout>
  <template v-slot:header>
    header
  </template>

  <Input type="text">
    <template v-slot:label>text</template>
  </Input>
  <Input type="radio">
    <template v-slot:label>radio</template>
  </Input>
  <Input type="checkbox">
    <template v-slot:label>checkbox</template>
  </Input>

  <template v-slot:footer>
    footer
  </template>
  </BaseLayout>
</template>
