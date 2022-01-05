<template>
    <section class="signin-page account">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="block text-center">
          <a class="logo" href="">
          </a>
          <h2 class="text-center">Create Your Account</h2>
          <form class="text-left clearfix" @submit.prevent="submitForm">
        
            <div class="form-group">
              <input type="text" class="form-control" v-model="username" placeholder="Username">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password"  placeholder="Password">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password2" placeholder="Password 2">
            </div>

            <div v-if="errors.length" class="form-group">
                <p class="lead" v-for="err in errors" :key=err>{{err}}</p>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-main text-center">Sign In</button>
            </div>
          </form>
          <p class="mt-20">Already hava an account ?<a href=""> Login</a></p>
          <p><a href=""> Forgot your password?</a></p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'
export default {
    name:'SignUp',
    data(){
        return{
            username:'',
            password:'',
            password2:'',
            errors:[]
        }
    },
    methods:{
        submitForm(){
            this.errors = []

            if(this.username === '' ){
                this.errors.push('Username cannot be empty')
            }

            
            if(this.password === '' ){
                this.errors.push('password cannot be empty')
            }

            
            if(this.username === '' ){
                this.errors.push('Confirm Password cannot be empty')
            }

            
            if(this.password !== this.password2  ){
                this.errors.push('Passwords do not match')
            }

            if (!this.errors.length){
                const formData = {
                    username : this.username,
                    password : this.password
                }

                axios
                    .post("accounts/register", formData)
                    .then(response => {
                        toast({
                            message: 'Account created, please log in!',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'bottom-right',
                        })
                        this.$router.push('/log-in')
                    })
                     .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
            }
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