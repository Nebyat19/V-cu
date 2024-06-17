<template>
  <div class="py-3 relative mx-auto h-screen bg-pageBackground">
    <ButtonBack />
    <div class="flex justify-center items-center h-full">
      <div class="flex flex-col justify-between items-center text-center">
        <svg
          class="w-10 h-10"
          data-slot="icon"
          aria-hidden="true"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <h1>Oops! You're on an Unfinished Page!</h1>

        <router-link to="/home"
          ><button class="px-3 py-2 border mt-2 border-b-textBlack rounded-lg">
            Go Back
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import ButtonBack from '@/components/ui/ButtonBack.vue'
</script>
