<template>
  <section class="products mt-5 pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 col-lg-4 text-center"  v-for=" product in latestProducts" :key="product.id">
        <div class="product-single">
            <div class="product-image">
              <img :src="product.get_thumbnail">
            </div>
            <div class="product-box">
              <span>{{product.price}}</span>
              <router-link :to="product.get_absolute_url" class="btn btn-outline-white btn-md ">View Product</router-link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default{
  name: 'Home',

  data(){
    return{
      latestProducts:[]
    }
  },
  mounted(){
    this.getLatestProducts()
  },
  methods:{
    getLatestProducts(){
      axios
        .get('store/product-page')
        .then(response => {
          this.latestProducts = response.data
          console.log("success")
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }

}

</script>

<style scoped>
.products{
  padding: 60px 0;
}

.products .product-single .btn{
  background: var(--main-color);
  color:#fff;
  padding: 20px 75px;
}

.products .product-single .product-image{
  padding: 20px;
}

.products .product-single .product-image img{
  height: 100px;
  width: 100px;
}

.products .product-box{
  padding: 20px 0;
}
</style>