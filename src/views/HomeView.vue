<script setup lang="ts">
import TheNavbar from '../components/TheNavbar.vue'
import LearnEdgeSection from '../components/LearnEdgeSection.vue'
</script>

<template>
  <TheNavbar />
  <LearnEdgeSection />

  <div class="section2">
    <ul class="cards">
      <li>
        <div class="image"><img class="imagee" src="../assets/img/hand-0.png" alt=""></div>
        <div>
          <h4>Zeroth reason</h4>
        <span>Lorem ipsum dolor.</span>
        </div>
      </li>
      <li>
        <div class="image"><img class="imagee" src="../assets/img/hand-1.png" alt=""></div>
        <div>
          <h4>Zeroth reason</h4>
        <span>Lorem ipsum dolor.</span>
        </div>
      </li>
      <li>
        <div class="image"><img class="imagee" src="../assets/img/hand-2.png" alt=""></div>
        <div>
          <h4>Zeroth reason</h4>
        <span>Lorem ipsum dolor.</span>
        </div>
      </li>
    </ul>
    <div>
      <h4>Choose knowleducation over <span>ALL</span> <span></span> others...!</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Soluta fugiat est unde pariatur, excepturi ullam. Officiis
         quidem distinctio porro alias quam laboriosam animi minus 
         architecto, tempora asperiores excepturi quo qui quas dignissimos
          omnis cupiditate nesciunt dolore officia ea quis eum neque ad.
           Nesciunt voluptate dolorum inventore! Consequatur eligendi totam
            labore voluptatem distinctio explicabo adipisci cupiditate ipsam 
            dolorem placeat inventore, perspiciatis, vero doloremque dolorum
             sapiente illo delectus repellendus qui culpa temporibus vitae voluptates?
             </p>
    </div>
  </div>
</template>

<style>
.section2 {
width: 100%;
display: flex;
/* justify-content: space-evenly; */
background-color: brown;
}
.cards {
display: flex;
flex-direction: column;
}
.cards li {
  width: 220px;
  height: 120px;
  background-color: burlywood;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: chocolate;
}
.imagee {
  position: absolute;
  top: -15px;
  left: 20px;
  width: 35px;
}

</style>
