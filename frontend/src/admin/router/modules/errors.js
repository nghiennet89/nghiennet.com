/** When your routing table is too long, you can split it into small modules */

import ErrorLayout from '@/admin/layout/TheErrorLayout.vue';
import ErrorPage from '@/admin/pages/ErrorPage.vue';

const errorsRouter = {
  path: '/error',
  component: ErrorLayout,
  name: 'ErrorPages',
  children: [
    {
      path: '301',
      component: ErrorPage,
      name: 'Page301',
      props: {errorCode: 301},
    },
    {
      path: '401',
      component: ErrorPage,
      name: 'Page401',
      props: {errorCode: 401},
    },
    {
      path: '403',
      component: ErrorPage,
      name: 'Page403',
      props: {errorCode: 403},
    },
    {
      path: '404',
      component: ErrorPage,
      name: 'Page404',
      props: {errorCode: 404},
    },
    {
      path: '500',
      component: ErrorPage,
      name: 'Page500',
      props: {errorCode: 500},
    },
  ],
};

export default errorsRouter;
