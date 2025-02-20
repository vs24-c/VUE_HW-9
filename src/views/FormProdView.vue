<template>
  <form class="product">
    <label>
      Product Name:
      <input type="text" v-model="product.name" required />
    </label>
    <label>
      Price:
      <input type="number" v-model="product.price" required />
    </label>
    <label>
      Image URL:
      <input type="file" @change="onImageChange" />
      <div v-if="product.image" class="product__image">
        <img :src="getImagePath(product.image)" alt="Product Image" />
      </div>
    </label>
    <select v-show="!getProdId" v-model="selectedCategoryId">
      <option value="null" disabled>Select Category</option>
      <option v-for="category in allCategories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>

    <div class="product__buttons">
      <button type="button" @click="onBack">{{ saveTitle }}</button>
      <button type="button" @click="onBack">Back</button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FormProdView',
  data() {
    return {
      product: {
        name: '',
        price: null,
        image: null,
      },
      selectedCategoryId: null,
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    getProdId() {
      return this.$route.params.id
    },
    saveTitle() {
      return this.getProdId ? 'Save' : 'Create'
    },
    allCategories() {
      let categories = []
      this.getProducts.forEach((product) => {
        categories.push(product)
      })
      return categories
    },
  },
  methods: {
    ...mapActions(['loadProducts']),
    getImagePath(image) {
      return new URL(`../assets/images/${image}`, import.meta.url).href
    },
    onImageChange(event) {
      const file = event.target.files[0]
      if (file) {
        this.product.image = file.name
      }
    },
    onBack() {
      this.$router.go(-1)
    },
  },
  created() {
    if (!this.getProducts.length) {
      this.loadProducts()
    }

    if (this.getProdId) {
      const prodId = Number(this.getProdId)
      const category = this.getProducts.find((prod) =>
        prod.category.some((item) => item.id == prodId),
      )
      if (category) {
        this.product = category.category.find((item) => item.id == prodId)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 15px;
  padding: 25px 0;
}

.product__image {
  position: relative;
  width: 150px;
  padding-bottom: 150px;
  overflow: hidden;
  img {
    position: absolute;
    inset: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}

label {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 600;
  line-height: 1.3;
  color: purple;
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 250px;
  }
}
select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 250px;
}

.product__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: purple;
    color: white;
    cursor: pointer;
  }
}
</style>
