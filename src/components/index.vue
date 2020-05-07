<template>
    <el-container class="da">
        <el-aside class="ce" width="auto">
            <div>
                <i class="el-icon-logo" style="color: #fff;font-size: 36px"></i>
                <span slot="title" v-if="!isCollapse" style="color: #ffffff;font-size: 22px">丁艾资产</span>
            </div>
            <el-menu  :default-active="yyy" :router="true" class="el-menu-vertical-demo"  :collapse="isCollapse">
                <template v-for="(v,i) in arr" v-if="v.children && v.children.length>0">
                    <el-submenu :index="v.name">
                        <template slot="title">
                            <i :class="v.meta.icon"></i>
                            <span slot="title" style="color: #fff;">{{v.meta.title}}</span>
                        </template>
                        <el-menu-item style="background: #2f3e4e" v-for="(val,index) in v.children" :index="val.name">
                            <i :class="val.meta.icon"></i>
                            <span slot="title">{{val.meta.title}}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else-if="!v.meta.isshow">
                    <el-menu-item  :index="v.name">
                        <i :class="v.meta.icon"></i>
                        <span slot="title">{{v.meta.title}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
    <el-container>
        <el-header class="tou">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <i class="el-icon-ego-menu" :class="{activ:isCollapse}" @click="isCollapse=!isCollapse" style="font-size: 25px"></i>
            </el-radio-group>
            <el-dropdown>
  <span class="el-dropdown-link">
    <i class="el-icon-question"></i>帮助<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><i class="el-icon-question"></i>帮助中心</el-dropdown-item>
                    <el-dropdown-item><i class="el-icon-document"></i>使用手册</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    <i class="el-icon-admin"></i>管理员<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="xiugaimima"><i class="el-icon-password" ></i>修改密码</el-dropdown-item>
                    <el-dropdown-item command="xiugaiziliao"><i class="el-icon-edit-outline" ></i>修改资料</el-dropdown-item>
                    <el-dropdown-item  command="denglu"><i class="el-icon-tuichudenglu" ></i>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
  <span class="el-dropdown-link">
    <i class="el-icon-bell"></i>消息<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item style="border-bottom: #ccc 1px solid"><i class="el-icon-bell" style="font-size: 20px"></i>新功能上线通知<p style="font-size: 12px;margin-left: 28px;margin-top: -15px">2019-06-27</p></el-dropdown-item>
                    <el-dropdown-item style="border-bottom: #ccc 1px solid"><i class="el-icon-bell" style="font-size: 20px"></i>新功能上线通知<p style="font-size: 12px;margin-left: 28px;margin-top: -15px">2019-06-27</p></el-dropdown-item>
                    <el-dropdown-item><i class="el-icon-bell" style="font-size: 20px"></i>新功能上线通知<p style="font-size: 12px;margin-left: 28px;margin-top: -15px">2019-06-27</p></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-main class="nr">
            <!--面包屑-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                <div v-if="$route.matched.length>=3">
                    <el-breadcrumb-item>{{$route.matched[1].meta.title}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
                </div>
                <el-breadcrumb-item v-else>{{$route.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>
            <!--显示内容区域-->
            <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                isCollapse: false,
                arr:'',
                // actives:this.$route.name,
                yyy:this.$route.name
            };
        },
        watch:{
          $route:function (newVal,oldVal) {
              this.yyy=newVal.name;
          }
        },
        created(){
            console.log(this.$router);
            console.log("........",this.$route);
            this.arr=this.$router.options.routes[1].children;
            // console.log(this.$router);
        },
        methods: {
            handleCommand(command) {
                this.$router.push({
                    name:command,
                });
            }
        }
    }
</script>

<style >

    .el-submenu__title:hover{
        background:#2f3e4e;
    }
    .activ{
        transform: rotate(90deg);
    }

    .el-dropdown{
        float: right;
        margin-top: 20px;
        margin-right: 30px;
    }
    .el-radio-group{
        float: left;
        margin-top: 15px;
    }
    .el-menu{
        border-right:0;
    }
    .el-menu-item.is-active{
        background:#2f3e4e;
        color: blue;
    }
    .el-breadcrumb{
        margin-bottom: 15px;
    }
    .da{
        width: 100%;
        height: 100%;
    }
    .ce{
        background:#2f3e4e;

    }
    .el-menu{
    background-color: #2f3e4e;
}
    .tou{
        background:#fff;
    }
    .nr{
        background:#e4e7ed;
    }
    .el-menu-item {
         color: #fff;
    }
    .el-menu-item:hover{
        background: #2f3e4e;
    }
    .el-submenu_title:hover{
        background:#2f3e4e;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
    .el-dropdown-link {
        cursor: pointer;
        color: #000;
        margin-right: 20px;
        float: right;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>

