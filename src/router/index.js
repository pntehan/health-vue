import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 学生部分
  {
    path: '/',
    name: 'student',
    component: () => import('@/views/student/index.vue'),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import('@/views/student/Home.vue')
      },
      {
        path: "/exam",
        name: "exam",
        component: () => import('@/views/student/Exam.vue')
      },
      {
        path: "/announcement",
        name: "announcement",
        component: () => import('@/views/student/Announcement.vue')
      },
      {
        path: "/new",
        name: "new",
        component: () => import('@/views/student/New.vue')
      },
      {
        path: "/new/:id",
        name: "newDetail",
        component: () => import("@/views/student/NewDetail.vue")
      },
      {
        path: "/book",
        name: "book",
        component: () => import("@/views/student/Book.vue")
      },
      {
        path: "/consult",
        name: "consult",
        component: () => import("@/views/student/Consult.vue")
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/student/User.vue")
      },
      {
        path: "/star",
        name: "star",
        component: () => import("@/views/student/Star.vue")
      }
    ]
  },
  // 老师部分
  {
    path: '/teacher',
    component: () => import("@/components/TeacherLayout.vue"),
    name: 'teacher',
    children: [
      {
        path: '',
        name: 'index',
        component: () => import("@/views/teacher/Dashboard.vue"),
        meta: { menuIndex: '/teacher' }
      },
      {
        path: 'appointments',
        name: 'Appointments',
        component: () => import("@/views/teacher/Appointments.vue"),
        meta: { menuIndex: '/teacher/appointments' }
      },
      {
        path: 'psychTests',
        name: 'PsychTests',
        component: () => import("@/views/teacher/PsychTests.vue"),
        meta: { menuIndex: '/teacher/psychTests' }
      },
      {
        path: 'consult',
        name: 'Consult',
        component: () => import("@/views/teacher/Consult.vue"),
        meta: { menuIndex: '/teacher/consult' }
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: () => import("@/views/teacher/Feedback.vue"),
        meta: { menuIndex: '/teacher/feedback' }
      },
      {
        path: "user",
        name: "User",
        component: () => import("@/views/teacher/User.vue")
      }
    ]
  },
  // 管理员部分
  {
    path: '/admin',
    component: () => import("@/components/AdminLayout.vue"),
    name: 'admin',
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import("@/views/admin/Dashboard.vue"),
        meta: { menuIndex: '/admin' }
      },
      {
        path: 'userData',
        name: 'UserData',
        component: () => import("@/views/admin/UserData.vue"),
        meta: { menuIndex: '/admin/userData' }
      },
      {
        path: 'consultData',
        name: 'ConsultData',
        component: () => import("@/views/admin/ConsultData.vue"),
        meta: { menuIndex: '/admin/consultData' }
      },
      {
        path: 'systemData',
        name: 'SystemData',
        component: () => import("@/views/admin/SystemData.vue"),
        meta: { menuIndex: '/admin/systemData' }
      },
    ]
  },
  // 公共部分
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/BanView.vue")
  },
  {
    path: "/s_login",
    name: "s_login",
    component: () => import("@/views/student/Login.vue")
  },
  {
    path: "/t_login",
    name: "t_login",
    component: () => import("@/views/teacher/Login.vue")
  },
  {
    path: "/a_login",
    name: "a_login",
    component: () => import("@/views/admin/Login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  // base:
  //   process.env.NODE_ENV !== "production"
  //     ? process.env.BASE_URL
  //     : process.env.BASE_URL  ,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 0 };
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.fullPath.includes("404")) {
    next()
  }
  if (to.matched.length == 0) {
    next("/404")
  }
  if (to.fullPath.includes("login") | to.fullPath.includes("register")) {
    next()
  } 
  else if (localStorage.getItem("user_info")) {
    let user_info = JSON.parse(localStorage.getItem("user_info"))
    // 教师检查
    if (to.fullPath.includes("teacher")) {
      if (user_info.role == "老师") {
        next()
      }
      else {
        next("/404")
      }
    }
    // 管理员检查
    else if (to.fullPath.includes("admin")) {
      if (user_info.role == "管理员") {
        next()
      }
      else {
        next("/404")
      }
    }
    else {
      next()
    }
  }
  else {
    next("/s_login")
  }
})
