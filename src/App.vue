<script setup>
import { onBeforeMount } from "vue";
import { useAuthStore } from "./stores/authFire";

const authStore = useAuthStore();

onBeforeMount(() => {
  authStore.fecthUser();
});
</script>
<template>
  <div id="app">
    <router-view />
  </div>
</template>
