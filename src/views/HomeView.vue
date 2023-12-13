<script setup lang="ts">
import TheNavbar from '../components/TheNavbar.vue'
import LearnEdgeSection from '../components/LearnEdgeSection.vue'
import HandSection from '../components/HandSection.vue'
</script>

<template>
  <TheNavbar />
  <LearnEdgeSection />
  <HandSection />
  <div class="our-course bg-slate-200">
    <div class="content">
      <h2 class="title">Our Courses</h2>
      <ul class="cards">
        <li class="bg-slate-100">
          <div class="image bg-slate-50"><span>IMAGE</span></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing elit.</p>
        </li>
        <li class="bg-slate-100">
          <div class="image bg-slate-50"><span>IMAGE</span></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing elit.</p>
        </li>
        <li class="bg-slate-100">
          <div class="image bg-slate-50"><span>IMAGE</span></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing elit.</p>
        </li>
   <li class="loading">
<div class="image"></div>
   </li>
      </ul>
    </div>
  </div>
</template>

<style>
.our-course {

  padding: 1.5rem 0;
  min-height: 50vh;
}
.title {
  font-size: 1.4rem;
  margin-bottom: 12px;
}
.content {
  margin: 0 auto;
  width: 90%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
  gap: 15px;
}

.cards li {
  /* background-color: antiquewhite; */
  padding: 8px;
  width: 230px;
  height: 300px;
  border-radius: 8px;
}
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
.cards li .image {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: cadetblue; */
  border-radius: 4px;
  margin-bottom: 10px;
}
.cards li .image span {
  font-size: 1.6rem;
 }
p {
  font-size: 0.9rem;
  font-family: sans-serif;
}
</style>
