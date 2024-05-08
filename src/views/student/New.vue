<template>
  <div class="container">
    <div>
      <h1>心理文章乐园</h1>
    </div>
    <div class="article-list" style="margin-top: 20px;">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(article, index) in articles" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin: 10px">
            <img :src="article.cover" class="article-cover" />
            <div class="article-content">
              <h3 class="article-title" @click="toDetail(article.title)">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <div class="article-meta">
                <span>{{ article.author }}</span>
                <span>{{ article.date }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: '文章标题1',
          excerpt: '文章摘要1...',
          cover: require('@/assets/logo.png'),
          author: '作者1',
          date: '2023-05-08'
        },
        {
          title: '文章标题1',
          excerpt: '文章摘要1...',
          cover: require('@/assets/logo.png'),
          author: '作者1',
          date: '2023-05-08'
        },
        {
          title: '文章标题1',
          excerpt: '文章摘要1...',
          cover: require('@/assets/logo.png'),
          author: '作者1',
          date: '2023-05-08'
        },
        {
          title: '文章标题1',
          excerpt: '文章摘要1...',
          cover: require('@/assets/logo.png'),
          author: '作者1',
          date: '2023-05-08'
        },
        {
          title: '文章标题1',
          excerpt: '文章摘要1...',
          cover: require('@/assets/logo.png'),
          author: '作者1',
          date: '2023-05-08'
        },
        {
          title: '文章标题1',
          excerpt: '文章摘要1...',
          cover: require('@/assets/logo.png'),
          author: '作者1',
          date: '2023-05-08'
        }
        // ...其他文章数据
      ]
    }
  },

  methods: {
    toDetail(id) {
      this.$router.push('/new/'+id)
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: 15%;
  margin-right: 15%;
}

.article-list {
  max-width: auto;
  margin: 0 auto;
}

.article-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-content {
  padding: 20px;
}

.article-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.article-excerpt {
  color: #666;
  line-height: 1.6;
}

.article-meta {
  margin-top: 10px;
  font-size: 14px;
  color: #999;
}

.article-meta span {
  margin-right: 10px;
}
</style>