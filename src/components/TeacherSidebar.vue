<template>
  <div class="teacher-sidebar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/teacher">
        <el-icon><icon-menu /></el-icon>
        <span>后台首页</span>
      </el-menu-item>
      <el-menu-item index="/teacher/appointments">
        <el-icon><document /></el-icon>
        <span>预约安排</span>
      </el-menu-item>
      <el-menu-item index="/teacher/psychTests">
        <el-icon><setting /></el-icon>
        <span>心理测试</span>
      </el-menu-item>
      <el-menu-item index="/teacher/consult">
        <el-icon><ChatLineSquare /></el-icon>
        <span>咨询管理</span>
      </el-menu-item>
      <el-menu-item index="/teacher/feedback">
        <el-icon><MessageBox /></el-icon>
        <span>咨询管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { Document, Menu as IconMenu, Setting, ChatLineSquare, MessageBox } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    Document,
    IconMenu,
    Setting,
    ChatLineSquare,
    MessageBox
  },

  setup() {
    const route = useRoute()
    const activeIndex = computed(() => {
      const menuIndex = route.meta.menuIndex
      return menuIndex || ''
    })

    return {
      activeIndex
    }
  }
}
</script>

<style scoped>
.teacher-sidebar {
  width: 200px;
  background-color: #545c64;
}
</style>