import { defineStore } from "pinia"
import { reactive, computed } from "vue";

type InputStore = {
  [key: string]: any 
}

export const useInputStore = defineStore('input', () => {
  const stored: InputStore = reactive({
    inputs: {
      text: 'joe'
    }
  });

  function put (name: string, value: any) {
    stored.inputs[name] = value; 
  }

  const get = computed(() => (name: string) => {
    return stored.inputs[name];
  });

  return { stored, get, put }
});