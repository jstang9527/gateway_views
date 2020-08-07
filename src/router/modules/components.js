/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '主机列表',
    icon: 'list'
  },
  children: [
    {
      path: 'json-editor',
      component: () => import('@/views/action-chain/json-editor'),
      name: '行为链',
      meta: { title: '行为链' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/nodes/mixin'),
      name: '主机列表',
      meta: { title: '主机列表' }
    }
  ]
}

export default componentsRouter
