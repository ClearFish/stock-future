import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";;
import Home from "@/views/home/index.vue";
import Follow from "@/views/follow/index.vue";
import Notice from "@/views/notice/index.vue";
import Record from "@/views/record/index.vue";
import Setting from "@/views/setting/index.vue";
import Finance from "@/views/finance/index.vue";
import Icon1 from "@/assets/common/icon1.svg";
import Icon2 from "@/assets/common/icon2.svg";
import Icon3 from "@/assets/common/icon3.svg";
import Icon4 from "@/assets/common/icon4.svg";
import Icon5 from "@/assets/common/icon5.svg";
import Icon6 from "@/assets/common/icon6.svg";
import Icon1A from "@/assets/common/icon1_a.svg";
import Icon2A from "@/assets/common/icon2_a.svg";
import Icon3A from "@/assets/common/icon3_a.svg";
import Icon4A from "@/assets/common/icon4_a.svg";
import Icon5A from "@/assets/common/icon5_a.svg";
import Icon6A from "@/assets/common/icon6_a.svg"
const routes : Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
        redirect: '/home',
        children:[]
    },
    {
        path:"/home",
        name:"Home",
        component:Home,
        meta:{
            title:'市场指数',
            icon:Icon1,
            activeIcon:Icon1A
        }
    },
    {
        path:"/follow",
        name:"Follow",
        component:Follow,
        meta:{
            title:'跟单',
            icon:Icon2,
            activeIcon:Icon2A
        }
    },
    {
        path:"/notice",
        name:"Notice",
        component:Notice,
        meta:{
            title:'订单记录',
            icon:Icon3,
            activeIcon:Icon3A
        }
    },
    {
        path:"/record",
        name:"Record",
        component:Record,
        meta:{
            title:'我的资产',
            icon:Icon4,
            activeIcon:Icon4A
        }
    },
    {
        path:"/setting",
        name:"Setting",
        component:Setting,
        meta:{
            title:'通知',
            icon:Icon5,
            activeIcon:Icon5A
        }
    },
    {
        path:"/finance",
        name:"Finance",
        component:Finance,
        meta:{
            title:'设置',
            icon:Icon6,
            activeIcon:Icon6A
        }
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;