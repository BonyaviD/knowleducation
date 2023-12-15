<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const target: Ref<HTMLElement | null> = ref(null)
const eye: Ref<HTMLElement | null> = ref(null)


const { isOutside } = useMouseInElement(target)

const x = ref('')
const y = ref('')

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    if (!eye.value) return
    const rect = eye.value.getBoundingClientRect();
    x.value = (e.pageX - rect.left) / 6 + "px";
    y.value = (e.pageY - rect.top) / 6 + "px";
  });
})
</script>

<template>
  <li class="flex items-center mr-8" ref="target">
    <div  class="bg-emerald-400 w-6 h-6 rounded-full flex items-center justify-center ml-2 mr-1.5">
      <div class="bg-slate-50 w-3 h-3 rounded-full flex items-center justify-center relative">
        <span class="bg-slate-700 rounded-full w-1.5 h-1.5 absolute top-1 left-1" ref="eye"
        :style="isOutside ? 'transition: all 0.3s' : `transform: translate3d(${x},${y}, 0px)`"></span>
      </div>
    </div>
    <h2 class="text-gray-600 text-xs">Knowleducation</h2>
  </li>
</template>