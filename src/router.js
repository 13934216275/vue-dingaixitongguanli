import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import denglu from "./components/denglu.vue"
import index from "./components/index.vue"
import baofeiguanli from "./baofeiguanli/baofeiguanli.vue"
import jieyongguihuan from "./jieyongguihuan/jieyongguihuan.vue"
import lingyongtuiku from "./lingyongtuiku/lingyongtuiku.vue"
import weixiuguanli from "./weixiuguanli/weixiuguanli.vue"
import xinxixiugai from "./xinxixiugai/xinxixiugai.vue"
import yibiaopan from "./yibiaopan/yibiaopan.vue"
import zichandengji from "./zichandengji/zichandengji.vue"
import zichanqingdan from "./zichantongji/zichanqingdan/zichanqingdan.vue"
import zichantongji from "./zichantongji/zichantongji.vue"
import xiugaiziliao from "./xiugaiziliao/xiugaiziliao.vue"
import xiugaimima from "./xiugaimima/xiugaimima.vue"
import xitongguanli from "./xitongguanli/xitongguanli.vue"
import juese from "./xitongguanli/juese/juese.vue"
import yonghu from "./xitongguanli/yonghu/yonghu.vue"
import yuangong from "./xitongguanli/yuangong/yuangong.vue"
import zuzhijiegou from "./xitongguanli/zuzhijiegou/zuzhijiegou.vue"
import shezhi from "./shezhi/shezhi.vue"
import zichanbianmaguizeshezhi from "./shezhi/zichanbianmaguizeshezhi/zichanbianmaguizeshezhi.vue"
import zichanfenlei from "./shezhi/zichanfenlei/zichanfenlei.vue"
const router=new VueRouter({
      routes:[
          {
              path:'/',
              name:"denglu",
              meta:{
                  title:"denglu",
                  icon:"",
              },
              component:denglu
          },
          {
              path:'/index',
              name:"index",
              meta:{
                  title:"index",
                  icon:"",
              },
              component:index,
              redirect:"yibiaopan",
              children:[
                  {
                      path: '/yibiaopan',
                      name: "yibiaopan",
                      meta: {
                          title: "仪表盘",
                          icon: "el-icon-dashboard",
                      },
                      component:yibiaopan,
                  },
                  {
                      path: '/zichandengji',
                      name: "zichandengji",
                      meta: {
                          title: "资产登记",
                          icon: "el-icon-qianyuejilu",
                      },
                      component:zichandengji,
                  },
                  {
                      path: '/lingyongtuiku',
                      name: "lingyongtuiku",
                      meta: {
                          title: "领用退库",
                          icon: "el-icon-jieyong",
                      },
                      component:lingyongtuiku,
                  },
                  {
                      path: '/jieyongguihuan',
                      name: "jieyongguihuan",
                      meta: {
                          title: "借用归还",
                          icon: "el-icon-jiehuan",
                      },
                      component:jieyongguihuan,
                  },
                  {
                      path: '/xinxixiugai',
                      name: "xinxixiugai",
                      meta: {
                          title: "信息修改",
                          icon: "el-icon-xiugai",
                      },
                      component:xinxixiugai,
                  },
                  {
                      path: '/weixiuguanli',
                      name: "weixiuguanli",
                      meta: {
                          title: "维修管理",
                          icon: "el-icon-weixiu",
                      },
                      component:weixiuguanli,
                  },
                  {
                      path: '/baofeiguanli',
                      name: "baofeiguanli",
                      meta: {
                          title: "报废管理",
                          icon: "el-icon-feiqi",
                      },
                      component:baofeiguanli,
                  },
                  {
                      path: '/zichantongji',
                      name: "zichantongji",
                      redirect:{
                      name:"zichanqingdan",
                              },
                      meta: {
                          title: "资产统计",
                          icon: "el-icon-zhexian",
                      },
                      component:zichantongji,
                      children:[
                          {
                              path: '/zichanqingdan',
                              name: "zichanqingdan",
                              meta: {
                                  title: "资产清单",
                                  icon: "el-icon-yuan",
                              },
                              component:zichanqingdan,
                          },
                      ]
                  },
                  {
                      path: '/xitongguanli',
                      name: "xitongguanli",
                      meta: {
                          isshow:true,
                          title: "系统管理",
                          icon: "el-icon-zhexian",
                      },
                      component:xitongguanli,
                      children:[
                          {
                              path: '/zuzhijiegou',
                              name: "zuzhijiegou",
                              meta: {
                                  title: "组织结构",
                                  icon: "el-icon-yuan",
                              },
                              component:zuzhijiegou,
                          },
                          {
                              path: '/yuangong',
                              name: "yuangong",
                              meta: {
                                  title: "员工管理",
                                  icon: "el-icon-yuan",
                              },
                              component:yuangong,
                          },
                          {
                              path: '/juese',
                              name: "juese",
                              meta: {
                                  title: "角色管理",
                                  icon: "el-icon-yuan",
                              },
                              component:juese,
                          },
                          {
                              path: '/yonghu',
                              name: "yonghu",
                              meta: {
                                  title: "用户管理",
                                  icon: "el-icon-yuan",
                              },
                              component:yonghu,
                          },

                      ]
                  },
                  {
                      path: '/shezhi',
                      name: "shezhi",
                      meta: {
                          isshow:true,
                          title: "设置",
                          icon: "el-icon-zhexian",
                      },
                      component:shezhi,
                      children:[
                          {
                              path: '/zichanbianmaguizeshezhi',
                              name: "zichanbianmaguizeshezhi",
                              meta: {
                                  title: "资产编码规则设置",
                                  icon: "el-icon-yuan",
                              },
                              component:zichanbianmaguizeshezhi,
                          },
                          {
                              path: '/zichanfenlei',
                              name: "zichanfenlei",
                              meta: {
                                  title: "资产分类",
                                  icon: "el-icon-yuan",
                              },
                              component:zichanfenlei,
                          },
                      ]
                  },
                  {
                      path: '/xiugaimima',
                      name: "xiugaimima",
                      meta: {
                          isshow:true,
                          title: "修改密码",
                          icon: "el-icon-zhexian",
                      },
                      component:xiugaimima,
                  },
                  {
                      path: '/xiugaiziliao',
                      name: "xiugaiziliao",
                      meta: {
                          isshow:true,
                          title: "修改资料",
                          icon: "el-icon-zhexian",
                      },
                      component:xiugaiziliao,
                  },
              ]
          },
      ]
});
export default router;