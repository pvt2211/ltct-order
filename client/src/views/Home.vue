<template>
  <div>
    <Header />
    <div class="container mt-4">
      <b-form-input
        v-model="textFilter"
        placeholder="Tìm kiếm theo tên sản phẩm"
        class="mt-3 mb-3"
      ></b-form-input>
      <b-tabs
        v-model="tabs.value"
        justified
        active-nav-item-class="font-weight-bold text-uppercase text-danger"
        content-class="mt-3"
      >
        <b-tab
          v-for="(tab, index) in tabs.options"
          :key="index"
          :title="tab"
          :active="index === 0"
        >
          <template v-if="ordersFilterWithSearch.length">
            <div
              v-for="(order, index) in ordersFilterWithSearch"
              :key="`order${index}`"
              class="d-flex border-top border-bottom p-2 cursor-pointer"
              @click="goToDetail(order.id)"
            >
              <img :src="order.picture" alt="" class="orders-img mr-2" />
              <div class="d-flex justify-content-between w-100">
                <div class="mr-4 col-8 text-left">
                  <div>{{ order.name }}</div>
                  <div class="text-small">{{ 'Phân loại hàng: ' + order.color + ' , ' + 'Size ' + order.size }}</div>
                  <div>{{ 'Số lượng : ' +  order.quantity }}</div>
                </div>
                <div class="d-flex flex-column justify-content-between col-4 text-right">
                  <div class="text-danger text-bold">{{ orderStateMap(order.state) }}</div>
                  <div class="text-xx">
                    <span class="text-line mr-2">{{ order.price * order.quantity }}</span>
                    <span class="text-danger text-bold mr-1">{{ order.price * order.promote / 100 * order.quantity  }}</span>
                    <span class="text-small text-bold">{{ `đồng` }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <div v-else>Không có kết quả gì</div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Header from '../components/Header.vue'
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Header,
  },
  data() {
    return {
      orders: [],
      textFilter: "",
      tabs: {
        options: [
          "Tất cả",
          "Chờ xác nhận",
          "Đang giao hàng",
          "Đã giao hàng",
          "Đã hủy",
        ],
        value: 1,
      },
    };
  },
  async created() {
    const res = await axios({
      method: "get",
      url: "http://localhost:3000/orders",
    });
    if (res.status === 200) {
      this.orders = res.data;
    }
  },
  computed: {
    ordersFilter() {
      if (this.orders.length) {
        if (this.tabs.value === 0) {
          return this.orders;
        } else if (this.tabs.value === 1) {
          return this.orders.filter((order) => order.state === 1);
        } else if (this.tabs.value === 2) {
          return this.orders.filter((order) => order.state === 2);
        } else if (this.tabs.value === 3) {
          return this.orders.filter((order) => order.state === 3);
        } else if (this.tabs.value === 4) {
          return this.orders.filter((order) => order.state === 4);
        } else {
          return this.orders;
        }
      } else {
        return [];
      }
    },
    ordersFilterWithSearch() {
      if (!this.textFilter) {
        return this.ordersFilter;
      } else if (!this.ordersFilter.length) {
        return [];
      } else {
        return this.ordersFilter.filter((order) =>
          order.name.includes(this.textFilter)
        );
      }
    },
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
    goToDetail(id) {
      this.$router.push({path: 'detail', query: {id}})
    }
  },
};
</script>

<style scoped>
.orders-img {
  width: 80px;
  height: 80px;
}
</style>
