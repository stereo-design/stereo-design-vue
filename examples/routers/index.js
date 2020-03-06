import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const viewFilePaths = require.context('../pages', true, /\.vue$/i).keys();

let routes = [];

viewFilePaths.forEach(item => {
  // 当路径不为空，并且内容存在.vue中进行路由处理
  if (item && item.indexOf('.vue') != -1) {
    let routePath = item.substr(1).replace('.vue', '');

    let routeName = routePath
      .toLowerCase()
      .split('/')
      .filter(i => i && i != 'index')
      .join('-');

    routes.push({
      path: routePath.toLowerCase().replace('/index', ''),
      name: routeName,
      component: () => import(`@/views${routePath}`)
    });
  }
});
export default new Router({
  //mode: 'history',
  mode: 'hash',
  base: '/',
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('../pages/home')
    },
    ...routes
  ]
});
