<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center mb-5 align-middle">
          <h1 class="text-white mb-1 mt-1">hallo</h1>
          <p v-if="error" class="alert alert-danger">{{ error }}</p>
          <div class="card mt-5 p-3 rounded shadow" id="tengah">
            <form @submit.prevent="login">
              <img
                class="mb-4"
                src="../assets/logo.png"
                alt=""
                width="72"
                height="57"
              />
              <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <p class="mt-5 mb-3 text-muted">&copy; 2021–2022</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { useAuthStore } from "../stores/authFire";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const error = computed(() => authStore.error);
const login = () => {
  authStore.login(email.value, password.value);
  router.push("/");
};
</script>
<style>
#tengah {
  margin-top: 100px;
}
</style>
