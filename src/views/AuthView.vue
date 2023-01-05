<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

import { useAuthStore } from '@/stores'
import api from '@/api'

enum AUTH_TYPE {
  SIGNIN = 'Sign In',
  SIGNUP = 'Sign Up',
  FORGOT_PASSWORD = 'Forgot Password',
}

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const authType = computed(() => authTypeInRoute())
const signInForm = reactive({
  email: '',
  password: '',
})
const signUpForm = reactive({
  email: '',
  password: '',
  password_confirmation: '',
})
const forgotPasswordForm = reactive({
  email: '',
})

const authTypeInRoute = () => {
  switch (route.params.mode) {
    case 'signin':
      return AUTH_TYPE.SIGNIN
    case 'signup':
      return AUTH_TYPE.SIGNUP
    case 'forgot':
      return AUTH_TYPE.FORGOT_PASSWORD
  }
}

const signInHandler = () => {
  authStore.signIn(signInForm.email, signInForm.password)
}

const signUpHandler = () => {
  if (signUpForm.password !== signUpForm.password_confirmation) {
    ElMessage.error('Password confirmation does not match')
    return
  }

  api.signUp(signUpForm.email, signUpForm.password)
    .then(() => {
      ElMessage.success('Sign Up Success')
      router.push('/signin')
    })
}

const forgotPasswordHandler = () => {
  api.forgot(forgotPasswordForm.email)
    .then(() => {
      ElMessage.success('Forgot Password already sent')
      router.push('/signin')
    })
}
</script>

<template>
  <el-container class="background">
    <el-main class="main">
      <el-card class="card">
        <el-row>
          <el-col :lg="12" :md="0">
            <img src="@/assets/cat.jpg" alt="logo" style="width: 100%; overflow: hidden;">
          </el-col>
          <el-col :lg="12" :md="24">
            <el-container style="height: 100%">
              <el-header>
                <h1 class="title">{{ authType }}</h1>
              </el-header>
              <el-main>
                <template v-if="authType == AUTH_TYPE.SIGNIN">
                  <el-form :model="signInForm" @keyup.Enter="signInHandler">
                    <el-form-item label="Email" prop="email">
                      <el-input v-model="signInForm.email" />
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                      <el-input v-model="signInForm.password" type="password" />
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="signInHandler">SignIn</el-button>
                    </el-form-item>
                  </el-form>
                </template>
                <template v-if="authType == AUTH_TYPE.SIGNUP">
                  <el-form :model="signUpForm" @keyup.Enter="signUpHandler">
                    <el-form-item label="Email" prop="email">
                      <el-input v-model="signUpForm.email" />
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                      <el-input v-model="signUpForm.password" type="password" />
                    </el-form-item>
                    <el-form-item label="Password Confirmation" prop="password_confirmation">
                      <el-input v-model="signUpForm.password_confirmation" type="password" />
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="signUpHandler">SignUp</el-button>
                    </el-form-item>
                  </el-form>
                </template>
                <template v-if="authType == AUTH_TYPE.FORGOT_PASSWORD">
                  <el-form :model="forgotPasswordForm">
                    <el-form-item label="Email" prop="email" @keyup.Enter="forgotPasswordHandler">
                      <el-input v-model="forgotPasswordForm.email" />
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="forgotPasswordHandler">Submit</el-button>
                    </el-form-item>
                  </el-form>
                </template>
              </el-main>
              <el-footer>
                <template v-if="authType == AUTH_TYPE.SIGNIN">
                  <el-button @click="router.push('/signup')">SignUp</el-button>
                  <el-button @click="router.push('/forgot')">Forgot Password</el-button>
                </template>
                <template v-if="authType == AUTH_TYPE.SIGNUP">
                  <el-button @click="router.push('/signin')">SignIn</el-button>
                </template>
                <template v-if="authType == AUTH_TYPE.FORGOT_PASSWORD">
                  <el-button @click="router.push('/signin')">SignIn</el-button>
                </template>
              </el-footer>
            </el-container>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>
.background {
  background-color: #5e5e5e;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 720px;
  background-color: #e6e6e6;
  margin: 0 auto;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}

.form {
  padding: 5px;
}

.title {
  text-align: center;
}
</style>