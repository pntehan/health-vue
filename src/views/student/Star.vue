<template>
  <div class="favorites-page">
    <h2>我的收藏</h2>
    <div class="favorites-tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="收藏文章" name="articles">
          <el-row :gutter="20">
            <el-col :span="8" v-for="article in favoriteArticles" :key="article.id">
              <el-card class="favorite-card" @click="this.$router.push('/new/'+article.article_id)">
                <div class="card-header">
                  <h3>{{ article.title }}</h3>
                  <el-button type="text" @click="unfavoriteArticle(article.id)">取消收藏</el-button>
                </div>
                <p>{{ article.content.split('&&')[0] + '......' }}</p>
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
                <p>{{ teacher.intro }}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { initStar } from '@/api/Student'

export default defineComponent({
  setup(props, { emit }) {
    emit('change-value', '')

    const activeName = ref('articles')
    const favoriteArticles = ref([])
    const favoriteTeachers = ref([])

    onMounted(() => {
      let user_info = JSON.parse(localStorage.getItem('user_info'))
      initStar({student_id: user_info.id}).then((res) => {
        favoriteArticles.value = res.articles
        favoriteArticles.value.sort((a, b) => new Date(b.up_time) - new Date(a.up_time))
        favoriteTeachers.value = res.teachers
        favoriteTeachers.value.sort((a, b) => new Date(b.up_time) - new Date(a.up_time))
      })
    })

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