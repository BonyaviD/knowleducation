<script setup lang="ts">
import {onMounted, ref} from 'vue'
import type {Ref} from 'vue'
import {useMouseInElement} from '@vueuse/core'

const target: Ref<HTMLElement | null> = ref(null)
const eye: Ref<HTMLElement | null> = ref(null)


const {isOutside} = useMouseInElement(target)

const x = ref('')
const y = ref('')

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    if (!eye.value) return
    const rect = eye.value.getBoundingClientRect();
    x.value = (e.pageX - rect.left) / 4 + "px";
    y.value = (e.pageY - rect.top) / 4 + "px";
  });
})
</script>

<template>
    <div ref="target"
         class="bg-emerald-400 w-52 h-52 rounded-full flex justify-center items-center relative right-10 bottom-12">
      <div class="bg-slate-200 w-32 h-32 rounded-full flex justify-center items-center relative" >
      <span class="bg-slate-600 w-16 h-16 rounded-full flex justify-center items-center absolute"
        ref="eye"
         :style="isOutside ? 'transition: all 0.3s' : `transform: translate3d(${x},${y}, 0px)`">
        <span class="bg-slate-500 w-4 h-4 rounded-full relative left-2 bottom-2"></span>
      </span>
      </div>
    </div>
</template>


<style>

</style>