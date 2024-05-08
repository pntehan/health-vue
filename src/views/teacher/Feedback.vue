<template>
  <div class="feedback-and-reviews">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="反馈管理" name="feedback">
        <div class="feedback-list">
          <el-table :data="feedbacks" style="width: 100%">
            <el-table-column prop="content" label="反馈内容" width="500"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column label="操作" width="200">
              <template #default="scope">
                <el-button type="primary" size="small" @click="showReplyDialog(scope.row)">回复</el-button>
                <el-button type="danger" size="small" @click="deleteFeedback(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="查看评价" name="reviews">
        <div class="review-list">
          <el-table :data="reviews" style="width: 100%">
            <el-table-column prop="content" label="评价内容" width="500"></el-table-column>
            <el-table-column prop="rating" label="评分" width="180"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-dialog v-model="replyDialogVisible" title="回复反馈">
      <p>反馈内容: {{ currentFeedback.content }}</p>
      <p>回复:</p>
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
    const activeTab = ref('feedback')
    const feedbacks = ref([
      { content: '老师的回答非常专业和有见解,解决了我的困扰。', date: '2023-05-15' },
      { content: '老师的态度很友善,让我感到很放松。', date: '2023-05-20' },
      { content: '希望老师能更多地引导我们自己思考问题。', date: '2023-05-22' }
    ])
    const reviews = ref([
      { content: '老师非常专业,解答问题很有见解。', rating: 5, date: '2023-05-15' },
      { content: '老师态度很好,让我感到很放松。', rating: 4, date: '2023-05-20' },
      { content: '希望老师能更多地引导我们自己思考问题。', rating: 3, date: '2023-05-22' }
    ])

    const replyDialogVisible = ref(false)
    const currentFeedback = ref({})
    const reply = ref('')

    const showReplyDialog = (feedback) => {
      currentFeedback.value = feedback
      replyDialogVisible.value = true
    }

    const submitReply = () => {
      // 提交回复的逻辑
      console.log('回复内容:', reply.value)
      replyDialogVisible.value = false
      reply.value = ''
    }

    const deleteFeedback = (index) => {
      feedbacks.value.splice(index, 1)
    }

    return {
      activeTab,
      feedbacks,
      reviews,
      replyDialogVisible,
      currentFeedback,
      reply,
      showReplyDialog,
      submitReply,
      deleteFeedback
    }
  }
})
</script>

<style scoped>
.feedback-and-reviews {
  padding: 20px;
}

.feedback-list,
.review-list {
  margin-top: 20px;
}
</style>
