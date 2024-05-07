<template>
  <div class="container">
    <div>
      <h1>公告栏</h1>
    </div>
    <div class="demo-collapse" style="margin-top: 20px;">
      <el-collapse>
        <el-collapse-item v-for="item in item_list" :title="item.title" :name="item.id" :key="item.id">
          <div>
            {{ item.content }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div style="display: flex; justify-content: center;">
      <el-pagination background layout="prev, pager, next" :total="all_list.length" style="margin-top: 20px;" @current-change="pageChange" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all_list: [
        { id: 0, title: '公告一', intro: '简介', content: '内容' },
        { id: 1, title: '公告二', intro: '简介', content: '内容' },
        { id: 2, title: '公告三', intro: '简介', content: '内容' },
        { id: 3, title: '公告四', intro: '简介', content: '内容' },
        { id: 4, title: '公告五', intro: '简介', content: '内容' },
        { id: 5, title: '公告六', intro: '简介', content: '内容' },
        { id: 6, title: '公告七', intro: '简介', content: '内容' },
        { id: 7, title: '公告八', intro: '简介', content: '内容' },
        { id: 8, title: '公告九', intro: '简介', content: '内容' },
        { id: 9, title: '公告十', intro: '简介', content: '内容' },
        { id: 10, title: '公告十一', intro: '简介', content: '内容' },
        { id: 11, title: '公告十二', intro: '简介', content: '内容' },
        { id: 12, title: '公告十三', intro: '简介', content: '内容' },
        { id: 13, title: '公告十四', intro: '简介', content: '内容' },
        { id: 14, title: '公告十五', intro: '简介', content: '内容' },
        { id: 15, title: '公告十六', intro: '简介', content: '内容' }
      ],
      item_list: []
    };
  },

  mounted() {
    for (let i=0; i<10; i++) {
      this.item_list.push(this.all_list[i])
    }
  },

  methods: {
    pageChange(page) {
      this.item_list = []
      for (let i=0; i<10; i++) {
        let ind = (page - 1) * 10 + i
        if (ind >= this.all_list.length) {
          break
        }
        this.item_list.push(this.all_list[ind])
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
