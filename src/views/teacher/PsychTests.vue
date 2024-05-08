<template>
  <div class="psych-tests-and-warnings">
    <h2>心理测试</h2>
    <div class="test-bank">
      <h3>测试题库</h3>
      <div class="search-filter">
        <el-input v-model="searchQuery" placeholder="搜索题目" style="margin-right: 20px;" clearable></el-input>
        <el-button type="primary" @click="showAddQuestionDialog">添加题目</el-button>
        <el-button @click="resetTestBank">重置题库</el-button>
      </div>
      <div class="question-list">
        <el-card class="question-card" v-for="(question, index) in paginatedQuestions" :key="index">
          <div class="question-content">
            <span>{{ question.question }}</span>
          </div>
          <div class="question-actions">
            <el-button type="danger" size="small" @click="deleteQuestion(index)">删除</el-button>
          </div>
        </el-card>
      </div>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="filteredQuestions.length"
          :page-size="pageSize"
          v-model:current-page="currentPage"
        ></el-pagination>
      </div>
    </div>

    <div class="test-records">
      <h3>测试记录</h3>
      <el-table :data="paginatedTestRecords" style="width: 100%;">
        <el-table-column prop="student" label="学生" width="180"></el-table-column>
        <el-table-column prop="testName" label="测试名称" width="200"></el-table-column>
        <el-table-column prop="score" label="得分" width="120"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button type="primary" size="small" @click="analyzeTest(scope.row)">分析评价</el-button>
            <el-button type="warning" size="small" @click="sendWarning(scope.row)">发送预警</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="testRecords.length"
          :page-size="pageSize"
          v-model:current-page="currentPage"
        ></el-pagination>
      </div>
    </div>

    <el-dialog v-model="addQuestionDialogVisible" title="添加题目">
      <el-form :model="newQuestion" label-width="80px">
        <el-form-item label="题目">
          <el-input v-model="newQuestion.question" type="textarea" rows="3"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="addQuestionDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addQuestion">确定</el-button>
      </template>
    </el-dialog>

    <el-dialog v-model="analysisDialogVisible" title="分析评价">
      <p>学生: {{ currentTest.student }}</p>
      <p>测试名称: {{ currentTest.testName }}</p>
      <p>得分: {{ currentTest.score }}</p>
      <p>分析结果:</p>
      <el-input v-model="analysisResult" type="textarea" rows="5"></el-input>
      <template #footer>
        <el-button @click="analysisDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveAnalysis">保存</el-button>
      </template>
    </el-dialog>

    <el-dialog v-model="warningDialogVisible" title="发送预警">
      <p>学生: {{ currentTest.student }}</p>
      <p>测试名称: {{ currentTest.testName }}</p>
      <p>预警信息:</p>
      <el-input v-model="warningMessage" type="textarea" rows="5"></el-input>
      <template #footer>
        <el-button @click="warningDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="sendWarningMessage">发送</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup() {
    const testBank = ref([
      { question: '你经常感到焦虑或紧张吗?' },
      { question: '你是否容易失眠或睡眠质量差?' },
      { question: '你是否对自己的身体或健康状况感到担心?' }
    ])

    const testRecords = ref([
      { student: '张三', testName: '焦虑测试', score: 80, date: '2023-05-15' },
      { student: '李四', testName: '抑郁测试', score: 60, date: '2023-05-20' },
      { student: '王五', testName: '焦虑测试', score: 75, date: '2023-05-22' }
    ])

    const addQuestionDialogVisible = ref(false)
    const newQuestion = ref({ question: '' })
    const searchQuery = ref('')
    const analysisDialogVisible = ref(false)
    const warningDialogVisible = ref(false)
    const currentTest = ref({})
    const analysisResult = ref('')
    const warningMessage = ref('')
    const currentPage = ref(1)
    const pageSize = ref(5)

    const filteredQuestions = computed(() => {
      return testBank.value.filter(q => q.question.includes(searchQuery.value))
    })

    const paginatedQuestions = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize.value
      const endIndex = startIndex + pageSize.value
      return filteredQuestions.value.slice(startIndex, endIndex)
    })

    const paginatedTestRecords = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize.value
      const endIndex = startIndex + pageSize.value
      return testRecords.value.slice(startIndex, endIndex)
    })

    const showAddQuestionDialog = () => {
      addQuestionDialogVisible.value = true
    }

    const addQuestion = () => {
      if (newQuestion.value.question.trim()) {
        testBank.value.push({ question: newQuestion.value.question })
        newQuestion.value.question = ''
        addQuestionDialogVisible.value = false
      } else {
        alert('请输入题目')
      }
    }

    const deleteQuestion = (index) => {
      testBank.value.splice(index, 1)
    }

    const resetTestBank = () => {
      testBank.value = []
    }

    const analyzeTest = (test) => {
      currentTest.value = test
      analysisDialogVisible.value = true
    }

    const sendWarning = (test) => {
      currentTest.value = test
      warningDialogVisible.value = true
    }

    const saveAnalysis = () => {
      // 保存分析结果的逻辑
      console.log('分析结果:', analysisResult.value)
      analysisDialogVisible.value = false
      analysisResult.value = ''
    }

    const sendWarningMessage = () => {
      // 发送预警信息的逻辑
      console.log('预警信息:', warningMessage.value)
      warningDialogVisible.value = false
      warningMessage.value = ''
    }

    return {
      testBank,
      testRecords,
      addQuestionDialogVisible,
      newQuestion,
      searchQuery,
      analysisDialogVisible,
      warningDialogVisible,
      currentTest,
      analysisResult,
      warningMessage,
      currentPage,
      pageSize,
      filteredQuestions,
      paginatedQuestions,
      paginatedTestRecords,
      showAddQuestionDialog,
      addQuestion,
      deleteQuestion,
      resetTestBank,
      analyzeTest,
      sendWarning,
      saveAnalysis,
      sendWarningMessage
    }
  }
})
</script>

<style scoped>
.psych-tests-and-warnings {
  padding: 20px;
}

.test-bank,
.test-records {
  margin-bottom: 30px;
}

.search-filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.question-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.question-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.question-content {
  margin-bottom: 10px;
}

.question-actions {
  display: flex;
  justify-content: flex-end;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>