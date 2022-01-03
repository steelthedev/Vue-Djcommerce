<template>
  <div class="search-page pt-5">
    <div class="container mt-5">
      <div class="row mt-5">
        <div class="col-md-12 col-lg-12 text-center">
          You searched For "{{query}}"
        </div>
      </div>
    </div>
      <ProductBox 
          v-for="product in products"
        :key="product.id"
        :product="product"
        />
  </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'
export default {
    name: 'Search',
    components: {
        ProductBox
    },
    data() {
        return {
            products: [],
            query: ''
        }
    },
    mounted() {
        document.title = 'Search | Djcommerce'
        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)
        if (params.get('query')) {
            this.query = params.get('query')
            this.getSearch()
        }
    },
    methods: {
        getSearch() {
            axios
                .post('store/search', {'query': this.query})
                .then(response => {
                    this.products = response.data
                    console.log("done")
                })
                .catch(error => {
                    console.log(error)
                })
         
        }
    }
}
</script>
<style>

</style>