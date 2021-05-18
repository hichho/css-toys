import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/modules/mac-dock', component: '@/pages/modules/mac-dock' },
    {
      path: '/modules/cyberpunk-button',
      component: '@/pages/modules/cyberpunk-button',
    },
  ],
  fastRefresh: {},
  title: 'css-toys',
});
