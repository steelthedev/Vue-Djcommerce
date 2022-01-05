<template>
  <!-- Main Menu Section -->
<div class="page-wrapper">
  <div class="cart shopping">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="block">
            <div class="product-list" v-if="cartTotalLength">
              <form method="post">
                    <table class="table">
                  <thead>
                    <tr>
                      <th class="">Item Name</th>
                      <th>Item Quantity</th>
                      <th class="">Item Price</th>
                      <th class="">Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    <CartItem v-for="item in cart.items"
                                :key="item.product.id"
                                :initialItem="item"
                                v-on:removeFromCart="removeFromCart"
                                />

                     
                  </tbody>
                </table>

                 <h6 class="lead mt-5 p-2"> Total Price: ${{cartTotalPrice.toFixed(2)}}, {{cartTotalLength}} items</h6>

                <a href="checkout.html" class="btn btn-main pull-right">Procced to checkout</a>
              </form>
             
            </div>
            <p v-else> Nothing in cart </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</template>

<script>
import axios  from 'axios'
import CartItem from '@/components/CartItem.vue'
export default {
    name: 'Cart',
    components: {CartItem},
    data(){
        return{
            cart:{
                items:[]
            }
        }
    },
    mounted(){
        this.cart = this.$store.state.cart
    },
    methods:{
      removeFromCart(item){
        this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id )
      }
    },

    computed:{
        cartTotalLength(){
            return this.cart.items.reduce((acc, curVal) =>{
                return acc += curVal.quantity
            },0)
        },

        cartTotalPrice(){
          return this.cart.items.reduce((acc,curVal) => {
            return acc += curVal.product.price * curVal.quantity
          }, 0)
        }
    }
}
</script>

<style>

</style>