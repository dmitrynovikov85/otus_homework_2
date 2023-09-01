<script setup>
import { onMounted, ref } from 'vue';
import ProductItem from './ProductItem.vue';
import getProductList from '../services/index.js';

const productList = ref([]);
onMounted(async () => {
  productList.value = await getProductList();
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
