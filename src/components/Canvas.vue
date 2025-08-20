<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
});

const stuff = reactive({
  ctx: null
})

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  stuff.ctx = canvas.value.getContext("2d");

  stuff.ctx.fillStyle = "rgb(200 0 0)";
  stuff.ctx.fillRect(10, 10, 50, 50);

  stuff.ctx.fillStyle = "rgb(0 0 200 / 50%)";
  stuff.ctx.fillRect(30, 30, 50, 50);
});
</script>

<template>
  <canvas :id="id" 
          :height="height" 
          :width="width"
          ref="canvas"
          ></canvas>
</template>

<style lang="css"></style>