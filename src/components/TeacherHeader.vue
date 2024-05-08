<template>
  <div class="teacher-header">
    <div class="logo">
      <span>大学生心理健康系统 - 教师版块</span>
    </div>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :src="userAvatar"></el-avatar>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="showProfile">个人中心</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAvatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
    showProfile() {
      // 跳转到个人中心页面
    },
    logout() {
      // 执行退出登录操作
    }
  }
}
</script>

<style scoped>
.teacher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #333;
  color: #fff;
  height: 60px;
}
</style>