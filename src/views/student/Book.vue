<template>
  <div class="appointment-center">
    <div class="main-content">
      <div class="search-bar">
        <el-input v-model="searchText" placeholder="搜索老师" prefix-icon="el-icon-search"></el-input>
      </div>
      <div class="teacher-list">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(teacher, index) in filteredTeachers" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="teacher.avatar" class="teacher-avatar" />
              <div class="teacher-info">
                <h3 class="teacher-name">{{ teacher.name }}</h3>
                <p class="teacher-intro">{{ teacher.intro }}</p>
                <div class="appointment-button">
                  <el-button type="primary" @click="makeAppointment(teacher)">预约</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="sidebar">
      <h3>当前预约</h3>
      <ul class="appointment-list">
        <li v-for="(appointment, index) in appointments" :key="index">
          <span>{{ appointment.teacher }}</span>
          <span>{{ appointment.date }}</span>
          <el-button type="text" @click="cancelAppointment(index)">取消</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      teachers: [
        {
          name: '老师1',
          avatar: require('@/assets/logo.png'),
          intro: '老师1的介绍...'
        },
        {
          name: '老师2',
          avatar: require('@/assets/logo.png'),
          intro: '老师1的介绍...'
        },
        {
          name: '老师3',
          avatar: require('@/assets/logo.png'),
          intro: '老师1的介绍...'
        },
        {
          name: '老师4',
          avatar: require('@/assets/logo.png'),
          intro: '老师1的介绍...'
        },
        // ...其他老师数据
      ],
      appointments: [
        {
          teacher: '老师4',
          date: '2024.06.01'
        },
      ],
      maxAppointmentsPerDay: 2
    }
  },
  computed: {
    filteredTeachers() {
      return this.teachers.filter(teacher => teacher.name.includes(this.searchText))
    },
    canAppointment() {
      return this.appointments.length < this.maxAppointmentsPerDay
    }
  },
  methods: {
    makeAppointment(teacher) {
      if (this.canAppointment) {
        this.appointments.push({
          teacher: teacher.name,
          date: new Date().toLocaleDateString()
        })
      } else {
        this.$message.warning('今日预约次数已达上限')
      }
    },
    cancelAppointment(index) {
      this.appointments.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.appointment-center {
  display: flex;
  margin-left: 15%;
  margin-right: 15%;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.search-bar {
  margin-bottom: 20px;
}

.teacher-avatar {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.teacher-info {
  padding: 20px;
}

.teacher-name {
  font-size: 18px;
  margin-bottom: 10px;
}

.teacher-intro {
  color: #666;
  line-height: 1.6;
}

.appointment-button {
  margin-top: 20px;
  text-align: right;
}

.sidebar {
  margin: 20px;
  width: 300px;
  padding: 20px;
  background-color: #f5f5f5;
}

.appointment-list {
  list-style: none;
  padding: 0;
}

.appointment-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>