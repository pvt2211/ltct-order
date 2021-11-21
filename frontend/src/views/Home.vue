<template>
  <div class="home container">
    <Orders :orders="orders"/>
  </div>
</template>

<script>
// @ is an alias to /src
import orderList from '../../order'
import Orders from '../components/Orders.vue'

export default {
  name: "Home",
  components: {
    Orders,
  },
  data() {
    return {
      orders: []
    }
  },
  created() {
    this.orders = orderList;
  }
};
</script>
