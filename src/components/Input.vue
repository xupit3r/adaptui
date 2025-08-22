<script setup lang="ts">
import { computed, provide } from 'vue';

import Text from '@/components/inputs/Text.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';
import Radio from '@/components/inputs/Radio.vue';
import { useInputStore } from '@/stores/input';

const { put } = useInputStore();

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

provide('save', (name: string, value: any) => {
  console.log(`saving ${name} ->`, value);
  put(name, value)
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