<template>
  <div class="admin-dashboard">
    <h2>管理员控制台</h2>
    <div class="stats-cards">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card>
            <div class="stat-item">
              <span class="stat-value">{{ totalStudents }}</span>
              <span class="stat-label">注册学生</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="stat-item">
              <span class="stat-value">{{ totalTeachers }}</span>
              <span class="stat-label">注册老师</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="stat-item">
              <span class="stat-value">{{ totalAdmins }}</span>
              <span class="stat-label">管理员</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="stat-item">
              <span class="stat-value">{{ totalAppointments }}</span>
              <span class="stat-label">总预约次数</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="shortcut-tiles">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(tile, index) in shortcutTiles" :key="index">
          <el-card style="margin-bottom: 20px;">
            <div class="tile-content">
              <i :class="tile.icon"></i>
              <span>{{ tile.label }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const totalStudents = ref(1000)
    const totalTeachers = ref(50)
    const totalAdmins = ref(5)
    const totalAppointments = ref(2000)

    const shortcutTiles = [
      { label: '用户统计', icon: 'el-icon-user' },
      { label: '心理测试统计', icon: 'el-icon-edit' },
      { label: '预约统计', icon: 'el-icon-date' },
      { label: '咨询信息统计', icon: 'el-icon-chat-line-round' },
      { label: '心理预警统计', icon: 'el-icon-warning' },
      { label: '反馈管理统计', icon: 'el-icon-comment' },
      { label: '评价管理统计', icon: 'el-icon-star-off' },
      { label: '系统用户统计', icon: 'el-icon-s-custom' },
      { label: '资源管理统计', icon: 'el-icon-folder' },
      { label: '预约信息统计', icon: 'el-icon-tickets' },
      { label: '模块管理统计', icon: 'el-icon-menu' },
      { label: '公告消息统计', icon: 'el-icon-bell' },
      { label: '轮播图管理统计', icon: 'el-icon-picture' },
      { label: '病情分析', icon: 'el-icon-monitor' }
    ]

    return {
      totalStudents,
      totalTeachers,
      totalAdmins,
      totalAppointments,
      shortcutTiles
    }
  }
})
</script>

<style scoped>
.admin-dashboard {
  padding: 20px;
}

.stats-cards {
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
}

.stat-label {
  font-size: 16px;
  color: #888;
}

.shortcut-tiles .el-card {
  cursor: pointer;
  transition: all 0.3s;
}

.shortcut-tiles .el-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.tile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.tile-content i {
  font-size: 36px;
  margin-bottom: 10px;
}
</style>