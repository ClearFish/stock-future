<template>
<div class="box">
    <div class="left">
        <div>
            <div class="top">
                <img src="@/assets/common/logo.png" alt="" class="logo">
                <el-input v-model="searchVal" placeholder="股票代码/名称" :prefix-icon="Search"/>
            </div>
            <div class="router_box">
                <div class="top">
                    <p class="title">MENU</p>
                    <router-link :to="item.path" v-slot="{ href, navigate, isActive }" v-for="(item,index) in routerList" :key="index">
                        <li :class="{ 'active': isActive }">
                            <img :src="isActive ? item.meta.activeIcon : item.meta.icon" alt="">
                            <a :href="href" @click="navigate">
                                <span>{{item.meta.title}}</span>
                            </a>
                        </li>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="item">
                <img src="@/assets/common/icon7.svg" alt=""/>
                <p>问题反馈</p>
            </div>
            <div class="item">
                <img src="@/assets/common/icon8.svg" alt=""/>
                <p>联系我们</p>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="top">
            <div class="register">注册</div>
            <div class="login">登录</div>
        </div>
        <router-view></router-view>
    </div>
</div>
</template>
<script setup>
import {ref} from "vue"
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
const router = useRouter();
let routerList = ref(router.options.routes.splice(1,8))
const searchVal = ref('')
console.log(routerList.value,"routerList")
</script>
<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background: #F6F6F9;
    padding-bottom: 48px;
    padding-left: 10px;
    box-sizing: border-box ;
    .left {
        width: 240px;
        height: 100%;
        padding: 24px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
            width: 100%;
            .logo {
                width: 100%;
                height: auto;
                cursor: pointer;
                margin-bottom: 24px;
            }
        }
        .router_box {
            .title {
                color: #9CA8B8;
                font-size: 12px;
                font-weight: 600;
                line-height: 18px;
                margin-bottom: 8px;
                margin-top: 24px;
            }
            a {
                display: block;
                li{
                    display: flex;
                    width: 100%;
                    height: 40px;
                    padding: 0 24px;
                    align-items: center;
                    gap: 8px;
                    
                    img {
                        width: 20px;
                        height: 20px;
                    }
                    a {
                        color: #68707A;
                    }
                }
            }
            .router-link-active {
                background: #0D66DB;
                border-radius: 8px;
                a {
                    color: #fff !important;
                }
            }
        }
        .bottom {
            .item {
                display: flex;
                padding: 0 24px;
                height: 40px;
                align-items: center;
                gap: 8px;
                cursor: pointer;
            }
        }
    }
    .right {
        padding-right: 10px;
        box-sizing: border-box;
        .top {
            height: 80px;
            display: flex;
            justify-content: flex-end;
            padding-right: 10px;
            box-sizing: border-box;
            align-items: center;
            gap: 10px;
            .register {
                width: 76px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #0D66DB;
                border-radius: 8px;
                font-size: 14px;
                border: 1px solid #0D66DB;
            }
            .login {
                color: #fff;
                border-radius: 8px;
                font-size: 14px;
                background: #0D66DB;
                width: 76px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        flex: 80%;
        // max-width: 1184px;
        max-height: 896px;
        overflow: auto;
        &::-webkit-scrollbar {
            display: none; /* Chrome Safari */
        }
    }
}
</style>
