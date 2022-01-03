<template>
  <section class="product-detail">
      <div class="container">
          <div class="row justify-content-center"> 
          <div class="col-lg-6">
              <div class="product-image">
                  <img :src="product.get_thumbnail" alt="">
              </div>
              <div class="product-name">
                  <h1>{{product.name}}</h1>
              </div>
          </div>
          <div class="col-lg-4 mt-5 pt-5">
              <h2>Details</h2>
              <p>{{product.price}}</p>

              <div class="add-ons">
                  <input type="text" min="1" class="form-control" v-model="quantity">
                  <button class="btn btn-outline-white  ml-5 btn-success" @click="addToCart">Add to cart</button>
              </div>
          </div>
      </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Product',
    data(){
        return{
            quantity: 1,
            product:{}
        }
    },
    mounted(){
        this.getProducts()
    },
    methods:{
        getProducts(){
            const product_slug = this.$route.params.slug
            axios
                .get(`store/product/desc/${product_slug}`)
                .then(response => {
                    this.product = response.data
                })
                .catch(err => {
                    console.log(err.message)
                })
        },

        addToCart(){
            console.log("addToCart")
            if(isNaN(this.quantity) || this.quantity < 1){
                this.quantity = 1
            }
            const item = {
            product : this.product,
            quantity : this.quantity
        }
        this.$store.commit('addToCart', item)
        }

        
    }
}
</script>

<style scoped>
section{
    padding: 60px 0;
}

.add-ons{
    display: flex;
}

.add-ons .btn{
    padding:3px;
}
</style>