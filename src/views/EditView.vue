<script setup>
import { reactive, onMounted, ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import FormEdit from "../components/FormEdit.vue";
const router = useRouter();
const route = useRoute();
const id = route.params.id;
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
const uploadImage = async (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    state.image = reader.result;
  };
  console.log(state.image.length);
};
const getData = async () => {
  const response = await axios.get(
    `https://api-app.sman9luwuutara.sch.id/api/katalogs/${id}`
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

const updateData = async () => {
  const response = await axios.put(
    `https://api-app.sman9luwuutara.sch.id/api/katalogs/${id}`,
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
          <h2 class="text-center">Update Products</h2>
          <div class="card p-5 mt-3 rouded shadow">
            <FormEdit
              :state="state"
              :uploadImage="uploadImage"
              :updateData="updateData"
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
