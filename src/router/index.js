import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 学术部分
  {
    path: '/',
    name: '用户',
    component: () => import('@/views/student/index.vue'),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import('@/views/student/Home.vue')
      },
      {
        path: "/announcement",
        name: "announcement",
        component: () => import('@/views/student/Announcement.vue')
      },
      {
        path: "/exam",
        name: "exam",
        component: () => import('@/views/student/Exam.vue')
      }
    ]
  },
  {
    path: "/404",
    name: "404界面",
    component: () => import("@/views/BanView.vue")
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
  if (to.matched.length == 0) {
    next("/404");
  }
  if (to.fullPath.includes("login") | to.fullPath.includes("register")) {
    next();
  } else if (localStorage.getItem("user_info")) {
    let user_info = JSON.parse(localStorage.getItem("user_info"));
    if (to.fullPath.includes("admin") & (user_info.is_admin == 0)) {
      next("/404");
    } else {
      next(); // 已登录,允许访问
    }
  } else {
    next("/login"); // 未登录,重定向到登录页
  }
});
