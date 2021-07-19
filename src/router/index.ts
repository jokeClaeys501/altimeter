import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import EC2Instances from '../views/EC2Instances.vue';
import LambdaFunctions from '../views/LambdaFunctions.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ec2',
    name: 'EC2',
    component: EC2Instances,
  },
  {
    path: '/lambda-function',
    name: 'LambdaFunction',
    component: LambdaFunctions,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
