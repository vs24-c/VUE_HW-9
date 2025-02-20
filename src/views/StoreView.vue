<template>
  <div class="wrapper">
    <h1>Список товарів</h1>
    <ul>
      <li @click="gooToProduct(category.id)" v-for="category in getProducts" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'StoryView',
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['loadProducts']),

    gooToProduct(category) {
      this.$router.push({
        name: 'product',
        params: { category },
      })
    },
  },
  created() {
    if (this.getProducts.length === 0) {
      this.loadProducts()
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px 0;
}
h1 {
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  line-height: 1.2;
  color: purple;
}
ul {
  list-style-type: none;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      color: red;
    }
  }
}
</style>
