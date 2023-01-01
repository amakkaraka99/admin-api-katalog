<template>
  <footer class="bg-dark text-center text-white" id="jarak">
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © {{ year }}
      <a class="text-white" href="https://mdbootstrap.com/"
        >Admin E Catalog by amakkaraka</a
      >
    </div>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear();
</script>
<style scoped>
#jarak {
  margin-top: 100px;
}
</style>
