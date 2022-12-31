import { defineStore } from "pinia";
import router from "../router";
import { auth } from "../firebase/index";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref } from "vue";

export const useAuthStore = defineStore("user", () => {
  const user = ref(null);
  const error = ref(null);

  const SET_USER = (i) => {
    user.value = i;
  };
  const CLEAR_USER = () => {
    user.value = null;
  };

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      user.value = res.user;
      SET_USER(auth.currentUser);
      router.push("/");
    } catch (err) {
      error.value = err.message;
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      CLEAR_USER();
      router.push("/login");
    } catch (err) {
      error.value = err.message;
    }
  };

  const fecthUser = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user === null) {
        CLEAR_USER();
        router.push("/login");
      } else {
        SET_USER(user);
        if (router.isReady() && router.currentRoute.value.path === "/login") {
          router.push("/");
        }
      }
    });
  };

  return { user, error, SET_USER, CLEAR_USER, login, logout, fecthUser };
});
