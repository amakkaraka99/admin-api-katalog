<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import FormCreate from "../components/FormCreate.vue";
const router = useRouter();

const state = reactive({
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
  rate: "",
  count: "",
  nohp: "",
});
const uploadImage = async (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    state.image = reader.result;
  };
  console.log(state.image.length);
};
const createData = async () => {
  const response = await axios.post(
    "https://api-app.sman9luwuutara.sch.id/api/katalogs",
    {
      title: state.title,
      price: state.price,
      description: state.description,
      category: state.category,
      image: state.image,
      rate: state.rate,
      count: state.count,
      nohp: state.nohp,
    }
  );
  console.log(response);
  router.push("/");
};
</script>
<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <button class="btn btn-warning text-white mt-4">
            <router-link to="/">&laquo;Back</router-link>
          </button>
          <h2 class="text-center">Create Products</h2>
          <div class="card p-5 mt-3 rouded shadow">
            <FormCreate
              :state="state"
              :uploadImage="uploadImage"
              :createData="createData"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
