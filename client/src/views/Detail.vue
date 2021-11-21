<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Detail',
  data() {
    return {
      order : {}
    }
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
}
</script>
