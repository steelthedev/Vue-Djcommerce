<template>

  <section class="single-product">
	<div class="container">
	
		<div class="row mt-20">
			<div class="col-md-5">
				<div class="single-product-slider">
					<div id='caousel-custom' class='carousel slide' data-ride='carousel'>
					
						
						<!-- thumb -->
						<ol class='carousel-indicators mCustomScrollbar meartlab'>
                            <div class='item'>
									<img :src="product.get_thumbnail" alt='' data-zoom-image="images/shop/single-products/product-6.jpg" />
								</div>
						
						</ol>
					</div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="single-product-details">
					<h2>{{product.name}}</h2>
					<p class="product-price">${{product.price}}</p>
					
					<p class="product-description mt-20">
						{{product.description}}
					</p>
				
	

					<div class="product-quantity">
						<span>Quantity:</span>
						<div class="product-quantity-slider">
							<input id="product-quantity" type="text"  name="product-quantity" v-model="quantity">
						</div>
					</div>
					<div class="product-category">
						<span>Categories:</span>
						<ul>
							<li><a>{{product.get_category}}</a></li>
						</ul>
					</div>
					<a type="button" @click="addToCart" class="btn btn-main btn-dark mt-20">Add To Cart</a>
				</div>
			</div>

					
								   
							</div>
						</div>

        

  </section>
</template>

<script>
import { toast } from 'bulma-toast'
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
        
       async getProducts(){
           this.$store.commit('setIsLoading', true)
            const product_slug = this.$route.params.slug
            await axios
                .get(`store/product/desc/${product_slug}`)
                .then(response => {
                    this.product = response.data
                })
                .catch(err => {
                    console.log(err.message)
                })
            this.$store.commit('setIsLoading', false)
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

        toast({
            message: 'The product was added to the cart succesfully',
            type: 'is-success',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right',
        })

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

.product-image{
    height: 100%;
    width: 100%;
    overflow-x:hidden;
    margin-top: 200px;
}
</style>