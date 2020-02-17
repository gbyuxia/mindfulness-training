import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const orderClick = () => import('@/pages/orderClick');
const tableAdd =  () => import('@/pages/tableAdd');
const transcribe = () => import('@/pages/transcribe');

const routes = [
    {
        path: '/',
        name: 'orderClick',
        component: orderClick
    },
    {
        path: '/tableAdd',
        name: 'tableAdd',
        component: tableAdd
    },
    {
        path: '/transcribe',
        name: 'transcribe',
        component: transcribe
    }
];
export default new Router({
    linkActiveClass: 'active',
    routes: routes
});