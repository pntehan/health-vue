<template>
  <div>
    <top-bar :websiteName="websiteName" :tabName="tabName" :userInfo="userInfo" />
    <router-view class="container"></router-view>
    <bottom-bar :websiteInfo="websiteInfo" />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  components: {
    TopBar,
    BottomBar,
  },
  data() {
    return {
      websiteName: '大学生心理健康网站',
      tabName: 'home',
      userInfo: 'User Information',
      websiteInfo: 'Your Website Information',
    };
  },
  mounted() {
    this.tabName = this.$route.name
  }
};
</script>

<style>
.container {
  margin-bottom: 100px;
}
</style>
