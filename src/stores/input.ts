import { defineStore } from "pinia"
import { reactive } from "vue";

type InputStore = {
  [key: string]: any 
}

export const useInputStore = defineStore('input', () => {
  const stored: InputStore = reactive({
    inputs: {}
  });

  function put (name: string, value: any) {
    stored.inputs[name] = value; 
  }

  return { stored, put }
});