<template>
  <div class="not-found">
    <div class="d-flex align-items-center justify-content-center bg-light">
      <h1 class="display-1 fw-bold text-dark">404 Not Found</h1>
    </div>
    <div class="row justify-content-center">
      <span class="col-md-6 text-center">
        <button class="btn btn-outline-warning display-1" @click="back">
          Back To Home
        </button>
      </span>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const back = () => {
  router.push("/");
};
</script>
<style scoped>
.not-found {
  margin-top: 150px;
}
</style>
