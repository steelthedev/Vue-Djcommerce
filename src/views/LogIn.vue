<template>
  
<section class="signin-page account">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="block text-center">
          <a class="logo" href="index.html">
            <img src="images/logo.png" alt="">
          </a>
          <h2 class="text-center">Welcome Back</h2>
          <form class="text-left clearfix" @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" class="form-control" v-model="username"  placeholder="Username">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" placeholder="Password">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-main text-center" >Login</button>
            </div>
          </form>
          <p class="mt-20">New in this site ?<a href="signin.html"> Create New Account</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
           username:'',
           password:'',
           errors:[]
        }
    },
    mounted(){
        document.title = "Login | Djcommerce"
    },
     methods: {
        async submitForm() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            const formData = {
                username: this.username,
                password: this.password
            }
            await axios
                .post("accounts/login/", formData)
                .then(response => {
                    const token = response.data.auth_token
                    this.$store.commit('setToken', token)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token
                    localStorage.setItem("token", token)
                    const toPath = this.$route.query.to || '/cart'
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
     }
}
</script>

<style scoped>
.account .block {
  background-color: #fff;
  border: 1px solid #dedede;
  padding: 30px;
  margin: 100px 0;
}
.account .block .logo {
  display: inline-block;
}
.account .block a {
  color: #000;
}
.account .block h2 {
  font-weight: 400;
  font-size: 25px;
  text-transform: uppercase;
  margin-top: 40px;
}
.account .block form {
  margin-top: 40px;
}
@media (max-width: 400px) {
  .account .block form .btn-main, .account .block form .btn-solid-border, .account .block form .btn-transparent, .account .block form .btn-small {
    padding: 14px 19px;
  }
}
.account .block form p {
  margin-bottom: 20px;
}
.account .block form input[type=email], .account .block form input[type=password], .account .block form input[type=text] {
  border-radius: 0;
  box-shadow: none;
}
</style>