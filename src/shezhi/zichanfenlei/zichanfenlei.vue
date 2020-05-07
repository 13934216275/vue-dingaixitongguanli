<template>
    <div class="chanClass">
        <el-row>
            <el-col :span="6">
                <div class="chanLeft">
                    <el-dropdown style="float: left;margin-top: 0">
                        <el-button type="primary" size="small" >
                            新增分类<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu style="width: 100px" slot="dropdown">
                            <el-dropdown-item ><span @click="newAdd">新增同级</span></el-dropdown-item>
                            <el-dropdown-item ><span @click="newAdd">新增下级</span></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-button plain size="small" style="float: left;margin-left: -30px"><i class="el-icon-paperclip"></i>导入</el-button>
                    <i class="el-icon-info" style="color: #3a8ee6;margin-top: 10px;margin-left: -50px"></i>

                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="margin-top: 20px"></el-tree>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="chanRight">
                    <el-dropdown style="margin-top: 0;float: left;margin-left: -10px">
                        <el-button plain size="small">
                            <i class="el-icon-paperclip"></i>导入标准资产型号<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>下载导入模板</el-dropdown-item>
                            <el-dropdown-item>导入标准资产型号</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-button type="text" style="float: left;margin-top: -5px;margin-left: -20px"><i class="el-icon-info
"></i>什么是标准资产型号</el-button>
                    <el-table
                            border
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <el-form label-position="left" inline class="demo-table-expand">
                                    <el-table
                                            :data="tableData1"
                                            border
                                            style="width: 100%">
                                        <el-table-column
                                                prop="photo"
                                                label="照片"
                                                width="80">
                                        </el-table-column>
                                        <el-table-column
                                                prop="name"
                                                label="资产名称"
                                                width="130">
                                        </el-table-column>
                                        <el-table-column
                                                prop="address"
                                                label="规格型号">
                                        </el-table-column>
                                        <el-table-column
                                                prop="danwei"
                                                label="计量单位">
                                        </el-table-column>
                                        <el-table-column
                                                prop="yuanzhi"
                                                label="原值">
                                        </el-table-column>
                                        <el-table-column
                                                prop="set"
                                                label="禁用/启用">
                                        </el-table-column>
                                    </el-table>
                                    <div class="block" style="margin-right: 185px">
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page.sync="currentPage3"
                                                :page-sizes="[10, 20, 30, 40]"
                                                :page-size="10"
                                                layout="sizes, prev, pager, next"
                                                :total="100"
                                                style="margin-top: 10px">
                                        </el-pagination>
                                    </div>
                                </el-form>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="分类编号"
                                prop="id"
                                width="80">
                        </el-table-column>
                        <el-table-column
                                label="分类名称"
                                prop="name">
                        </el-table-column>
                        <el-table-column
                                label="上级分类"
                                prop="address"
                                width="80">
                        </el-table-column>
                        <el-table-column
                                label="使用年限(月)"
                                prop="time">
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="270">
                            <template slot-scope="scope">
                                <el-button  type="text" size="small" style="float: left;margin-left: -5px">编辑 |</el-button>
                                <el-button type="text" size="small" style="float: left;margin-left: -15px">禁用 |</el-button>
                                <el-button type="text" size="small" style="float: left;margin-left: -15px">删除 |</el-button>
                                <el-button type="text" size="small" style="float: left;margin-left: -20px">新增资产标准型号</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="block" style="margin-right: 240px">
                        <el-pagination
                                background
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage2"
                                :page-sizes="[10, 20, 30, 40]"
                                :page-size="10"
                                layout="sizes, prev, pager, next"
                                :total="100"
                                style="margin-top: 10px;margin-left: -200px">
                        </el-pagination>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!--新增同级弹出框-->
        <el-dialog
                title="新增分类"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <div class="addNew">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="编号">
                        <el-input v-model="form.name" placeholder="编号"></el-input>
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input v-model="form.name" placeholder="名称"></el-input>
                    </el-form-item>
                    <el-form-item label="年限">
                        <el-input v-model="form.name" placeholder="年限"></el-input>
                    </el-form-item>
                    <el-form-item label="父级">
                        <el-input v-model="form.name" placeholder="请选择资产类别"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer" style="margin-top: -15px">
    <el-button @click="dialogVisible = false" style="margin-top: -25px">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false" style="margin-top: -25px">保 存</el-button>
  </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                data:
                    [
                        {
                            label: '01 - 土地、房屋及构筑物',
                        }, {
                        label: '02 - 通用设备',
                    }, {
                        label: '03 - 专用设备',

                    }, {
                        label: '04 - 交通运输设备',
                    }, {
                        label: '06 - 电子产品及通信设备',
                    }, {
                        label: '07 - 仪器仪表、计量标准器具及量具、衡器',
                    }, {
                        label: '08 - 文艺体育设备',
                    }, {
                        label: '09 - 图书文物及陈列品',
                    }, {
                        label: '10 - 家具用具及其他类',
                    }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                dialogVisible:false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                tableData:
                    [
                        {
                            id: 1,
                            date: '2016-05-02',
                            name: '土地、房屋及构筑物',
                            address: '',
                            time:"240",
                        }, {
                        id: 2,
                        date: '2016-05-04',
                        name: '通用设备',
                        address: '',
                        time:"60",
                    }, {
                        id: 3,
                        date: '2016-05-01',
                        name: '专用设备',
                        address: '',
                        time:"60",
                    }, {
                        id: 4,
                        date: '2016-05-03',
                        name: '交通运输设备',
                        address: '',
                        time:"120",
                    }],
                tableData1:[{

                }]

            }
        },
        methods: {
            newAdd:function(){
                this.dialogVisible=true
            },
            handleClose(done) {
                done();
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleNodeClick(data) {
                console.log(data);
            },
            load(tree, treeNode, resolve) {
                setTimeout(() => {
                    resolve([
                        {
                            id: 31,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            id: 32,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }
                    ])
                }, 1000)
            }
        }
    }
</script>
<style>
    .addNew{
        height: 250px;
    }
    .chanClass{
        height: auto;
        background: #fff;
        margin-top: 20px;
        padding: 10px;
        box-sizing: border-box;
        border-top: 2px solid #3a8ee6;
    }
   .chanClass .chanLeft{
        width: 270px;
        height: 500px;
        border-right: 1px solid #e6e6e6;
        overflow: hidden;
    }
   .chanClass .chanRight{
        width: 800px;
        height: 500px;
        margin-left: 10px;
    }
</style>