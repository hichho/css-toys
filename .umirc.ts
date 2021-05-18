import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/modules/mac-dock', component: '@/pages/modules/mac-dock' },
  ],
  fastRefresh: {},
  title: 'css-toys',
});
