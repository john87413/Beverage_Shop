import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue";
import Main from './views/Main.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'

import IngredientEdit from './views/IngredientEdit.vue'
import IngredientList from './views/IngredientList.vue'

import DrinkEdit from './views/DrinkEdit.vue'
import DrinkList from './views/DrinkList.vue'

import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'

import AdEdit from './views/AdEdit.vue'
import AdList from './views/AdList.vue'

import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'

Vue.use(Router)

const router = new Router({
  base:'#',
  routes: [
    { path: '/login', name: 'login', component: Login, meta: { isPublic: true }, },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {path: '/categories/create', component: CategoryEdit},
        {path: '/categories/edit/:id', component: CategoryEdit, props: true},
        {path: '/categories/list', component: CategoryList},

        {path: '/items/create', component: IngredientEdit},
        {path: '/items/edit/:id', component: IngredientEdit, props: true},
        {path: '/items/list', component: IngredientList},

        {path: '/drink/create', component: DrinkEdit},
        {path: '/drink/edit/:id', component: DrinkEdit, props: true},
        {path: '/drink/list', component: DrinkList},

        {path: '/articles/create', component: ArticleEdit},
        {path: '/articles/edit/:id', component: ArticleEdit, props: true},
        {path: '/articles/list', component: ArticleList},

        {path: '/ads/create', component: AdEdit},
        {path: '/ads/edit/:id', component: AdEdit, props: true},
        {path: '/ads/list', component: AdList},

        {path: '/admin_users/create', component: AdminUserEdit},
        {path: '/admin_users/edit/:id', component: AdminUserEdit, props: true},
        {path: '/admin_users/list', component: AdminUserList},
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic && !localStorage.token){
    next('/login')
  }
  next()
})

export default router
