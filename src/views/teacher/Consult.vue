<template>
  <div class="consultation-page">
    <div class="consultation-list">
      <h3>咨询列表</h3>
      <el-table :data="paginatedConsultations" style="width: 100%; margin: 20px;">
        <el-table-column prop="student" label="学生" width="180"></el-table-column>
        <el-table-column prop="subject" label="主题" width="200"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button type="primary" size="small" @click="showReplyDialog(scope.row)">答复</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="consultations.length"
          :page-size="pageSize"
          v-model:current-page="currentPage"
        ></el-pagination>
      </div>
    </div>

    <div class="teacher-info" style="margin: 20px;">
      <h3>老师信息</h3>
      <div class="info-card">
        <el-avatar :size="80" :src="teacherAvatar"></el-avatar>
        <p>姓名: {{ teacherName }}</p>
        <p>专长: {{ teacherSpecialty }}</p>
        <el-select v-model="teacherStatus" placeholder="选择状态">
          <el-option label="在线" value="online"></el-option>
          <el-option label="离线" value="offline"></el-option>
          <el-option label="忙碌" value="busy"></el-option>
        </el-select>
      </div>
    </div>

    <el-dialog v-model="replyDialogVisible" title="答复咨询">
      <p>学生: {{ currentConsultation.student }}</p>
      <p>主题: {{ currentConsultation.subject }}</p>
      <p>咨询内容:</p>
      <el-input v-model="currentConsultation.content" type="textarea" rows="5" readonly></el-input>
      <p>答复:</p>
      <el-input v-model="reply" type="textarea" rows="5"></el-input>
      <template #footer>
        <el-button @click="replyDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitReply">提交</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const consultations = ref([
      { student: '张三', subject: '人际关系', date: '2023-05-15', content: '我总是很难与他人建立良好的关系...' },
      { student: '李四', subject: '焦虑症', date: '2023-05-20', content: '我经常会感到非常焦虑和紧张...' },
      { student: '王五', subject: '抑郁症', date: '2023-05-22', content: '最近总是感到非常沮丧和没有动力...' }
    ])

    const teacherAvatar = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
    const teacherName = ref('张老师')
    const teacherSpecialty = ref('人际关系、焦虑症')
    const teacherStatus = ref('online')

    const currentPage = ref(1)
    const pageSize = ref(5)
    const paginatedConsultations = ref([])
    const replyDialogVisible = ref(false)
    const currentConsultation = ref({})
    const reply = ref('')

    const showReplyDialog = (consultation) => {
      currentConsultation.value = consultation
      replyDialogVisible.value = true
    }

    const submitReply = () => {
      // 提交答复的逻辑
      console.log('答复内容:', reply.value)
      replyDialogVisible.value = false
      reply.value = ''
    }

    paginatedConsultations.value = consultations.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)

    return {
      consultations,
      teacherAvatar,
      teacherName,
      teacherSpecialty,
      teacherStatus,
      currentPage,
      pageSize,
      paginatedConsultations,
      replyDialogVisible,
      currentConsultation,
      reply,
      showReplyDialog,
      submitReply
    }
  }
})
</script>

<style scoped>
.consultation-page {
  display: flex;
  padding: 20px;
}

.consultation-list {
  flex: 1;
  margin-right: 20px;
}

.teacher-info {
  width: 300px;
}

.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>