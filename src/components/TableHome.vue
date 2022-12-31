<template>
  <table class="table table-bordered table-hover align-middle">
    <thead class="bg-primary">
      <tr class="py-3 text-white">
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Category</th>
        <th>Image</th>
        <th>Rate</th>
        <th>Count</th>
        <th>No Hp</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.category }}</td>
        <td>
          <img :src="item.image" :alt="item.title" />
        </td>
        <td>{{ item.rate }}</td>
        <td>{{ item.count }}</td>
        <td>{{ item.nohp }}</td>
        <td>
          <router-link :to="'/edit/' + item.id" class="btn btn-warning"
            >Edit</router-link
          >
          <button
            type="button"
            class="btn btn-danger"
            @click="removeData(item.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot class="bg-primary">
      <tr class="py-3 text-white">
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Category</th>
        <th>Image</th>
        <th>Rate</th>
        <th>Count</th>
        <th>No Hp</th>
        <th>Action</th>
      </tr>
    </tfoot>
  </table>
</template>
<script setup>
defineProps(["data", "removeData"]);
</script>
<style scoped>
img {
  width: 70px;
  height: 70px;
}
</style>
