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
          <button class="btn">
            <span>
              <i class="bi bi-eye"></i>
            </span>
          </button>
          <router-link :to="'/edit/' + item.id" class="btn">
            <span class="text-warning">
              <i class="bi bi-pencil-square"></i>
            </span>
          </router-link>
          <button type="button" class="btn" @click="removeData(item.id)">
            <span class="text-danger">
              <i class="bi bi-trash3"></i>
            </span>
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
