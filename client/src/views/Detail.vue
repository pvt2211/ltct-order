<template>
  <div class="container mt-4">
    <h2 class="text-left cursor-pointer" @click="$router.push({ path: '/' })">
      Đơn hàng
    </h2>
    <div class="d-flex p-2">
      <img :src="order.picture" alt="Image" class="detail-img mr-2" />
      <div class="w-100 ml-2 text-left">
        <div class="text-left text-bold">{{ order.name }}</div>
        <b-form-rating
          v-model="order.rating"
          disabled
          class="mt-2 mb-2"
        ></b-form-rating>
        <div class="text-xx p-3 d-flex align-items-center bg-info text-light rounded">
          <span class="text-line text-md mr-2">{{ order.price * order.quantity }}</span>
          <span class="text-danger text-bold mr-1">{{
            ((order.price * order.promote) / 100) * order.quantity
          }}</span>
          <span class="text-small text-bold mr-2">{{ `đồng` }}</span>
          <span class="text-small bg-danger text-light text-bold p-1 rounded">{{ `giảm` + order.promote + '%'  }}</span>
        </div>
        <div class="pl-3">
          <span class="text-label mr-5">Màu sắc</span>
          <span class="">{{ order.color }}</span>
        </div>
        <div class="pl-3 pt-2 pb-2">
          <span class="text-label mr-5">Kích thước</span>
          <span class="">{{ order.size }}</span>
        </div>
        <div class="pl-3 pt-2 pb-2">
          <span class="text-label mr-5">Số lượng</span>
          <span class="">{{ order.quantity }}</span>
        </div>
        <div class="pl-3 pt-2 pb-2">
          <span class="text-label mr-5">Mô tả</span>
          <span class="">{{ order.description }}</span>
        </div>
        <div class="pl-3 pt-2 pb-2">
          <span class="text-label mr-5">Địa chỉ</span>
          <span class="">{{ order.address }}</span>
        </div>
        <div class="pl-3 pt-2 pb-2">
          <span class="text-label mr-5">Số điện thoại</span>
          <span class="">{{ order.phoneNumber }}</span>
        </div>
        <div class="pl-3 pt-2 pb-2">
          <span class="text-light bg-danger rounded p-2">{{ orderStateMap(order.state) }}</span>
        </div>
        <div v-if="order.state === 1" class="text-left">
          <b-button variant="danger">Hủy đơn</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      order: {},
    };
  },
  async created() {
    const res = await axios({
      method: "get",
      url: `http://localhost:3000/orders/${this.$route.query.id}`,
    });
    if (res.status === 200) {
      this.order = res.data;
    }
  },
  methods: {
    orderStateMap(state) {
      if (state === 1) {
        return 'Chờ xác nhận'
      } else if (state === 2) {
        return 'Đang giao'
      } else if (state === 3) {
        return 'Đã giao'
      } else if (state === 4) {
        return 'Đã hủy'
      } else {
        return 'Chờ xác nhận'
      }
    },
  }
};
</script>

<style scoped>
.detail-img {
  width: 450px;
  height: 450px;
}


</style>
