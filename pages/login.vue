<template>
    <div>
      <h1>Login</h1>
      <form>
        <input v-model="email" type="email" placeholder="Email" required >
        <input v-model="password" type="password" placeholder="Password" required >
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'login-out',
})

const email = ref('')
const password = ref('')
const error = ref(null)

</script>
