<template>

<section class="products section bg-gray mt-10 ">
	<div class="container">
		<div class="row">
			<div class="title text-center">
				<h2>Trendy Products</h2>
			</div>
		</div>
		<div class="row">

<ProductBox 
     v-for="product in latestProducts"
        :key="product.id"
        :product="product" />

  </div>
	</div>
</section>
</template>

<script>
import axios from 'axios'

import ProductBox from '@/components/ProductBox'

export default{
  name: 'Home',
  components:{ProductBox},
  data(){
    return{
      latestProducts:[]
    }
  },
  mounted(){
    this.getLatestProducts()
    document.title = 'Home | istore '
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

<style>
.products{
  padding: 60px 0;
}

</style>