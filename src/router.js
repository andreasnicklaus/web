import Vue from 'vue';
import Router from 'vue-router';
import publicPath from '../vue.config'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    base: publicPath,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('./views/About')
        },
        {
            path: '/imprint',
            name: 'Imprint',
            component: () => import('./views/Imprint')
        },
        {
            path: '/CV',
            name: 'CV',
            component: () => import('./views/CV')
        },
        {
            path: '/my-work',
            name: 'MyWork',
            component: () => import('./views/subtopics/MyWork')
        },
        {
            path: '/currency_converter',
            name: 'CurrencyConverter',
            component: () => import('./views/subtopics/functional/CurrencyConverter')
        },
        {
            path: '/games',
            name: 'Games',
            component: () => import('./views/Games'),
            children: [
                {
                    path: 'civilization',
                    name: 'Civilization',
                    component: () => import('./views/games/Civilization')
                },
            ]
        },
        {
            path: '/error',
            name: 'BackendError',
            component: () => import('@/views/backend_errors/internal_error')
        },
        {
            path: '/*',
            name: '404',
            component: () => import('@/views/404')
        }

    ]
})

router.beforeEach((to ,from, next) => {

    window.previousUrl = from.path
    next()

})