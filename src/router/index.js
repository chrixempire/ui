import { createRouter, createWebHistory} from 'vue-router'
import aboutView from '../views/aboutView'


const routes = [{
    path: '/aboutView',
    name: 'aboutView',
    component: aboutView
}]


const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router