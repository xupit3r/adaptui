<script setup lang="ts">
import { computed, provide } from 'vue';

import Text from '@/components/inputs/Text.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';
import Radio from '@/components/inputs/Radio.vue';
import { useInputStore } from '@/stores/input';

const { get, put } = useInputStore();

const { type, name } = defineProps([
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
  if (name) {
    put(name, value)
  }
});

</script>

<template>
  <div class="fieldGroup_input">
    <label>
      <slot name="label">label</slot>
    </label>
    <component :is="componentType" v-bind="$props" :value="get(name)" />
  </div>
</template>

<style lang="css" scoped>
.input {
  padding: 5px;
}

label {
  margin-right: 5px;
}
</style>