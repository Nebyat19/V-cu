<template>
<app-container>
  {{ telegramId }}
  <router-view></router-view>
</app-container>
<tg-alert message="Hello!" />
</template>

<script setup>
import { onMounted } from 'vue'



</script>

