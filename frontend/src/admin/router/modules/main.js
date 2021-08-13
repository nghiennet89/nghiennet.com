import {CONSTANTS} from '@/config'

const ROLES = CONSTANTS.ROLES;

const requireResources = require.context('@/admin/router/modules/resources', true, /\.js$/);
let listResources = [];
for (const file of requireResources.keys()) {
  const resourceConfig = requireResources(file)
  listResources.push(resourceConfig.default || resourceConfig);
}

export default [
  {
    path: '/manage-users',
    component: () => import('@/admin/pages/ManageUsers'),
    name: 'ManageUsers',
    meta: {
      noCache: true,
      roles: [ROLES.SUPER_ADMINISTRATOR],
      affix: true,
    },
  },
  {
    path: '/manage-roles',
    component: () => import('@/admin/pages/ManageRoles'),
    name: 'ManageRoles',
    meta: {
      noCache: true,
      roles: [ROLES.SUPER_ADMINISTRATOR],
      affix: true,
    },
  },
  {
    path: '/manage-scopes',
    component: () => import('@/admin/pages/ManageScopes'),
    name: 'ManageScopes',
    meta: {
      noCache: true,
      roles: [ROLES.SUPER_ADMINISTRATOR],
      affix: true,
    },
  },
  ...listResources
]
