<script setup lang="ts">
import LoadedCard from './LoadedCourseCard.vue';
import LoadingCard from '../components/LoadingCourseCard.vue'
</script>

<template>
  <div class="py-8 bg-slate-200">
    <div class="custom-container px-10">
      <h2 class="text-xl text-slate-700 mb-5">Our Courses</h2>
      <ul class="flex items-center flex-wrap gap-4">
        <LoadedCard />
        <LoadedCard />
        <LoadedCard />
        <LoadedCard />
        <LoadedCard />
        <LoadedCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </ul>
    </div>
  </div>
</template>

<style></style>