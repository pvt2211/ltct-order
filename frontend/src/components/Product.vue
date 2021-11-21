<template>
    <div>
        <img :src= product.img alt="">
        <div class="ordered_product_info">
            <h5>{{ product.name }}</h5>
            <p>x {{ product.amount }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        product: Object
    },
}
</script>

<style scoped>
img {
    width: 75px;
    height: 75px;
    border: 1px solid #f5f5f5;
}
div {
    display: flex;
}
.ordered_product_info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>
