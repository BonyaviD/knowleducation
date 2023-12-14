<script setup lang="ts">
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import LearnEdgeSection from '../components/LearnEdgeSection.vue'
import CircleShape from '../components/CircleShape.vue';
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
<div class="bg-slate-200 pt-24 pb-10">
  <CircleShape ref="target" />
  
  <div ref="{ x, y, isOutside }">
    x: {{ x }}
    y: {{ y }}
    Is Outside: {{ isOutside }}
  </div>
  </div>
</template>