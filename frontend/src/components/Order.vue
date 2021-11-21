<template>
    <div class="order">
        <div class="order_status">
            <span class="delivery_status">{{order.delivery.status}}</span>
            <span class="order_status--text"> {{order.status}}</span>
        </div>
        <div class="ordered_products">
            <div :key="product.id" v-for="product in productsInAnOrder">
            <Product :product="product"/>
        </div>
        </div>
        <div class="total_price">
            <div class="text" style="font-size:20px">Tổng số tiền :</div>
            <div class="total_value">{{order.totalValue}}</div>
        </div>
        <div class="button">
            <button class="btn">Đặt lại</button>
        </div>
    </div>
</template>

<script>
import Product from './Product.vue'
export default {
    name: 'Order',
    components: {
        Product
    },
    props: {
        order: Object
    },
    computed: {
        productsInAnOrder() {
            return this.order.products;
        }
    },
}
</script>

<style scoped>
.order {
    background: #fff;
    margin: 15px;
    padding: 10px 20px;
    cursor: pointer;
    padding: 40px;
}
.order_status {
    display: flex;
    justify-content: flex-end;
}
.delivery_status {
    color: #24ab98;
    border-right: 1px solid #8e8787;
    padding-right: 10px;
    margin-right: 10px;
}

.order_status--text {
    color: #FE6231;
    text-transform: uppercase;
}

.ordered_products {
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    padding: 15px 0;
    margin: 8px 0;
}

.total_price {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    text-align: center;
}

.total_value {
    font-size: 30px;
    font-weight: 400;
    color: #FE6231;
    margin-left: 20px;
}

.text {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.btn {
    background-color: #F53F2D;
    color: white;
    font-weight: 600;
    padding: 10px 40px;
    font-size: 15px;
}

.btn:active {
    transform: scale(0.98);
}

.button {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

</style>