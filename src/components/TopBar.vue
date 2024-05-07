<template>
  <div class="top-bar">
    <div class="logo">
      <el-image style="width: 200px;" :src="require('@/assets/logo.png')" fit="scale-down" />
      <span>{{ websiteName }}</span>
    </div>
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="主页" name="home"></el-tab-pane>
      <el-tab-pane label="心理测评" name="exam"></el-tab-pane>
      <el-tab-pane label="公告信息" name="announcement"></el-tab-pane>
      <el-tab-pane label="心理文章" name="exam"></el-tab-pane>
      <el-tab-pane label="预约中心" name="exam"></el-tab-pane>
      <el-tab-pane label="资讯专栏" name="exam"></el-tab-pane>
      <el-tab-pane label="留言反馈" name="exam"></el-tab-pane>
      <!-- Add more tabs as needed -->
    </el-tabs>
    <div class="user-info">{{ userInfo }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'home', // Default active tab
    };
  },

  props: {
    websiteName: String,
    tabName: String,
    userInfo: String,
  },

  watch: {
    tabName(newValue) {
      this.activeTab = newValue
    },
  },


  mounted() {
    this.activeTab = this.tabName
  },

  methods: {
    handleTabClick(tab) {
      this.activeTab = tab.props.name
      this.$router.push('/'+tab.props.name)
    },
  },
};
</script>

<style lang="less" scoped>
  ::v-deep .el-tabs__content {
    overflow: visible;
  }  
  ::v-deep .el-tabs__item {
    font-size: 16px;
    color: white;
  }
  ::v-deep .el-tabs__item.is-active {
    color: #15cbf3;
  }
  ::v-deep .el-icon-arrow-left {
    color: white;
  }
  ::v-deep .el-icon-arrow-right {
    color: white;
  }
  ::v-deep .el-tabs__nav-wrap::after {
    height: 0;
  }
  ::v-deep .el-tabs__active-bar {
    background-color: #15cbf3;
  }
</style>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 40px;
  margin-right: 10px;
}

.logo span {
  font-size: 20px;
  margin-top: 5px; /* 调整文字与图片的间距 */
  margin-left: 20px;
}

.top-bar {
  background-color: #333; /* 设置背景颜色 */
  color: #fff; /* 设置文字颜色 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  font-size: 20px;
}

.user-info {
  font-size: 14px;
}

/* 标签页样式 */
.tabs {
  color: #fff;
}

.el-tabs__item.is-active {
  color: #ff9900; /* 设置激活标签的颜色 */
}
</style>
  