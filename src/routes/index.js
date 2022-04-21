import { createWebHistory, createRouter } from "vue-router"
import Main from '@/views/Main.vue'
import Characters from '@/views/Characters.vue'
import Locations from '@/views/Locations.vue'
import Episodes from '@/views/Episodes.vue'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters
  },
  {
    path: "/locations",
    name: "Locations",
    component: Locations
  },
  {
    path: "/episodes",
    name: "Episodes",
    component: Episodes
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router