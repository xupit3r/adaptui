<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
import Input from '@/components/Input.vue';
</script>

<template>
  <BaseLayout>
  <template v-slot:header>
    header
  </template>

  <Input type="text" name="text">
    <template v-slot:label>text</template>
  </Input>
  <Input type="radio" name="radio">
    <template v-slot:label>radio</template>
  </Input>
  <Input type="checkbox" name="checkbox">
    <template v-slot:label>checkbox</template>
  </Input>

  <template v-slot:footer>
    footer
  </template>
  </BaseLayout>
</template>
