<template>
  <div class="exam-container">
    <div class="left-content">
      <h1>心理测评考试</h1>
      <el-divider />
      <div class="demo-collapse" style="margin-top: 20px;">
        <el-form
          label-position="top"
          label-width="auto"
          class="demo-ruleForm"
          status-icon
        >
          <el-form-item v-for="item in data_list" :key="item.id" :label="item.question" :rules="[{ required: true, message: '这道题还没做' }]">
            <el-radio-group v-model="item.answer" class="ml-4">
              <el-radio v-for="option in options" :value="option" :key="option" size="large">{{ option }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="calcScore">
              交卷
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="right-content">
      <el-card style="max-width: 480px">
        <template #header>
          <div class="card-header">
            <h2>心理测评考试规范:</h2>
          </div>
        </template>
        <p>1. 认真对待每一道题目,仔细阅读题干,理解题意。不要草草了事或随意作答。</p>
        <p>2. 如实回答每个题目。测评的目的是了解您的真实状况,而不是评判对错。请依据自己的真实想法和感受作答,不要刻意迎合或隐瞒。</p>
        <p>3. 保持专注,集中注意力。测评过程中请不要分心,也不要与他人交谈或交换意见。</p>
        <p>4. 遵循内心的直觉。对于一些主观题目,请根据自己的第一直觉作答,不要过度推敲或自我怀疑。</p>
        <p>5. 保持诚实。不要试图通过伪装或作假的方式获取理想的测评结果,这无益于了解自身的实际状况。</p>
        <p>6. 尊重隐私。测评结果将严格保密,请放心如实作答,不必担心隐私受损。</p>
        <p>祝您测评顺利!坦诚作答,以求获得可靠的评估结果,从而更好地了解自己。</p>
        <template #footer>
          <h2>评测得分: {{ f_score }}</h2>
          <el-progress type="circle" :percentage="f_score" />
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_list: [
        { id: 0, question: '你感到孤单吗？', answer: '' },
        { id: 1, question: '你感到孤单吗？', answer: '' },
        { id: 2, question: '你感到孤单吗？', answer: '' },
        { id: 3, question: '你感到孤单吗？', answer: '' }
      ],
      options: ['很符合', '比较符合', '没有感觉', '不太符合', '不符合'],
      scores: [10, 8, 6, 3, 0],
      f_score: 0
    };
  },

  mounted() {
  },

  methods: {
    calcScore() {
      // 校验空值
      let score = 0
      for (let item of this.data_list) {
        console.log(item.answer)
        if (!item.answer) {
          this.$message.error('还有题没有做完~')
          return
        }
        else {
          score = score + this.scores[this.options.indexOf(item.answer)]
        }
      }
      // 计算得分
      let total = 10 * this.data_list.length
      this.f_score = (score / total * 100).toFixed(2)
    }
  }
}
</script>

<style>
.exam-container {
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
}

.left-content {
  flex: 1;
  padding-right: 20px; /* 添加右边距 */
}

.right-content {
  flex-shrink: 0; /* 防止右侧内容缩小 */
  width: auto; /* 右侧内容固定宽度 */
  position: sticky; /* 让右侧内容固定在视口 */
  top: 0; /* 距离顶部的距离 */
  padding-left: 20px; /* 添加左边距 */
  height: 100vh; /* 设置右侧容器的高度为视口高度 */
  overflow-y: auto; /* 添加垂直滚动条 */
  display: flex;
  justify-content: center; /* 水平居中 */
}

.content-wrapper {
  display: flex; /* 设置为行排列 */
  flex-direction: column; /* 设置为列排列 */
}
</style>

<style>
.el-form-item__label {
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 30px;
}
</style>
