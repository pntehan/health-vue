<template>
  <div class="teacher-header">
    <div class="logo">
      <span>大学生心理健康系统 - 教师版块</span>
    </div>
    <div class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-avatar :size="40" :src="require('@/assets/user.jpg')"></el-avatar>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handlePush('teacher/user')">个人中心</el-dropdown-item>
            <el-dropdown-item @click="handlePush('star')">我的收藏</el-dropdown-item>
            <el-dropdown-item>评价</el-dropdown-item>
            <el-dropdown-item @click="handleOut">退出</el-dropdown-item>
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
    handlePush(name) {
      this.$router.push('/'+name)
    },

    handleOut() {
      localStorage.clear()
      this.$router.push('/t_login')
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