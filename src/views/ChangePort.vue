<template>
    <div class="py-3 relative px-4 mx-auto h-screen bg-pageBackground">
      
      <div class="flex flex-col justify-center items-center h-full">
<ErrorIcon/>
<h2>Change To Telegram</h2>
<VButton padding="2" rounded="roundedLg" class="mt-5" ><a   href="https://t.me/">Telegram</a> </VButton>

      </div>
    </div>
</template>

<script setup>
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import VButton from '@/components/ui/VButton.vue'
</script>

