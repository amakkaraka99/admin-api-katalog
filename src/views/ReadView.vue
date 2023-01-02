<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();

const id = ref(route.params.id);
const dataById = ref({});
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
const getData = async () => {
  const response = await axios.get(
    `https://api-app.herianto.xyz/api/katalogs/${id.value}`
  );
  state.title = response.data.data.title;
  state.price = response.data.data.price;
  state.description = response.data.data.description;
  state.category = response.data.data.category;
  state.image = response.data.data.image;
  state.rate = response.data.data.rate;
  state.count = response.data.data.count;
  state.nohp = response.data.data.nohp;
  dataById.value = response.data.data;
  console.log(response.data);
};
onMounted(() => {
  getData();
});
</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="text-center mt-5">Detail Produk</h1>

      <div class="col-md-6 text-center">
        <img
          :src="state.image"
          alt=""
          class="img-fluid mt-5 img-thumbnail rouded shadow"
        />
      </div>
      <div class="col-md-6 mt-5">
        <h1>Title: {{ state.title }}</h1>
        <p>Desc: {{ state.description }}</p>
        <p>Price: Rp.{{ parseInt(state.price).toLocaleString() }}</p>
        <p>Kategori: {{ state.category }}</p>
        <p>Rate: {{ state.rate }}</p>
        <p>Count: {{ state.count }}</p>
        <p>No Hp : {{ state.nohp }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-">
        <button class="btn btn-warning">
          <router-link to="/">&laquo;Back</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
