import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import(/* webpackChunkName: "about" */ '../views/Categoria.vue')
  },
  {
    path: '/categorias/:id/editar',
    name: 'editar_categoria',
    component: () => import(/* webpackChunkName: "about" */ '../views/CategoriaEditar.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producto.vue')
  },
  {
    path: '/productos/:id/editar',
    name: 'editar_producto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoEditar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
