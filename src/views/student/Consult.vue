<template>
  <div class="news-page">
    <h2>心理问题咨询区</h2>
    <div class="news-input">
      <el-form :model="newsForm" :rules="rules" ref="newsFormRef" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="newsForm.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="newsForm.content" type="textarea" rows="5"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitNews">提交资讯</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="news-list">
      <el-table :data="newsList" style="width: 100%">
        <el-table-column prop="title" label="标题" width="300"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
        <el-table-column label="状态" width="120">
          <template #default="scope">
            <el-tag v-if="scope.row.replied" type="success">已回复</el-tag>
            <el-tag v-else type="info">未回复</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button type="text" @click="viewReply(scope.row)">查看回复</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="message-input">
      <el-form :model="messageForm" label-width="80px">
        <el-form-item label="留言">
          <el-input v-model="messageForm.content" type="textarea" rows="5"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitMessage">提交留言</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-dialog v-model="replyDialogVisible" title="回复内容">
      <span>{{ replyContent }}</span>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const newsForm = ref({
      title: '',
      content: ''
    })
    const newsFormRef = ref(null)
    const rules = {
      title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
      content: [{ required: true, message: '请输入内容', trigger: 'blur' }]
    }
    const newsList = ref([])
    const messageForm = ref({
      content: ''
    })
    const replyDialogVisible = ref(false)
    const replyContent = ref('')

    const submitNews = () => {
      newsFormRef.value.validate(valid => {
        if (newsForm.value.title == '' | newsForm.value.content == '') {
          ElMessage.error('请填写内容后再提交~')
          return
        }
        if (valid) {
          // 提交资讯的逻辑
          const news = {
            title: newsForm.value.title,
            content: newsForm.value.content,
            replied: false
          }
          newsList.value.push(news)
          newsForm.value.title = ''
          newsForm.value.content = ''
        } else {
          console.log('错误提交!!')
          return false
        }
      })
    }

    const viewReply = (news) => {
      // 查看回复的逻辑
      if (news.replied) {
        replyContent.value = '管理员的回复内容'
        replyDialogVisible.value = true
      } else {
        ElMessage.info('管理员还未回复')
      }
    }

    const submitMessage = () => {
      // 提交留言的逻辑
      console.log(messageForm.value.content)
      messageForm.value.content = ''
    }

    return {
      newsForm,
      newsFormRef,
      rules,
      newsList,
      messageForm,
      replyDialogVisible,
      replyContent,
      submitNews,
      viewReply,
      submitMessage
    }
  }
})
</script>

<style scoped>
.news-page {
  padding: 20px;
  margin-left: 15%;
  margin-right: 15%;
}
.news-input {
  margin-bottom: 20px;
}
.news-list {
  margin-bottom: 20px;
}
.message-input {
  margin-bottom: 20px;
}
</style>