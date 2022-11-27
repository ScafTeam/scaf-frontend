<template>
    <el-row justify="center">
        <el-col :span="12">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <el-row class="header-row">
                            <el-col :span="6">
                                <span>Invite</span>
                            </el-col>
                            <el-col :span="6">
                                <div class="whitespace" />
                            </el-col>
                            <el-col :span="6">
                                <el-button type="success" plain>accepte all</el-button>
                            </el-col>
                            <el-col :span="6">
                                <el-button type="danger" plain>delete all</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                    <el-row>
                        <el-col :span="6" class="list_pro">
                            {{ 'Project ' + o }}
                        </el-col>
                        <el-col :span="6">
                            <div class="whitespace" />
                        </el-col>
                        <el-col :span="6">
                            <el-button type="success" :icon="Check" circle />
                        </el-col>
                        <el-col :span="6">
                            <el-button type="danger" :icon="Delete" circle />
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
  
<style>
.whitespace {
    background-color: white;
}

.list_pro {
    padding-top: 10px;
    text-align: center;
    justify-content: center;
    /* 垂直置中 */
    align-items: center;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.header-row {
    width: 100%;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>

<script lang="ts" setup>
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'
</script>
  