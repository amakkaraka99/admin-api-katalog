<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import TableHome from "../components/TableHome.vue";

const data = ref([]);

const getData = async () => {
  const response = await axios.get("https://api-app.herianto.xyz/api/katalogs");
  data.value = response.data.data;
};
onMounted(() => getData());
const removeData = async (id) => {
  const response = await axios.delete(
    `https://api-app.herianto.xyz/api/katalogs/${id}`
  );
  console.log(response);
  getData();
};
const page = ref(1);
const perPage = ref(5);
const total = ref(0);

const paginateData = computed(() => {
  const start = (page.value - 1) * perPage.value;
  const end = start + perPage.value;
  return data.value.slice(start, end);
});

const totalPage = computed(() => {
  return Math.ceil(data.value.length / perPage.value);
});
const nextPage = () => {
  if (page.value < totalPage.value) {
    page.value++;
  }
};
const prevPage = () => {
  if (page.value > 1) {
    page.value--;
  }
};
const changePage = (item) => {
  page.value = item;
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <router-link to="/create" class="btn btn-primary mb-3 mt-3"
          >Create</router-link
        >
        <div class="table-responsive text-center">
          <TableHome :data="paginateData" :removeData="removeData" />
          <div class="text-center">
            <button @click="prevPage" class="btn btn-outline-warning">
              &laquo;
            </button>
            <button
              v-for="item in totalPage"
              :key="item"
              @click="changePage(item)"
              class="btn btn-outline-warning"
            >
              {{ item }}
            </button>
            <button @click="nextPage" class="btn btn-outline-warning">
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
