import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const siteRoutes = [
  {
    path: '/',
    component: () => import('@/website/layouts/home'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/website/views/home'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/website/views/about'),
        meta: {src: require('@/website/assets/about.jpg')},
      },
      {
        path: 'contact-us',
        name: 'Contact',
        component: () => import('@/website/views/contact-us'),
        meta: {src: require('@/website/assets/contact.jpg')},
      },
      {
        path: 'features',
        name: 'Features',
        component: () => import('@/website/views/features'),
        meta: {src: require('@/website/assets/pro.jpg')},
      },
      {
        path: '*',
        name: 'Page404',
        component: () => import('@/website/views/404'),
      },
    ],
  },
];

export default new Router({
  mode: 'history', // gh-pages
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return {selector: to.hash}
    if (savedPosition) return savedPosition
    return {x: 0, y: 0}
  },
  routes: [
    ...siteRoutes,
  ],
});
