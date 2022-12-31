<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fs-5">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" id="thum" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink class="nav-link active" aria-current="page" to="/"
            >Home</RouterLink
          >
          <a class="nav-link" href="#">About</a>
          <!-- <a class="nav-link" href="#"></a> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ user?.email }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Profil</a></li>
              <li>
                <button
                  class="dropdown-item btn btn-danger btn-sm"
                  href="#"
                  @click="logout"
                >
                  LogOut
                </button>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useAuthStore } from "../stores/authFire";
import { computed } from "vue";

const authStore = useAuthStore();
const user = computed(() => authStore.user);
const logout = () => {
  authStore.logout();
};
</script>
<style scoped>
#thum {
  width: 50px;
  height: 50px;
}
</style>
