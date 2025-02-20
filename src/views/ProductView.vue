<template>
  <div class="wrapper">
    <div class="card" v-for="prod in showCategory" :key="prod.id">
      <div class="card__image">
        <img :src="getImagePath(prod.image)" alt="" />
      </div>
      <div class="card__content">
        <h2 class="card__title">{{ prod.name }}</h2>
        <p class="card__price">{{ prod.price }} $</p>
        <div class="card__actions">
          <button @click="addToCart()">Add to Cart</button>
          <button @click="editProduct(prod.id)">Change to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProductView',
  computed: {
    ...mapGetters(['getProducts']),
    categoryId() {
      return this.$route.params.category
    },
    showCategory() {
      if (this.categoryId) {
        const products = this.getProducts.find((prod) => prod.id == this.categoryId)
        return products.category
      }
      return null
    },
  },
  methods: {
    ...mapActions(['loadProducts']),
    getImagePath(image) {
      return new URL(`../assets/images/${image}`, import.meta.url).href
    },
    addToCart() {
      this.$router.push({
        name: 'edit-add',
      })
    },
    editProduct(id) {
      this.$router.push({ name: 'edit-add', params: { id } })
    },
  },
  created() {
    if (!this.getProducts.length) {
      this.loadProducts()
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 25px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: auto;
  gap: 20px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: 1px solid #999;
  border-radius: 15px;
  padding: 20px 10px;
}

.card__image {
  position: relative;
  width: 320px;
  padding-bottom: 250px;
  overflow: hidden;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.card__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.card__title {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  color: #333;
}
.card__price {
  font-size: 18px;
  font-weight: bold;
  color: purple;
}

.card__actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #666;
    }
  }
}
</style>
