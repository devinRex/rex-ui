import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component(resolve) {
        require(['@/doc/test.md'], resolve);
      },
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
