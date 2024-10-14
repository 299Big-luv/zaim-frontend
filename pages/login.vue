<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" >
      <input v-model="password" required >
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'login-out',
  middleware: 'guest',
})

const { $sanctumAuth } = useNuxtApp()

const email = ref('')
const password = ref('')
const error = ref('')

async function login() {
  try {
    // ログインAPIを呼ぶ
    await $sanctumAuth.login(
      {
        email: email.value,
        password: password.value,
        remember: true,
      },
      (credentials) => {
        if (credentials.name) {
          navigateTo('/')
        }
      },
    )
  }
  catch (e: unknown) {
    error.value = useApiError(e)
  }
}

// 環境変数の取得
// const config = useRuntimeConfig()

</script>
