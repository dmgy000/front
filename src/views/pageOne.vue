<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">


            <!--<el-menu :default-openeds="['1', '3']":default-active="'1-2'">-->

            <!--<el-submenu index="1">-->
            <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
            <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
            <!--<el-submenu index="1-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
            <!--</el-submenu>-->
            <!--</el-submenu>-->

            <!--<el-submenu index="2">-->
            <!--<template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
            <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
            <!--<el-submenu index="2-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
            <!--</el-submenu>-->
            <!--</el-submenu>-->

            <!--<el-submenu index="3">-->
            <!--<template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
            <!--<el-menu-item-group>-->
            <!--<template slot="title">分组一</template>-->
            <!--<el-menu-item index="3-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="3-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
            <!--<el-menu-item index="3-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="3-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
            <!--</el-submenu>-->
            <!--</el-submenu>-->

            <!--</el-menu>-->

            <el-menu router :default-openeds="['1','3']">
                <el-submenu v-for="(item, index) in $router.options.routes" :index="index+''" v-if="item.show">
                    <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
                    <el-menu-item v-for="(item2, index2) in item.children" :index="item2.path" v-if="item2.show"
                                  :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="me">我的</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>{{admin.userName}}</span>
            </el-header>


            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data(){
            //this.name = window.sessionStorage.getItem('username')
            return{
            }
        },
        methods:{
            logout(){
                let _this=this
                _this.$router.replace({path:'/login'})
            },
            me(){
                let _this=this
                _this.$router.replace({path:'/me'})
            }
        },
        created(){
            this.admin=JSON.parse(window.localStorage.getItem('access-admin'))
            if(this.admin==null){
                this.$router.replace({path:'/login'})
            }
        },

    }
</script>

<style scoped>

</style>