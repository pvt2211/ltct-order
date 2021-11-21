<template>
    <div>
        <div class="form-outline mb-4">
            <input type="search" class="form-control" placehoder="saasa" id="datatable-search-input">
        </div>
        <div :key="order.id" v-for="order in orders">
            <Order :order="order" />
        </div>
    </div>
</template>

<script>
import Order from './Order.vue'
export default {
    name: 'Orders',
    props: {
        orders: Array,
    },
    components: {
        Order,
    }
}
</script>

<style scoped>
</style>