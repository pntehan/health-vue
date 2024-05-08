<template>
  <div class="teacher-layout">
    <teacher-header />
    <div class="main-container">
      <teacher-sidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TeacherHeader from './TeacherHeader.vue'
import TeacherSidebar from './TeacherSidebar.vue'

export default {
  components: {
    TeacherHeader,
    TeacherSidebar
  }
}
</script>

<style scoped>
.teacher-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
