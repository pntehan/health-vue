<template>
  <div class="business-data-stats">
    <h2>业务数据统计</h2>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <h3>咨询信息统计</h3>
          <div class="consultation-stats">
            <p>总咨询问题数量: {{ stats.totalConsultations }}</p>
          </div>
          <div id="consultationTopicCloud" style="height: 300px;"></div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card>
          <h3>心理预警统计</h3>
          <div class="warning-stats">
            <p>总预警次数: {{ stats.totalWarnings }}</p>
            <p>预警类型数量: {{ stats.warningTypes.length }}</p>
          </div>
          <div id="warningTrends" style="height: 300px;"></div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <h3>反馈管理统计</h3>
          <div class="feedback-stats">
            <p>总反馈数量: {{ stats.totalFeedbacks }}</p>
          </div>
          <div id="feedbackHotspots" style="height: 300px;"></div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card>
          <h3>评价管理统计</h3>
          <div class="review-stats">
            <p>总评价数量: {{ stats.totalReviews }}</p>
            <p>平均评分: {{ stats.averageRating }}</p>
          </div>
          <div id="teacherRatingDistribution" style="height: 300px;"></div>
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
      totalConsultations: 1500,
      totalWarnings: 800,
      warningTypes: ['焦虑症', '抑郁症', '人际关系'],
      totalFeedbacks: 2000,
      totalReviews: 3000,
      averageRating: 4.2
    })

    onMounted(() => {
      initConsultationTopicCloud()
      initWarningTrends()
      initFeedbackHotspots()
      initTeacherRatingDistribution()
    })

    const initConsultationTopicCloud = () => {
      const chart = echarts.init(document.getElementById('consultationTopicCloud'))
      const option = {
        // 配置咨询问题主题分布的词云图数据
        // ...
      }
      chart.setOption(option)
    }

    const initWarningTrends = () => {
      const chart = echarts.init(document.getElementById('warningTrends'))
      const option = {
        // 配置心理预警趋势图表数据
        // ...
      }
      chart.setOption(option)
    }

    const initFeedbackHotspots = () => {
      const chart = echarts.init(document.getElementById('feedbackHotspots'))
      const option = {
        // 配置反馈热点图数据
        // ...
      }
      chart.setOption(option)
    }

    const initTeacherRatingDistribution = () => {
      const chart = echarts.init(document.getElementById('teacherRatingDistribution'))
      const option = {
        // 配置老师评价分布图表数据
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
.business-data-stats {
  padding: 20px;
}
</style>