<template>
    <div class="col-5">
        <main class="form-signin">
          <form @submit.prevent="submit">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input v-model="form.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input v-model="form.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary">Sign in</button>
          </form>
        </main>
      </div>
</template>

<script>
import {reactive} from 'vue'
import store from '@/store'
import { ref } from 'vue'
// import {useRouter} from 'vue-router'
export default {
    setup(){
        const form = reactive({
            email: '',
            password: ''
        })

        const errors = ref([]);

        const submit = async () => {
            try{
                await store.dispatch('auth/login', form)
            }catch(e){
                errors.value = e.response.data.errors
                // console.log(errors.value)
            }
        }

        return {
            form,
            submit,
            errors
        }
    }
}
</script>