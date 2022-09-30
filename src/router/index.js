import { createRouter, createWebHistory} from 'vue-router'
import homeView from '../views/homeView'
import aboutView from '../views/aboutView'


const routes = [
    {
    path: '/',
    name: 'homeView',
    component: homeView
},
    {
    path: '/aboutView',
    name: 'aboutView',
    component: aboutView
},
]


const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router