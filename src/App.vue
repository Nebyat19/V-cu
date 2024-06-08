<template>
<app-container>
  {{ telegramId }}
  <router-view></router-view>
</app-container>
</template>

<script setup>
import { onMounted } from 'vue'
import configApp from  './configApp.js'

const { getTelegram, setupBackButton, toggleBackButton, telegramId } = configApp()

onMounted(() => {
  setupBackButton()
 // toggleBackButton()
  getTelegram()
})
</script>

