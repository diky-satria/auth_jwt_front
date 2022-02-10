<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">Home</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/register" class="nav-link">Register</router-link>
                    </li>
                    <li class="nav-item">
                    <button @click="logout" class="btn btn-sm btn-primary">Logout</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
// import {useRouter} from 'vue-router'
import router from '@/router'
import store from '@/store'
export default {
    setup(){

        // const router = useRouter()

        const logout = async () => {
            await store.dispatch('auth/logout')
            router.replace('/login')
        }

        return {
            // router,
            logout
        }

    }
}
</script>