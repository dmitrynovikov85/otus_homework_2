<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ProductItem from './ProductItem.vue';

const productList = ref([]);
onMounted(async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  productList.value = res.data;
});
</script>

<template>
  <div class="wrapper_products">
    <ProductItem v-for="product in productList" :key="product.id" :product="product"/>
  </div>
</template>

<style scoped>
.wrapper_products {
  display: flex;
  flex-wrap: wrap;
}
</style>
