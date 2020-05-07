<template>
    <div class="jiegou">
        <el-card class="box-card">
                <el-dropdown style="float: left" >
                    <el-button type="primary" size="small">
                        新增<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>同级公司</el-dropdown-item>
                        <el-dropdown-item>下级公司</el-dropdown-item>
                        <el-dropdown-item>下级部门</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown style="float: left;margin-left: -50px" >
                <el-button type="primary" size="small">
                    同步/导入<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>导入公司</el-dropdown-item>
                    <el-dropdown-item>导入部门</el-dropdown-item>
                    <el-dropdown-item>同步组织结构</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <div class="cmcm">
                <el-input v-model="input1" size="small">
                    <template slot="prepend">公司编码</template>
                </el-input>
            </div>
            <div class="cmcm1">
                <el-input v-model="input2" size="small">
                    <template slot="prepend">公司名称</template>
                </el-input>
            </div>
            <div class="cmcm2">
                <el-input v-model="input3" size="small">
                    <template slot="prepend">父级</template>
                </el-input>
            </div>
            <div class="kk">
                <el-button size="small">禁用</el-button>
                <el-button size="small">删除</el-button>
                <el-button type="primary" size="small"><i class="iconfont fa fa-save"></i>保存</el-button>
            </div>
            <template>
            <el-popover
                    placement="bottom"
                    width="200"
                    trigger="hover"
                    content="易点资产管理平台支持多级公司和部门。在下方的组织结构树中，选择一个公司或者部门，点击 “新增” 按钮，可以创建新的公司和部门。">
                <i class="el-icon-info" style="margin-bottom: 20px;float: left;margin-left: 15px;margin-top: 5px;color: #668eff;" slot="reference">如何设置</i>
            </el-popover>
                </template>
            <el-card class="box-card00" style="width: 95%;margin-left: 26px;margin-bottom: 20px">
                <div slot="header" class="clearfix">
                    <span>组织结构</span>
                    <span style="margin-left: 10px;font-size: 12px">公司总数：2/5</span>
                    <span style="margin-left: 10px;font-size: 12px;text-decoration: underline">去升级</span>
                </div>
                <div class="text item">
                    <el-tree :default-expanded-keys="[2]"
                             :default-checked-keys="[5]"  node-key="id" :data="data" :props="defaultProps"></el-tree>
                </div>
            </el-card>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "zuzhijiegou",
        data(){
           return{
               input1:'',
               input2:'',
               input3:'',
               data: [{
                   label: '01-康琴',
                   id:2,
                   children: [{
                       label: '3023-研发部',
                       children: [{
                           label: '研发'
                       }]
                   },{
                       label:'3023-市场部',
                       children: [{
                           label: '市场'
                       }]
                   },
                       {
                           label:'3023-行政部',
                           children: [{
                               label: '行政'
                           }]
                       }]
               },
                   {
                       label: '01-康佳',
                       children: [{
                           label: '3023-行政部',
                           children: [{
                               label: '3023-行政部'
                           }]
                       }, {
                           label: '3023-行政部',
                           children: [{
                               label: '3023-行政部'
                           }]
                       }]
                   },
                   {
                       label: '3023-行政部',
                       children: [{
                           label: '3023-行政部',
                           children: [{
                               label: '3023-行政部'
                           }]
                       }, {
                           label: '3023-行政部',
                           children: [{
                               label: '3023-行政部'
                           }]
                       }]
                   }],
               defaultProps: {
                   children: 'children',
                   label: 'label'
               }
           }
        },
        methods: {
            handleClick() {
                alert('button click');
            }
        }
    }
</script>

<style>
    .el-popover.el-popper.el-popover--plain{
        background:  #668eff;
        color: #fff;
        border: 1px  #668eff solid;
    }
    .jiegou .el-card__header{
        padding: 0;
    }
    .jiegou .el-card__body{
        margin-bottom: 0;
    }
    .clearfix span{
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: 10px;
    }
    .clearfix span:nth-child(1){
        margin-top: 10px;
        margin-bottom: 15px;
        margin-left: 10px;
    }
    .box-card00 .clearfix{
        background: #3c8dbc;
        color: #fff;
    }
    .kk{
        float: left;
        margin-top: 20px;
    }
    .cmcm{
        width:200px;
        display: inline-block;
        margin-top: 17px;
        float: left;
        margin-left: -20px;
    }
    .cmcm1{
        width:200px;
        display: inline-block;
        margin-top: 17px;
        float: left;
        margin-left: 10px;
    }
    .cmcm2{
        width:200px;
        display: inline-block;
        margin-top: 17px;
        float: left;
        margin-left: 10px;
    }
   .jiegou .el-card__body{
        padding: 0;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
    }
    .el-dropdown {
        vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>