<script lang="ts" setup>
import { AuthService } from '@task-flow/data-access';
import type { FormInstance } from 'element-plus';
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const signInFormRef = ref<FormInstance>();

const state = reactive({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const { circleUrl } = toRefs(state)

const form = reactive({
    name: '',
    password: ''
})

const submitForm = (element: FormInstance, name: string, password: string ) => {
    element.validate((valid) => {
       if(valid){
        const authService = new AuthService();
        authService.signIn(name, password);
        router.push('/home')
       } else {
        console.log("error submited")
       }
       return false;
    });
}

</script>


<template>
    <el-card class="auth-card" align-center>
        <el-avatar :size="50" :src="circleUrl" />
        <el-form ref="signInFormRef" label-position="right" label-width="auto" :model="form" style="max-width: 600px">
            <el-form-item label="Name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="form.password" type="password"/>
            </el-form-item>
            <el-form-item align-center>
                <el-button type="primary" @click="submitForm(signInFormRef, form.name, form.password)">Sign-in</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>


<style setup>
.auth-card {
    max-width: 480px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}
</style>