<script setup lang="ts">
import Text from '@/components/inputs/Text.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';
import Radio from '@/components/inputs/Radio.vue';

import { computed } from 'vue';
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

const isText = computed(() => type === 'text');
const isCheckbox = computed(() => type === 'checkbox');
const isRadio = computed(() => type === 'radio');

</script>

<template>
  <div class="input">
    <Text v-if="isText" v-bind="$props" />
    <Checkbox v-if="isCheckbox" v-bind="$props" />
    <Radio v-if="isRadio" v-bind="$props" />
  </div>
</template>

<style lang="css" scoped>
</style>