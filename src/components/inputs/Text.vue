<script setup lang="ts">
const props = defineProps([
  'type',
  'name',
  'value',
  'placeholder',
  'id',
  'required',
  'min',
  'max',
  'maxlength'
]);


// do any text specific things here
</script>

<template>
  <BaseInput v-bind="$props" />
</template>

<style lang="css" scoped>
</style>