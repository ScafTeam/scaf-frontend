<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="12">
        <template v-if="SignStatus === STATUS.SignIn">
          <img src="" alt=""> <!-- logo -->
          <h1>SCAF</h1>
        </template>
        <template v-else>
          <h1 style="title">{{ title }}</h1>
        </template>
        <el-form @keyup.enter="handleAuth" :model="form" label-width="40px">
          <el-form-item label="username" v-if="SignStatus === STATUS.SignUp">
            <el-input v-model="username"/>
          </el-form-item>
          <el-form-item label="email">
            <el-input type="email" v-model="email" />
          </el-form-item>
          <el-form-item label="password" v-if="SignStatus != STATUS.ForgotPassword">
            <el-input type="password" v-model="password" />
          </el-form-item>
          <el-form-item>
            <el-button class="btn" type="primary" @click="handleAuth">{{ SignStatus }}</el-button>
          </el-form-item>
          <template v-if="SignStatus === STATUS.SignIn">
            <el-form-item>
              <el-button disabled class="btn" type="primary">Continue with Google</el-button>
            </el-form-item>
            <el-form-item>
              <el-button disabled class="btn" type="primary">Continue with Github</el-button>
            </el-form-item>
            <el-form-item>
              <el-button disabled text type="primary">Forgot Password?</el-button>
              <el-button disabled text type="primary">SignUp</el-button>
            </el-form-item>
          </template>
        </el-form>
      </el-col>
      <el-col :span="12">
        test
        <img src="" alt="">
      </el-col>
   </el-row>
  </el-card>

</template>

<script lang="ts" setup>
import { ref, reactive  } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import axios from 'axios'

enum STATUS {
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
  ForgotPassword = 'Submit'
}
const title = ref('')
const SignStatus = ref('Sign In')
const route = useRoute()
const username = ref('')
const email = ref('')
const password = ref('')
const msg = ref('')

const handleAuth = async () => {
  const { data } = await axios.post('api/signIn', {
    email: email.value, 
    password: password.value
  })
  if(data !== 'Success') {
    ElMessage({ type: 'error', message: 'Wrong username or password'})
  } else {
    ElMessage({ type: 'success' ,message: 'Sign In Success'})
  }
}

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})


switch (route.params.mode) {
  case 'in':
    title.value = ''
    SignStatus.value = STATUS.SignIn
    break
  case 'up':
    title.value = 'Sign Up'
    SignStatus.value = STATUS.SignUp
    break
  case 'forgot':
    title.value = 'Forgot Password'
    SignStatus.value = STATUS.ForgotPassword
    break
}
</script>

<style scoped>
.box-card {
  padding: 20px;
  width: 800px;
  margin: 20px auto 40px;
  position: relative;
}

.title {
  margin: 12px;
}

.btn {
  width: 240px;
}
</style>