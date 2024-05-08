<template>
  <div class="article-detail">
    <div class="back-button" @click="goBack">
      <el-icon><Back /></el-icon>
      <span>返回</span>
    </div>
    <el-card>
      <img :src="article.cover" class="article-cover" />
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-meta">
        <span>作者:{{ article.author }}</span>
        <span>发布时间:{{ article.date }}</span>
      </div>
      <div class="article-content" v-html="article.content"></div>
    </el-card>
  </div>
</template>

<script>
import { Back } from '@element-plus/icons-vue'

export default {
  components: {
    Back
  },

  data() {
    return {
      article: {
        title: '文章标题',
        cover: require('@/assets/logo.png'),
        author: '作者名',
        date: '2023-05-08',
        content: '<p>这里是文章内容...</p>'
      }
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.article-detail {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  display: flex;
  align-items: pointer;
  margin-bottom: 20px;
}

.back-button i {
  margin-right: 5px;
}

.article-cover {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 20px;
}

.article-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-meta {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.article-meta span {
  margin-right: 10px;
}

.article-content {
  font-size: 16px;
  line-height: 1.6;
}
</style>