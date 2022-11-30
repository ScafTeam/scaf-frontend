<template>
  <div class="settings-project-background">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm settings-project-form"
      :size="formSize"
      status-icon
    >
      <el-form-item label="avatar">
        <uploadimage />
      </el-form-item>
      <el-form-item label="name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>

      <el-form-item label="bio" prop="bio">
        <el-input v-model="ruleForm.bio" type="textarea" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="saveForm(ruleFormRef)"
          >Save</el-button
        >
      </el-form-item>
      <el-form-item label="Password">
        <el-button type="primary" @click="">reset</el-button>
      </el-form-item>
      <el-form-item label="Google Calendar">
        <el-button type="primary" @click="">authorize</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import uploadimage from "@/components/uploadimage.vue";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules, UploadProps } from "element-plus";

import { Plus } from "@element-plus/icons-vue";

const imageUrl = ref("");

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  email: "",
  bio: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "cannot be empty", trigger: "blur" },
    { min: 1, max: 20, message: "Length should be 1 to 20", trigger: "blur" },
  ],
  email: [{ required: true, message: "cannot be empty", trigger: "blur" }],
});

const saveForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("save!");
    } else {
      console.log("error save!", fields);
    }
  });
};
</script>
<style>


.settings-project-background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.settings-project-form {
  width: 30%;
  height: 820px;
  margin-top: 50px;
}
</style>
