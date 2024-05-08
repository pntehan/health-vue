<template>
  <div class="dashboard">
    <h2>后台首页</h2>
    <div class="statistics">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card>
            <div class="stat-item">
              <span class="stat-value">{{ totalAppointments }}</span>
              <span class="stat-label">总预约数</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="stat-item">
              <span class="stat-value">{{ totalConsultations }}</span>
              <span class="stat-label">总咨询数</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="stat-item">
              <span class="stat-value">{{ totalFeedbacks }}</span>
              <span class="stat-label">总反馈数</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="latest-info">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <template #header>
              <span>最新预约</span>
            </template>
            <el-table :data="latestAppointments" style="width: 100%">
              <el-table-column prop="student" label="学生" />
              <el-table-column prop="date" label="日期" />
              <el-table-column prop="status" label="状态" />
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <template #header>
              <span>最新咨询</span>
            </template>
            <el-table :data="latestConsultations" style="width: 100%">
              <el-table-column prop="student" label="学生" />
              <el-table-column prop="subject" label="主题" />
              <el-table-column prop="status" label="状态" />
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <template #header>
              <span>最新反馈</span>
            </template>
            <el-table :data="latestFeedbacks" style="width: 100%">
              <el-table-column prop="student" label="学生" />
              <el-table-column prop="subject" label="主题" />
              <el-table-column prop="status" label="状态" />
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalAppointments: 100,
      totalConsultations: 50,
      totalFeedbacks: 20,
      latestAppointments: [
        { student: '张三', date: '2023-05-01', status: '已预约' },
        { student: '李四', date: '2023-05-02', status: '已预约' },
        { student: '王五', date: '2023-05-03', status: '已预约' }
      ],
      latestConsultations: [
        { student: '张三', subject: '心理压力', status: '待回复' },
        { student: '李四', subject: '人际关系', status: '已回复' },
        { student: '王五', subject: '焦虑症', status: '待回复' }
      ],
      latestFeedbacks: [
        { student: '张三', subject: '咨询满意度', status: '已回复' },
        { student: '李四', subject: '环境评价', status: '待回复' },
        { student: '王五', subject: '建议反馈', status: '已回复' }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.statistics {
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

.latest-info {
  margin-top: 20px;
}
</style>