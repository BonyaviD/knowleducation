<script setup lang="ts">
import LoadedCard from './CourseCard.vue';

</script>

<template>
  <div class="py-8 bg-slate-200">
    <div class="custom-container px-10">
      <h2 class="text-xl text-slate-700 mb-5">Our Courses</h2>
      <ul class="cards flex items-center flex-wrap gap-4">
        <LoadedCard />
        <LoadedCard />
        <LoadedCard />
        <li class="loading">
          <div class="image"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>


.loading {
  background-color: antiquewhite;
  padding: 8px;
  width: 230px;
  height: 300px;
  border-radius: 8px;
}

.loading .image {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: cadetblue;
  border-radius: 4px;
  margin-bottom: 10px;
}


</style>