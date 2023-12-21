import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";;
import Home from "@/views/home/index.vue";
import Follow from "@/views/follow/index.vue";
import Notice from "@/views/notice/index.vue";
import Record from "@/views/record/index.vue";
import Setting from "@/views/setting/index.vue";
import Finance from "@/views/finance/index.vue"
const routes : Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
        redirect: '/home',
        children:[]
    },
    {
        path:"/follow",
        name:"Follow",
        component:Follow
    },
    {
        path:"/notice",
        name:"Notice",
        component:Notice
    },
    {
        path:"/record",
        name:"Record",
        component:Record
    },
    {
        path:"/setting",
        name:"Setting",
        component:Setting
    },
    {
        path:"/finance",
        name:"Finance",
        component:Finance
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;