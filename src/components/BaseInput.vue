<script setup lang="ts">
import Text from '@/components/inputs/Text.vue';
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
    <Text v-if="isText" 
          :name="name"
          :value="value"
          :placeholder="placeholder"
          :id="id"
          :required="required"
          :min="min"
          :max="max"
          :maxlength="maxlength" />
  </div>
</template>

<style lang="css" scoped>
</style>