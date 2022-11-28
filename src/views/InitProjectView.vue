<template>
  <div class="init-project-background">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px"
      class="demo-ruleForm init-project-form" :size="formSize" status-icon>
      <el-form-item label="project name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item>
        Initialize this project with: Skip this step if you're importing an
        existing project.
      </el-form-item>
      <el-form-item label="" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Add a README file 
                            ( This is where you can write a long description for your project )" name="type" />
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <router-link to="/project" class="no-underline">
          <el-button type="primary" @click="submitForm(ruleFormRef)">Create
          </el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import global_ from '../components/Global.vue'
import { useProjectStore } from '@/stores/project'

const project = useProjectStore();
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  type: [],
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input project name", trigger: "blur" },
    { min: 1, max: 30, message: "Length should be 1 to 30", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('valid');
      project.names.push({name:ruleForm.name});
      project.nowproject = ruleForm.name;
    } else {
      console.log('error submit!', fields);
    }
  });
};
const projectNameInput = ref("");



</script>
<style>
.init-project-background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.init-project-form {
  width: 50%;
  height: 820px;
  margin-top: 50px;
}
</style>
