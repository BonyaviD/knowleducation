<script setup lang="ts">

</script>

<template>
  <div class=" bg-slate-100">
    <div class="flex justify-between items-center py-10 custom-container px-16">
      <ul class="flex flex-col">
        <li class=" w-56 h-28 flex items-center justify-between rounded-lg shadow-md px-4 mb-5 bg-slate-50 group">
          <div class="bg-background relative w-16 h-16 rounded-full">
            <img class="transition-all duration-2000 ease-in-out w-8 left-3 bottom-2 absolute group-hover:-rotate-12" src="../assets/img/hand-0.png" alt="">
          </div>
          <div>
            <h4 class="text-sm text-slate-700">Zeroth reason</h4>
            <span class="text-xs text-slate-400">Lorem ipsum dolor.</span>
          </div>
        </li>
        <li class="w-56 h-28 flex items-center justify-between rounded-lg shadow-md px-4 mb-5 bg-slate-50 group">
          <div class="bg-background relative w-16 h-16 rounded-full">
            <img class="transition-all duration-2000 ease-in-out w-8 left-3 bottom-2 absolute group-hover:-rotate-12" src="../assets/img/hand-1.png" alt="">
          </div>
          <div>
            <h4 class="text-sm text-slate-700">First reason</h4>
            <span class="text-xs text-slate-400">Lorem ipsum dolor.</span>
          </div>
        </li>
        <li class="w-56 h-28 flex items-center justify-between rounded-lg shadow-md px-4 bg-slate-50 group">
          <div class="bg-background relative w-16 h-16 rounded-full">
            <img class="transition-all duration-2000 ease-in-out w-8 left-3.5 bottom-2 absolute group-hover:-rotate-12" src="../assets/img/hand-2.png" alt="">
          </div>
          <div>
            <h4 class="text-sm text-slate-700">Second reason</h4>
            <span class="text-xs text-slate-400">Lorem ipsum dolor.</span>
          </div>
        </li>

      </ul>
      <div class="w-8/12">
        <div class="flex mb-2">
          <h4 class="text-2xl text-slate-600 relative z-10">Choose knowleducation over</h4>
          <div class="relative mx-2">
            <span class="absolute bottom-6 -left-2 text-xl text-emerald-400 -rotate-45">ALL</span>
            <span class="left-moon absolute top-4 -left-4
            before:bg-emerald-400
            after:bg-slate-100"></span>
            <span class="right-moon absolute
              before:bg-emerald-400
            after:bg-slate-100 ">

            </span>
          </div>
          <h4 class="text-2xl text-slate-700 relative z-10">others...!</h4>
        </div>
        <p class="text-xs text-slate-400 font-sans leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta fugiat est unde pariatur, excepturi ullam. Officiis
          quidem distinctio porro alias quam laboriosam animi minus
          architecto, tempora asperiores excepturi quo qui quas dignissimos
          omnis cupiditate nesciunt dolore officia ea quis eum neque ad.
          Nesciunt voluptate dolorum inventore! Consequatur eligendi totam
          labore voluptatem distinctio explicabo adipisci cupiditate ipsam
          dolorem placeat inventore, perspiciatis, vero doloremque dolorum
          sapiente illo delectus repellendus qui culpa temporibus vitae voluptates?
          us repellendus qui culpa temporibus vitae voluptates?us repellendus 
          qui culpa temporibus vitae voluptates?
        </p>
      </div>
    </div>
  </div>
</template>

<style>

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
  top: 15px;
  left: 4px;

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