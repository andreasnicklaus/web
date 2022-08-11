import Vue from 'vue';
import Router from 'vue-router';
import AuthenticationService from '@/services/authentication'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
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
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login')
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () => import('./views/Signup')
        },
        {
            path: '/my-work',
            name: 'MyWork',
            component: () => import('./views/subtopics/MyWork')
        },
        {
            path: '/pixelpaint',
            name: 'Pixelpaint',
            component: () => import('./views/subtopics/community/PixelPaint')
        },
        {
            path: '/forum',
            name: 'MyForum',
            component: () => import('./views/subtopics/community/Forum')
        },
        {
            path: '/forum/create',
            name: 'Forum Post Creation',
            component: () => import('./views/subtopics/community/Forum/Create')
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
                    // name: 'Civilization',
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

    if (isPrivateRoute(to.path)) {
        // is a private route
        AuthenticationService.checkLoginStatus().then(response => {
            if (!response.data.logged_in) {
                // is private route and user is not logged in
                next('/login')
            } else {
                // is a private route and user is logged in
                next()
            }
        })
    } else {
        // is a public route
        next()
    }
})

function isPrivateRoute(route) {
    let privateRoutes = ['/forum']

    for (let privateRouteKey in privateRoutes) {
        let privateRoute = privateRoutes[privateRouteKey]
        if (route.startsWith(privateRoute)) {
            return true
        }
    }

    return false
}
