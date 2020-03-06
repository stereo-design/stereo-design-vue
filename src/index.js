import Button from '../packages/button/index.js';

const components = {
  Button
};

const install = function(Vue, ops = {}) {
  if (install.installed) {
    return;
  }
  console.log(ops);

  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  version: '1.0.0',
  install,
  ...components
};
