<template>
  <div class="favorites-page">
    <h2>我的收藏</h2>
    <div class="favorites-tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="收藏文章" name="articles">
          <el-row :gutter="20">
            <el-col :span="8" v-for="article in favoriteArticles" :key="article.id">
              <el-card class="favorite-card">
                <div class="card-header">
                  <h3>{{ article.title }}</h3>
                  <el-button type="text" @click="unfavoriteArticle(article.id)">取消收藏</el-button>
                </div>
                <p>{{ article.excerpt }}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="收藏老师" name="teachers">
          <el-row :gutter="20">
            <el-col :span="8" v-for="teacher in favoriteTeachers" :key="teacher.id">
              <el-card class="favorite-card">
                <div class="card-header">
                  <h3>{{ teacher.name }}</h3>
                  <el-button type="text" @click="unfavoriteTeacher(teacher.id)">取消收藏</el-button>
                </div>
                <p>{{ teacher.description }}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeName = ref('articles')
    const favoriteArticles = ref([
      { id: 1, title: '文章标题 1', excerpt: '文章摘要 1' },
      { id: 2, title: '文章标题 2', excerpt: '文章摘要 2' },
      { id: 3, title: '文章标题 3', excerpt: '文章摘要 3' }
    ])
    const favoriteTeachers = ref([
      { id: 1, name: '老师姓名 1', description: '老师简介 1' },
      { id: 2, name: '老师姓名 2', description: '老师简介 2' },
      { id: 3, name: '老师姓名 3', description: '老师简介 3' }
    ])

    const unfavoriteArticle = (id) => {
      // 取消收藏文章的逻辑
      console.log(`取消收藏文章 ID: ${id}`)
    }

    const unfavoriteTeacher = (id) => {
      // 取消收藏老师的逻辑
      console.log(`取消收藏老师 ID: ${id}`)
    }

    return {
      activeName,
      favoriteArticles,
      favoriteTeachers,
      unfavoriteArticle,
      unfavoriteTeacher
    }
  }
})
</script>

<style scoped>
.favorites-page {
  padding: 20px;
  margin-left: 15%;
  margin-right: 15%;
}
.favorites-tabs {
  margin-top: 20px;
}
.favorite-card {
  margin-bottom: 20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>