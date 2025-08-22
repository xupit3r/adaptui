<script setup lang="ts">
import { inject } from 'vue';

const { type, id, name, placeholder, required, min, max, maxlength } = defineProps([
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

const save: Function | undefined = inject('save');


console.log(`setting up a ${type} w/ name ${name} and ID ${id}`)
</script>

<template>
  <input :type="type" 
         :name="name"
         :id="id"
         :placeholder="placeholder"
         :required="required"
         :min="min"
         :max="max"
         :maxlength="maxlength"
         @change="save" />
</template>

<style lang="css" scoped>
</style>