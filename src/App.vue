<template>
    <nav class="navbar nav-bar navbar-expand-md  navbar-dark  fixed-top" id="nav">
       <div class="container-fluid">
            <a href="" class="navbar-brand">iCommerce</a>
           <button class="navbar-toggler" 
           type="button" 
           data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent" 
             aria-expanded="false"
              aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto ">
                    <li class="nav-item">
                       <router-link to="/" class="nav-link" >Home</router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="button nav-link btn-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{ cartTotalLength }})</span>
              </router-link>
                    </li>
        </ul>
      </div>
    </div>	
        </nav>
  <router-view/>

</template>

<script>
export default {
  data(){
    return{
      cart:{
            
      items:[],
      }
  
    }
  },

  beforeCreate(){
    this.$store.commit('initializeStore')
  },
  
    mounted(){
    this.cart = this.$store.state.cart
  },

 computed: {
      cartTotalLength(items) {
          let totalLength = 0
          for (let i = 0; i < this.cart.items.length; i++) {
              totalLength += this.cart.items[i].quantity
          }
          return totalLength
      }
  }
}
</script>
<style>
 
 :root{
    --main-color:#5e35b1;
    --color-dark:#1d2231;
    --text-grey:#8390a2;
    --secondary-color:#f3e5f5;
}


body{
    background:#fff;
}

*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.nav-bar{
    background: var(--main-color);
    color: #fff;
    text-decoration: none;
    outline: none;
}


#nav a{
  color: #fff;
  display: inline-block;
  text-decoration:none;
  outline: none;
}

#nav{
  padding: 20px ;
  display: inline-block;
}


</style>
