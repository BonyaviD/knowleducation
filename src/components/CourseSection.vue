<script setup lang="ts">
import LoadedCard from './LoadedCourseCard.vue';
import LoadingCard from '../components/LoadingCourseCard.vue'
</script>

<template>
  <div class="py-10 bg-slate-200">
    <div class="custom-container px-16">
      <h2 class="text-2xl text-slate-600 mb-4">Our Courses</h2>
      <ul class="flex items-center flex-wrap gap-5">
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