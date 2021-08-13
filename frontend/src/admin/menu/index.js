import {CONSTANTS} from '@/config'

const requireResources = require.context('@/admin/menu/resources', true, /\.js$/);
let listResources = [];
for (const file of requireResources.keys()) {
  const resourceConfig = requireResources(file)
  listResources.push(resourceConfig.default || resourceConfig);
}

export default [
  {
    name: 'Dashboard',
    title: 'route.dashboard',
    icon: 'mdi-view-dashboard'
  },
  {
    title: 'menu.auth.title',
    icon: 'mdi-account-group',
    role: [CONSTANTS.ROLES.SUPER_ADMINISTRATOR],
    children: [
      {
        name: 'ManageUsers',
        title: 'menu.auth.manageUsers',
        icon: 'mdi-account-multiple'
      },
      {
        name: 'ManageRoles',
        title: 'menu.auth.manageRoles',
        icon: 'mdi-account-multiple-check',
      },
      {
        name: 'ManageScopes',
        title: 'menu.auth.manageScopes',
        icon: 'mdi-account-question',
      },
    ]
  },
  {
    title: 'Resources',
    icon: 'mdi-alpha-r-box-outline',
    children: listResources,
  },
  {
    title: 'route.config',
    icon: 'mdi-cog',
    children: [
      {
        name: 'Theme',
        title: 'route.theme',
        icon: 'mdi-palette'
      },
      {
        name: 'I18n',
        title: 'route.i18n',
        icon: 'mdi-translate'
      },
    ]
  },
  // ...permission,
  // ...vuetify,
  // ...componentDemo,
  // ...charts,
  // ...nested,
  // ...errorPages,
]
