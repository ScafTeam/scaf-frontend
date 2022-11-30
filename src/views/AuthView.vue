<template>
  <div class="back-ground">
    <el-card class="box-card">
      <el-row>
        <el-col :span="12">
          <template v-if="SignStatus === STATUS.SignIn">
            <el-image :src="src" style="height: 100px" />
          </template>
          <template v-else>
            <h1 style="title">{{ title }}</h1>
          </template>
          <el-form @keyup.enter="handleAuth" :model="form" label-width="40px">
            <!-- <el-form-item
              class=""
              label="username"
              v-if="SignStatus === STATUS.SignUp"
            >
              <el-input v-model="username" />
            </el-form-item> -->
            <el-form-item label="email">
              <el-input type="email" v-model="email" class="font-color-black" />
            </el-form-item>
            <el-form-item
              label="password"
              v-if="SignStatus != STATUS.ForgotPassword"
            >
              <el-input type="password" v-model="password" />
            </el-form-item>
            <el-form-item style="margin-left: 60px">
              <el-button
                class="btn"
                style="width: 200px"
                type="primary"
                @click="handleAuth"
                >{{ SignStatus }}
              </el-button>
            </el-form-item>
            <template v-if="SignStatus === STATUS.SignIn">
              <el-form-item>
                <el-button class="btn" type="primary">
                  <font-awesome-icon icon="fa-brands fa-google" />Continue with
                  Google
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button class="btn" type="primary">
                  <font-awesome-icon icon="fa-brands fa-github" />Continue with
                  Github
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button text type="primary" @click="changeForgotPassword"
                  >Forgot Password?</el-button
                >
                <el-button
                  text
                  type="primary"
                  @click="changeSignUp"
                  style="margin-left: 90px"
                  >SignUp</el-button
                >
              </el-form-item>
            </template>
            <el-form-item v-if="SignStatus != STATUS.SignIn">
              <el-button text type="primary" @click="changeSignIn"
                >back
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <img src="../cat.jpg" alt="" width="359" height="356" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import axios from "axios";

enum STATUS {
  SignIn = "Sign In",
  SignUp = "Sign Up",
  ForgotPassword = "Submit",
}
const title = ref("");
const SignStatus = ref("Sign In");
const router = useRouter();
const route = useRoute();
// const username = ref("");
const email = ref("");
const password = ref("");
const msg = ref("");
const handleAuth = async () => {
  if (SignStatus.value === STATUS.SignIn) {
    try {
      const { data, err } = await axios.post("api/signin", {
        email: email.value,
        password: password.value,
      });
      ElMessage({ type: "success", message: "Sign In Success" });
      router.push("/");
    } catch (err) {
      ElMessage({ type: "error", message: err.response.data.message });
      // ElMessage({ type: "error", message: "Wrong username or password" });
    }
  } else if (SignStatus.value === STATUS.SignUp) {
    try {
      const res = await axios.post("/api/signup", {
        // username: username.value,
        email: email.value,
        password: password.value,
      });
      ElMessage.success("Sign Up Success");
      changeSignIn();
    } catch (err) {
      ElMessage({ type: "error", message: err.response.data.message });
    }
  } else if (SignStatus.value === STATUS.ForgotPassword) {
    try {
      const res = await axios.post("/api/forgot", {
        email: email.value,
      });
      ElMessage.success("Send Email Success");
      changeSignIn();
    } catch (err) {
      ElMessage({ type: "error", message: err.response.data.message });
    }
  }
};

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const changeSignIn = () => {
  title.value = "";
  SignStatus.value = STATUS.SignIn;
  router.push("/sign-in");
};
const changeForgotPassword = () => {
  title.value = "Forgot Password";
  SignStatus.value = STATUS.ForgotPassword;
  router.push("/sign-forgot");
};
const changeSignUp = () => {
  title.value = "Sign Up";
  SignStatus.value = STATUS.SignUp;
  router.push("/sign-up");
};
const checkRouteMode = () => {
  switch (route.params.mode) {
    case "in":
      title.value = "";
      SignStatus.value = STATUS.SignIn;
      break;
    case "up":
      title.value = "Sign Up";
      SignStatus.value = STATUS.SignUp;
      break;
    case "forgot":
      title.value = "Forgot Password";
      SignStatus.value = STATUS.ForgotPassword;
      break;
  }
};
const src = "src/Logo.png";
</script>

<style scoped>
* {
  --el-text-color-regular: white;
}

.back-ground {
  position: fixed;
  top: 0px;
  background-color: black;
  width: 100vw;
  height: calc(100vh);
}

h1 {
  color: white;
  margin: 20px;
}

.box-card {
  padding: 20px;
  width: 800px;
  margin: 20px auto 40px;
  background-color: black;
  position: relative;
  border: 0px;
}

.btn {
  width: 319px;
  background-color: white;
  color: black;
}

.btn:hover {
  background-color: #87ceeb;
}

.svg-inline--fa {
  margin: 10px;
}
.font-color-black {
  color: black !important;
}
* {
  --el-input-text-color: black;
}
</style>
