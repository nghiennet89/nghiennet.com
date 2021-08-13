/** When your routing table is too long, you can split it into small modules */
import {CONSTANTS} from '@/config'
import Layout from '@/admin/layout/TheLayout.vue';

const ROLES = CONSTANTS.ROLES;

const permissionRouter = {
  path: '/permission',
  component: Layout,
  redirect: 'noredirect',
  name: 'Permission',
  meta: {
    title: 'route.permissions',
    icon: 'mdi-account-group',
  },
  children: [
    {
      path: 'admin',
      component: () => import('@/admin/components/Permission/Admin.vue'),
      name: 'PermissionAdmin',
      meta: {
        title: 'route.permission.admin',
        roles: [ROLES.SUPER_ADMINISTRATOR],
        noCache: true
      },
    },
    {
      path: 'editor',
      component: () => import('@/admin/components/Permission/Editor.vue'),
      name: 'PermissionEditor',
      meta: {
        title: 'route.permission.editor',
        roles: [ROLES.EDITOR],
        noCache: true
      },
    },
    {
      path: 'visitor',
      component: () => import('@/admin/components/Permission/Visitor.vue'),
      name: 'PermissionVisitor',
      meta: {
        title: 'route.permission.visitor',
        roles: [ROLES.VISITOR],
        noCache: true
      },
    },
  ],
};

export default permissionRouter;
