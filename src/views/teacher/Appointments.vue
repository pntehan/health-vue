<template>
  <div class="appointments">
    <h2>预约安排</h2>
    <el-table :data="appointments" style="width: 100%" stripe>
      <el-table-column prop="student" label="学生" width="180"></el-table-column>
      <el-table-column prop="date" label="预约日期" width="180"></el-table-column>
      <el-table-column prop="time" label="预约时间" width="180"></el-table-column>
      <el-table-column prop="status" label="状态" width="120">
        <template #default="scope">
          <el-tag :type="scope.row.status === '待审核' ? 'warning' : 'success'">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button v-if="scope.row.status === '待审核'" type="primary" size="small" @click="approveAppointment(scope.row)">安排</el-button>
          <el-button type="danger" size="small" @click="cancelAppointment(scope.row)">取消</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


  


<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const appointments = ref([
      { student: '张三', date: '2023-05-15', time: '10:00', status: '待审核' },
      { student: '李四', date: '2023-05-16', time: '14:00', status: '待审核' },
      { student: '王五', date: '2023-05-17', time: '16:00', status: '已安排' }
    ])

    const approveAppointment = (appointment) => {
      appointment.status = '已安排'
      // 通知学生预约已审核
    }

    const cancelAppointment = (appointment) => {
      // 取消预约并通知学生
      appointment.status = '已取消'
    }

    return {
      appointments,
      approveAppointment,
      cancelAppointment
    }
  }
})
</script>

<style scoped>
.appointments {
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-right: 15%;
}

.el-table th {
  background-color: #f5f7fa;
  color: #909399;
  font-size: 14px;
}

.el-table td {
  font-size: 13px;
  line-height: 1.5;
}

.appointment-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
}

.appointment-row > div {
  flex: 1;
  padding: 0 10px;
}

.el-button {
  font-size: 12px;
  padding: 6px 12px;
}

.el-button + .el-button {
  margin-left: 10px;
}

.el-button--primary {
  background-color: #409eff;
  border-color: #409eff;
}

.el-button--danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
}
</style>