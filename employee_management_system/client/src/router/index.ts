import { createRouter, createWebHistory } from "vue-router";

import EmployeesView from '../views/EmployeesView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'employees',
            component: EmployeesView
        },
        {
            path: '/pastempl',
            name: 'pastempl',
            component: () => import('../views/PastEmplView.vue')
        },
        {
            path: '/positions',
            name: 'positions',
            component: () => import('../views/PositionsView.vue')
        },
        {
            path: '/employee/:action/:id',
            name: 'employeeInfo',
            component: () => import('../views/AddEditEmployee.vue')
        },
        {
            path: '/positions/new',
            name: 'newPosition',
            component: () => import('../views/AddPositionView.vue')
        }
    ]
});

export default router;