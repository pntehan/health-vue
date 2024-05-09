<template>
  <div class="system-data-stats">
    <h2>系统数据统计</h2>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <h3>系统用户统计</h3>
          <div class="user-stats">
            <p>学生注册通过数量: {{ stats.studentApprovedCount }}</p>
            <p>学生注册未通过数量: {{ stats.studentRejectedCount }}</p>
            <p>老师注册通过数量: {{ stats.teacherApprovedCount }}</p>
            <p>老师注册未通过数量: {{ stats.teacherRejectedCount }}</p>
          </div>
          <div id="userApprovalTrend" style="height: 300px;"></div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card>
          <h3>资源管理统计</h3>
          <div class="resource-stats">
            <p>心理文章数量: {{ stats.articleCount }}</p>
            <p>心理测试数量: {{ stats.testCount }}</p>
          </div>
          <div id="resourceTypeDistribution" style="height: 300px;"></div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card>
          <h3>公告消息统计</h3>
          <div class="announcement-stats">
            <p>公告发布次数: {{ stats.announcementCount }}</p>
            <p>公告被查看次数: {{ stats.announcementViewCount }}</p>
          </div>
          <div id="announcementAttentionTrend" style="height: 300px;"></div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <h3>预约信息统计</h3>
          <div class="appointment-stats">
            <el-table :data="appointmentCancellationStats" style="width: 100%">
              <el-table-column prop="teacher" label="老师" width="180"></el-table-column>
              <el-table-column prop="cancelledCount" label="被取消预约次数" width="180"></el-table-column>
            </el-table>
          </div>
          <div id="appointmentCancellationReasons" style="height: 300px;"></div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card>
          <h3>轮播图管理统计</h3>
          <div class="carousel-stats">
            <p>轮播图数量: {{ stats.carouselCount }}</p>
            <p>被查看次数: {{ stats.carouselViewCount }}</p>
          </div>
          <div id="carouselClickRates" style="height: 300px;"></div>
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
      studentApprovedCount: 800,
      studentRejectedCount: 200,
      teacherApprovedCount: 40,
      teacherRejectedCount: 10,
      articleCount: 500,
      testCount: 200,
      announcementCount: 100,
      announcementViewCount: 5000,
      carouselCount: 10,
      carouselViewCount: 20000
    })

    const appointmentCancellationStats = ref([
      { teacher: '张老师', cancelledCount: 20 },
      { teacher: '李老师', cancelledCount: 15 },
      { teacher: '王老师', cancelledCount: 25 },
      { teacher: '赵老师', cancelledCount: 18 },
      { teacher: '钱老师', cancelledCount: 22 }
    ])

    onMounted(() => {
      initUserApprovalTrend()
      initResourceTypeDistribution()
      initAnnouncementAttentionTrend()
      initAppointmentCancellationReasons()
      initCarouselClickRates()
    })

    const initUserApprovalTrend = () => {
      const chart = echarts.init(document.getElementById('userApprovalTrend'))
      const option = {
        // 配置用户注册通过率变化趋势图表数据
        // ...
      }
      chart.setOption(option)
    }

    const initResourceTypeDistribution = () => {
      const chart = echarts.init(document.getElementById('resourceTypeDistribution'))
      const option = {
        // 配置心理文章和心理测试类型分布图表数据
        // ...
      }
      chart.setOption(option)
    }

    const initAnnouncementAttentionTrend = () => {
      const chart = echarts.init(document.getElementById('announcementAttentionTrend'))
      const option = {
        // 配置公告关注度趋势图表数据
        // ...
      }
      chart.setOption(option)
    }

    const initAppointmentCancellationReasons = () => {
      const chart = echarts.init(document.getElementById('appointmentCancellationReasons'))
      const option = {
        // 配置预约取消原因饼图数据
        // ...
      }
      chart.setOption(option)
    }

    const initCarouselClickRates = () => {
      const chart = echarts.init(document.getElementById('carouselClickRates'))
      const option = {
        // 配置轮播图点击率统计表数据
        // ...
      }
      chart.setOption(option)
    }

    return {
      stats,
      appointmentCancellationStats
    }
  }
})
</script>

<style scoped>
.system-data-stats {
  padding: 20px;
}
</style>