<script setup lang="ts">
import { computed, provide } from 'vue';

import Text from '@/components/inputs/Text.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';
import Radio from '@/components/inputs/Radio.vue';

const { type } = defineProps([
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

const isType = (t: string) => type === t;

const componentType = computed(() => {
  if (isType('text')) {
    return Text;
  } else if (isType('radio')) {
    return Radio;
  } else if (isType('checkbox')) {
    return Checkbox
  } else {
    return Text;
  }
});

provide('save', () => {
  console.log(`saving ${type} field.`)
});

</script>

<template>
  <div class="input">
    <label>
      <slot name="label">label</slot>
    </label>
    <component :is="componentType" v-bind="$props" />
  </div>
</template>

<style lang="css" scoped>
</style>