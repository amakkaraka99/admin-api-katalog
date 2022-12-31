<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
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
    "https://api-app.herianto.xyz/api/katalogs",
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
            <form @submit.prevent="">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="state.title"
                />
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  v-model="state.price"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="state.description"
                />
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <input
                  type="text"
                  class="form-control"
                  id="category"
                  v-model="state.category"
                />
              </div>
              <div class="form-group">
                <label for="image">Image</label>
                <div v-if="state.image" class="mx-auto text-center my-2">
                  <img :src="state.image" alt="" class="img-thumbnail" />
                </div>
                <input
                  type="file"
                  class="form-control"
                  id="image"
                  @change="uploadImage"
                />
              </div>
              <div class="form-group">
                <label for="rate">Rate</label>
                <input
                  type="number"
                  class="form-control"
                  id="rate"
                  v-model="state.rate"
                />
              </div>
              <div class="form-group">
                <label for="count">Count</label>
                <input
                  type="number"
                  class="form-control"
                  id="count"
                  v-model="state.count"
                />
              </div>
              <div class="form-group">
                <label for="nohp">No HP</label>
                <input
                  type="text"
                  class="form-control"
                  id="nohp"
                  v-model="state.nohp"
                />
              </div>
              <div>
                <button class="btn btn-primary mt-4" @click="createData">
                  Create
                </button>
                <button class="btn btn-danger mt-4 ms-2" type="reset">
                  Reset
                </button>
              </div>
            </form>
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
