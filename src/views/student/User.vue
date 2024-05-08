<template>
  <div class="profile-page">
    <h2>个人中心</h2>
    <el-form
      :model="userForm"
      :rules="rules"
      ref="userFormRef"
      label-width="120px"
      class="profile-form"
    >
      <el-form-item label="头像">
        <el-avatar shape="square" :size="300" :src="require('@/assets/user.jpg')" />
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="userForm.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="userForm.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">保存修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

export default defineComponent({
  setup() {
    const userForm = ref({
      username: '',
      email: '',
      phone: ''
    })
    const userFormRef = ref(null)
    const rules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名长度在 3 到 10 个字符', trigger: 'blur' }
      ],
      email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
      ],
      phone: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
        { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
      ]
    }

    const handleAvatarSuccess = (res, file) => {
      userForm.value.avatar = URL.createObjectURL(file.raw)
    }

    const beforeAvatarUpload = (rawFile) => {
      const isJPG = rawFile.type === 'image/jpeg'
      const isLt2M = rawFile.size / 1024 / 1024 < 2

      if (!isJPG) {
        ElMessage.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        ElMessage.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }

    const submitForm = () => {
      userFormRef.value.validate((valid) => {
        if (valid) {
          // 提交表单逻辑
          console.log(userForm.value)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    return {
      userForm,
      userFormRef,
      rules,
      handleAvatarSuccess,
      beforeAvatarUpload,
      submitForm,
      Plus
    }
  }
})
</script>

<style scoped>
.profile-page {
  padding: 20px;
  margin-left: 20%;
  margin-right: 20%;
}
.profile-form {
  max-width: 400px;
}
.avatar-uploader {
  display: flex;
  justify-content: center;
}
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.avatar-uploader .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
}
</style>
