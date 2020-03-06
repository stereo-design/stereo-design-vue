import StereoButton from './src/button';

StereoButton.install = function(Vue) {
  Vue.component(StereoButton.name, StereoButton);
};

export default StereoButton;
