<script setup lang="ts">

</script>

<template>
  <div class=" bg-slate-100">
    <div class="flex justify-between items-center py-8 custom-container px-10">
      <ul class="flex flex-col">
        <li class="w-56 h-24 flex items-center justify-between rounded-lg shadow-md px-4 mb-5 bg-slate-50">
          <div class="bg-yellow-100 relative w-16 h-16 rounded-full">
            <img class="w-8 left-3 bottom-2 absolute" src="../assets/img/hand-0.png" alt="">
          </div>
          <div>
            <h4 class="text-sm text-slate-700">Zeroth reason</h4>
            <span class="text-xs text-slate-400">Lorem ipsum dolor.</span>
          </div>
        </li>
        <li class="w-56 h-24 flex items-center justify-between rounded-lg shadow-md px-4 mb-5 bg-slate-50">
          <div class="bg-yellow-100 relative w-16 h-16 rounded-full">
            <img class="w-8 left-3 bottom-2 absolute" src="../assets/img/hand-1.png" alt="">
          </div>
          <div>
            <h4 class="text-sm text-slate-700">First reason</h4>
            <span class="text-xs text-slate-400">Lorem ipsum dolor.</span>
          </div>
        </li>
        <li class="w-56 h-24 flex items-center justify-between rounded-lg shadow-md px-4 bg-slate-50">
          <div class="bg-yellow-100 relative w-16 h-16 rounded-full">
            <img class="w-8 left-3.5 bottom-2 absolute" src="../assets/img/hand-2.png" alt="">
          </div>
          <div>
            <h4 class="text-sm text-slate-700">Second reason</h4>
            <span class="text-xs text-slate-400">Lorem ipsum dolor.</span>
          </div>
        </li>

      </ul>
      <div class="matn">
        <div class="flex">
          <h4 class="text-2xl text-slate-700 mb-5 relative z-10">Choose knowleducation over</h4>
          <div class="relative mx-2">
            <span class="absolute bottom-11 -left-2 text-xl text-emerald-400 -rotate-45">ALL</span>
            <span class="left-moon absolute top-5 -left-5
            before:bg-emerald-400
            after:bg-slate-100"></span>
            <span class="right-moon absolute  before:bg-emerald-400
            after:bg-slate-100">
            </span>
          </div>
          <h4 class="text-2xl text-slate-700 mb-5 relative z-10">others...!</h4>
        </div>
        <p class="text-xs text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
  </div>
</template>

<style>
.matn {
  width: 500px;

}


.left-moon::before {
  content: '';
  position: absolute;
  top: 0px;
  left: -2px;
  width: 16px;
  height: 22px;
  border-radius: 100%;
  transform: rotate(30deg);
}

.left-moon::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -3px;
  width: 14px;
  height: 24px;
  border-radius: 12px;
  transform: rotate(30deg);
}

.right-moon {
  top: 21px;
  left: 1px;

}

.right-moon::before {
  content: '';
  position: absolute;
  top: 1px;
  left: -2px;
  width: 16px;
  height: 22px;
  border-radius: 100%;
  transform: rotate(150deg);
}

.right-moon::after {
  content: '';
  position: absolute;
  top: -1px;
  left: 1px;
  width: 14px;
  height: 24px;
  border-radius: 12px;
  transform: rotate(150deg);
}
</style>