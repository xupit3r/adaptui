<script setup lang="ts">
import { provide } from 'vue';

import Text from '@/components/inputs/Text.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';
import Radio from '@/components/inputs/Radio.vue';

const {
  type,
  name,
  value,
  placeholder,
  id,
  required,
  min,
  max,
  maxlength
} = defineProps({
  type: {
    type: String
  },
  name: {
    type: String
  },
  value: {
    type: String
  },
  placeholder: {
    type: String
  },
  id: {
    type: String
  },
  required: {
    type: String
  },
  min:  {
    type: String
  },
  max:  {
    type: String
  },
  maxlength: {
    type: String
  }
});

const isType = (t: string) => type === t;

provide('save', () => {
  console.log(`saving ${type} field.`)
});

</script>

<template>
  <div class="input">
    <label>
      <slot>label</slot>
    </label>
    <Text v-if="isType('text')" v-bind="$props" />
    <Checkbox v-if="isType('checkbox')" v-bind="$props" />
    <Radio v-if="isType('radio')" v-bind="$props" />
  </div>
</template>

<style lang="css" scoped>
</style>