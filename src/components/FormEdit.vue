<template>
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
      <input type="text" class="form-control" id="nohp" v-model="state.nohp" />
    </div>
    <div>
      <button class="btn btn-primary mt-4" @click="updateData">Update</button>
      <button class="btn btn-danger mt-4 ms-2" type="button" @click="cancel">
        Cancel
      </button>
    </div>
  </form>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
defineProps(["updateData", "uploadImage", "state"]);

const cancel = () => {
  router.push("/");
};
</script>
