import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../components/Catalog.vue';
import Product from '../components/Product.vue';

const routes = [
    {
        path: '/',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'Product',
        props: true
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;