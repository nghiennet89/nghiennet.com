import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/admin/layout/TheLayout.vue';

/* Router Modules */
import authRouter from '@/admin/router/modules/auth';
import errorsRouter from '@/admin/router/modules/errors';
import mainRouter from "@/admin/router/modules/main";
import {CONSTANTS} from '@/config'

const ROLES = CONSTANTS.ROLES;
Vue.use(Router);

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 */

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its
 *                                child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    [expected] noCache: true     if true, the page will no be cached(default is false)
    [expected] breadcrumb: false if false, the item will hidden in breadcrumb(default is true)
    [expected] affix: true       if true, the tag will affix in the tags-view
  }
 */

export const adminRoutes = [
  ...authRouter,
  {
    path: '/',
    component: Layout,
    redirect: {name: 'Dashboard'},
    meta: {
      auth: true
    },
    children: [
      {
        path: '/dashboard',
        component: () => import('@/admin/pages/Dashboard'),
        name: 'Dashboard',
        meta: {
          noCache: true,
          affix: true,
        },
      },
      {
        path: '/theme',
        component: () => import('@/admin/components/Theme.vue'),
        name: 'Theme',
      },
      {
        path: '/i18n',
        component: () => import('@/admin/components/I18n.vue'),
        name: 'I18n',
      },
      {
        path: '/profile',
        component: () => import('@/admin/pages/Profile'),
        name: 'Profile',
        meta: {
          noCache: true,
          roles: [ROLES.SUPER_ADMINISTRATOR, ROLES.NORMAL_USER],
          affix: true,
        },
      },
      ...mainRouter
    ]
  },
];

export default new Router({
  //mode: 'history', // gh-pages
  //base: '/admin',
  scrollBehavior: () => ({y: 0}),
  routes: [
    ...adminRoutes,
    errorsRouter,
    {
      path: '/:catchAll(.*)',
      redirect: {name: 'Page404'},
      hidden: true
    },
  ],
});
