<script setup lang="ts">
import { inject } from 'vue';

const save: Function | undefined = inject('save');
</script>

<template>
  <input type="text" @change="save" />
</template>

<style lang="css" scoped>
</style>