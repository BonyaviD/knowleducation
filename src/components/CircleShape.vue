<script setup lang="ts">
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
  <div ref="target"
    class="bg-emerald-400 w-52 h-52 rounded-full flex justify-center items-center relative right-10 bottom-12">
    <div class="bg-slate-200 w-32 h-32 rounded-full flex justify-center items-center relative">
      <span class="bg-slate-600 w-16 h-16 rounded-full flex justify-center items-center absolute eye"
      :style="isOutside ? 'left:0' : 'left:50%' ">
        <span class="bg-slate-500 w-4 h-4 rounded-full relative left-2 bottom-2"></span>
      </span>
    </div>
  </div>
  <div class="console" ref="{ x, y, isOutside }">
    position: Fixed for test <br>
    x: {{ x }}
    y: {{ y }}
    Is Outside: {{ isOutside }}
  </div>
</template>


<style>
 .console {
  background-color: burlywood;
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
} 
</style>