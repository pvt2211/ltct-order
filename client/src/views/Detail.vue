<template>
  <div class="container pt-4 detail-container">
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
        <div
          class="
            text-xx
            p-3
            d-flex
            align-items-center
            bg-info
            text-light
            rounded
          "
        >
          <span class="text-line text-md mr-2">{{
            order.price * order.quantity
          }}</span>
          <span class="text-danger text-bold mr-1">{{
            ((order.price * order.promote) / 100) * order.quantity
          }}</span>
          <span class="text-small text-bold mr-2">{{ `đồng` }}</span>
          <span class="text-small bg-danger text-light text-bold p-1 rounded">{{
            `giảm` + order.promote + "%"
          }}</span>
        </div>
        <div class="pl-3 d-flex align-items-center mt-3 mb-2">
          <span class="text-label col-3 p-0">Màu sắc</span>
          <span class="col-9 p-0">{{ order.color }}</span>
        </div>
        <div class="pl-3 d-flex align-items-center pt-2 pb-2">
          <span class="text-label col-3 p-0">Kích thước</span>
          <span class="col-9 p-0">{{ order.size }}</span>
        </div>
        <div class="pl-3 d-flex align-items-center pt-2 pb-2">
          <span class="text-label col-3 p-0">Số lượng</span>
          <span class="col-9 p-0">{{ order.quantity }}</span>
        </div>
        <div class="pl-3 d-flex pt-2 pb-2">
          <span class="text-label col-3 p-0">Mô tả</span>
          <span class="col-9 p-0">{{ order.description }}</span>
        </div>
        <div class="pl-3 d-flex align-items-center pt-2 pb-2">
          <span class="text-label col-3 p-0">Địa chỉ</span>
          <span class="col-7 p-0">{{ order.address }}</span>
        </div>
        <div class="pl-3 d-flex align-items-center pt-2 pb-2">
          <span class="text-label col-3 p-0">Số điện thoại</span>
          <span class="col-9 p-0">{{ order.phoneNumber }}</span>
        </div>
        <div class="pl-3 d-flex align-items-center pt-2 pb-2">
          <span class="text-light bg-success rounded p-2" :class="{'bg-danger': order.state === 4}">{{
            orderStateMap(order.state)
          }}</span>
        </div>
        <div v-if="order.state === 1" class="text-right mt-3">
          <b-button variant="danger" @click="cancelOrder">Hủy đơn</b-button>
        </div>
        <div v-if="order.state === 4" class="text-right">
          <b-button variant="primary" @click="reOrder">Đặt lại đơn</b-button>
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
    await this.getOrder();
  },
  methods: {
    orderStateMap(state) {
      if (state === 1) {
        return "Chờ xác nhận";
      } else if (state === 2) {
        return "Đang giao";
      } else if (state === 3) {
        return "Đã giao";
      } else if (state === 4) {
        return "Đã hủy";
      } else {
        return "Chờ xác nhận";
      }
    },
    async cancelOrder() {
      const res = await axios({
        method: "put",
        url: `http://localhost:3000/orders/${this.$route.query.id}`,
        data: {
          state: "4",
        },
      });
      if (res.status === 200) {
        await this.getOrder()
      }
    },
    async getOrder() {
      const res = await axios({
        method: "get",
        url: `http://localhost:3000/orders/${this.$route.query.id}`,
      });
      if (res.status === 200) {
        this.order = res.data;
      }
    },
    async reOrder() {
      const res = await axios({
        method: "put",
        url: `http://localhost:3000/orders/${this.$route.query.id}`,
        data: {
          state: "1",
        },
      });
      if (res.status === 200) {
        await this.getOrder()
      }
    }
  },
};
</script>

<style scoped>
.detail-img {
  width: 450px;
  height: 450px;
}


.detail-container {
  background-color: azure;
}
</style>
