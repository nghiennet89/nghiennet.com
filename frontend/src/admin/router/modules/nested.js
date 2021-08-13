import Nasted from '@/admin/components/Nasted.vue';

const nestedRouter = {
  path: '/nested',
  component: Nasted,
  redirect: 'noredirect',
  name: 'NestedMenu',
  meta: {
    title: 'route.nested.nested',
    icon: 'mdi-file-tree',
  },
  children: [
    {
      path: 'nested1',
      component: Nasted,
      name: 'Nested1',
      meta: {
        title: 'route.nested.nested1', icon: 'looks_two', noCache: true, affix: true,
      },
      children: [
        {
          path: 'nested1_1',
          component: Nasted,
          name: 'Nested1_1',
          meta: {
            title: 'route.nested.nested2', icon: 'looks_3', noCache: true, affix: true,
          },
          children: [
            {
              path: 'nested1_1_1',
              component: Nasted,
              name: 'Nested1_1_1',
              meta: {
                title: 'route.nested.nested3', icon: 'looks_4', noCache: true, affix: true,
              },
            },
            {
              path: 'nested1_1_2',
              component: Nasted,
              name: 'Nested1_1_2',
              meta: {
                title: 'route.nested.nested3', icon: 'looks_4', noCache: true, affix: true,
              },
            },
            {
              path: 'nested1_1_3',
              component: Nasted,
              name: 'Nested1_1_3',
              meta: {
                title: 'route.nested.nested3', icon: 'looks_4', noCache: true, affix: true,
              },
            },
          ],
        },
        {
          path: 'nested1_2',
          component: Nasted,
          name: 'Nested1_2',
          meta: {
            title: 'route.nested.nested2', icon: 'looks_3', noCache: true, affix: true,
          },
        },
        {
          path: 'nested1_3',
          component: Nasted,
          name: 'Nested1_3',
          meta: {
            title: 'route.nested.nested2', icon: 'looks_3', noCache: true, affix: true,
          },
        },
      ],
    },
    {
      path: 'nested2',
      component: Nasted,
      name: 'Nested2',
      meta: {
        title: 'route.nested.nested1', icon: 'looks_two', noCache: true, affix: true,
      },
    },
    {
      path: 'nested3',
      component: Nasted,
      name: 'Nested3',
      meta: {
        title: 'route.nested.nested1', icon: 'looks_two', noCache: true, affix: true,
      },
    },
  ],
};

export default nestedRouter;