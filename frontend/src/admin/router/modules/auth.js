/** When your routing table is too long, you can split it into small modules */

const authRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/admin/auth/Login.vue'),
    hidden: true,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/admin/auth/Register.vue'),
    hidden: true,
  },
];

export default authRouter;
