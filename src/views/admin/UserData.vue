<template>
  <div class="user-data-stats">
    <h2>用户数据统计</h2>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <h3>用户统计</h3>
          <div class="user-stats">
            <p>注册学生总数: {{ stats.totalStudents }}</p>
            <p>注册老师总数: {{ stats.totalTeachers }}</p>
            <p>管理员总数: {{ stats.totalAdmins }}</p>
          </div>
          <div id="genderRatioChart" style="height: 300px;"></div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card>
          <h3>心理测试统计</h3>
          <div class="test-stats">
            <p>总提交数量: {{ stats.totalTestSubmissions }}</p>
            <p>总通过数量: {{ stats.totalTestsPassed }}</p>
          </div>
          <div id="testScoreDistribution" style="height: 300px;"></div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card>
          <h3>预约统计</h3>
          <div class="appointment-stats">
            <p>总预约次数: {{ stats.totalAppointments }}</p>
            <p>最高预约老师: {{ stats.topAppointedTeacher }}</p>
          </div>
          <div id="appointmentTrends" style="height: 300px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  setup() {
    const stats = ref({
      totalStudents: 1000,
      totalTeachers: 50,
      totalAdmins: 5,
      totalTestSubmissions: 2000,
      totalTestsPassed: 1500,
      totalAppointments: 3000,
      topAppointedTeacher: '张老师'
    })

    onMounted(() => {
      initGenderRatioChart()
      initTestScoreDistribution()
      initAppointmentTrends()
    })

    const initGenderRatioChart = () => {
      const chart = echarts.init(document.getElementById('genderRatioChart'))
      const option = {
        // 配置学生和老师的男女比例数据
        // ...
      }
      chart.setOption(option)
    }

    const initTestScoreDistribution = () => {
      const chart = echarts.init(document.getElementById('testScoreDistribution'))
      const option = {
        // 配置心理测试分数分布数据
        // ...
      }
      chart.setOption(option)
    }

    const initAppointmentTrends = () => {
      const chart = echarts.init(document.getElementById('appointmentTrends'))
      const option = {
        // 配置预约趋势数据
        // ...
      }
      chart.setOption(option)
    }

    return {
      stats
    }
  }
})
</script>

<style scoped>
.user-data-stats {
  padding: 20px;
}

.user-stats,
.test-stats,
.appointment-stats {
  margin-bottom: 20px;
}
</style>