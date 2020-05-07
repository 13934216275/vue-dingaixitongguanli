<template>
    <div class="baofei">
        <el-tabs v-model="activeName" @tab-click="handleClick1">
            <el-button icon="el-icon-search" ></el-button>
            <template>
                <div class="block">
                    <el-date-picker
                            v-model="value1"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </template>
            <el-button class="tt" size="small" type="primary" icon="el-icon-plus" @click="baofei = true">增加</el-button>
            <el-button class="tt" size="small" type="primary" icon="el-icon-plus">还原</el-button>
            <el-button class="tt" size="small" icon="el-icon-printer">打印</el-button>

            <el-button class="tt" size="small" icon="el-icon-daochu">导出</el-button>
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            fixed
                            prop="dh"
                            label="领用单号"
                            width="220">
                    </el-table-column>
                    <el-table-column
                            fixed
                            prop="date"
                            label="领用时间"
                            width="240">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="领用人"
                            width="240">
                    </el-table-column>
                    <el-table-column
                            prop="province"
                            label="领用部门"
                            width="240">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                        <template slot-scope="scope">
                            <el-button @click="chakan = true" type="text" size="small">查看</el-button>

                        </template>
                    </el-table-column>
                </el-table>
        </el-tabs>
        <template>
            <div class="block1">
                <el-pagination
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        layout="sizes, prev, pager, next"
                        :total="100">
                </el-pagination>
            </div>
        </template>
        <el-dialog
                title="新增报废单号"
                :visible.sync="baofei"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="8">
                                <el-form-item label="报废单号">
                                    <el-input placeholder="自动生成" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="报废时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="2019年06月30日"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="处理人">
                                    <el-input placeholder="处理人" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="24">
                                <el-form-item label="说明" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="报废说明"
                                            v-model="textarea">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div class="anniu">
                            <el-button size="mini" @click="xuanzezichan =true">选择资产</el-button>
                            <el-button type="danger" size="mini">删除</el-button>
                        </div>
                        <el-table :data="gridData" border style="width: 100%" class="biaoge">
                            <el-table-column type="selection" width="55"></el-table-column>
                            <el-table-column property="date" label="资产条码" width="100"></el-table-column>
                            <el-table-column property="name" label="资产名称" width="200"></el-table-column>
                            <el-table-column property="address" label="资产类型" width="100"></el-table-column>
                            <el-table-column property="address" label="使用公司" width="100"></el-table-column>
                            <el-table-column property="address" label="使用部门" width="100"></el-table-column>
                            <el-table-column property="address" label="使用人" width="100"></el-table-column>
                            <el-table-column property="address" label="管理员" width="100"></el-table-column>
                            <el-table-column property="address" label="存放地点" width="100"></el-table-column>
                        </el-table>
                    </el-form>
                </el-tabs>
            </template>
            <span slot="footer" class="dialog-footer" style="display: inline-block;margin-top: 10px">
    <el-button @click="baofei = false">取 消</el-button>
    <el-button type="primary" @click="baofei = false">确 定</el-button>
                            </span>
        </el-dialog>
        <el-dialog
                title="选择资产"
                :visible.sync="xuanzezichan"
                width="70%"
                :modal="true">
            <el-row :gutter="20">
                <el-col :span="5">
                    <div class="shuzhuang">
                        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">

                        </el-tree>
                    </div>
                </el-col>
                <el-col :span="18">
                    <el-table
                            :data="baofeixuanze"
                            border
                            style="width: 100%"
                            class="biaoge"
                            height="300">
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                prop="zctm"
                                label="资产条码"
                                width="130">
                        </el-table-column>
                        <el-table-column
                                prop="zcmc"
                                label="资产名称"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zclx"
                                label="资产类型"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="ggxh"
                                label="规格型号"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="cpxl"
                                label="产品序列"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="jldw"
                                label="计量单位"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="je"
                                label="金额"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="sygs"
                                label="使用公司"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="sybm"
                                label="使用部门"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="gmsj"
                                label="购买时间"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="syr"
                                label="使用人"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="admin"
                                label="管理员"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="cfdd"
                                label="存放地点"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="syqx"
                                label="使用期限"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="ly"
                                label="来源"
                                width="120">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer" style="display: inline-block;margin-top: 10px">
    <el-button @click="xuanzezichan = false">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false">确 定</el-button>
                            </span>
        </el-dialog>

        <el-dialog
                title="新增报废单号"
                :visible.sync="chakan"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="8">
                                <el-form-item label="报废单号">
                                    <el-input placeholder="自动生成" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="报废时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="2019年06月30日"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="处理人">
                                    <el-input placeholder="处理人" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="24">
                                <el-form-item label="说明" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="报废说明"
                                            v-model="textarea">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div class="anniu">
                            <el-button size="mini" @click="xuanzezichan =true">选择资产</el-button>
                            <el-button type="danger" size="mini">删除</el-button>
                        </div>
                        <el-table :data="gridData" border style="width: 100%" class="biaoge">
                            <el-table-column type="selection" width="55"></el-table-column>
                            <el-table-column property="date" label="资产条码" width="100"></el-table-column>
                            <el-table-column property="name" label="资产名称" width="200"></el-table-column>
                            <el-table-column property="address" label="资产类型" width="100"></el-table-column>
                            <el-table-column property="address" label="使用公司" width="100"></el-table-column>
                            <el-table-column property="address" label="使用部门" width="100"></el-table-column>
                            <el-table-column property="address" label="使用人" width="100"></el-table-column>
                            <el-table-column property="address" label="管理员" width="100"></el-table-column>
                            <el-table-column property="address" label="存放地点" width="100"></el-table-column>
                        </el-table>
                    </el-form>
                </el-tabs>
            </template>
            <span slot="footer" class="dialog-footer" style="display: inline-block;margin-top: 10px">
    <el-button type="primary" @click="chakan = false">确 定</el-button>
                            </span>
        </el-dialog>
        <el-dialog
                title="选择资产"
                :visible.sync="xuanzezichan"
                width="70%"
                :modal="true">
            <el-row :gutter="20">
                <el-col :span="5">
                    <div class="shuzhuang">
                        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">

                        </el-tree>
                    </div>
                </el-col>
                <el-col :span="18">
                    <el-table
                            :data="baofeixuanze"
                            border
                            style="width: 100%"
                            class="biaoge"
                            height="300">
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                prop="zctm"
                                label="资产条码"
                                width="130">
                        </el-table-column>
                        <el-table-column
                                prop="zcmc"
                                label="资产名称"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zclx"
                                label="资产类型"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="ggxh"
                                label="规格型号"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="cpxl"
                                label="产品序列"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="jldw"
                                label="计量单位"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="je"
                                label="金额"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="sygs"
                                label="使用公司"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="sybm"
                                label="使用部门"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="gmsj"
                                label="购买时间"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="syr"
                                label="使用人"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="admin"
                                label="管理员"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="cfdd"
                                label="存放地点"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="syqx"
                                label="使用期限"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="ly"
                                label="来源"
                                width="120">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer" style="margin-top: -25px">
    <el-button @click="xuanzezichan = false" style="margin-top: -25px">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false" style="margin-top: -25px">确 定</el-button>
                            </span>
        </el-dialog>
    </div>
</template>

<script>

    export default {
        name: "baofeiguanli",

        methods: {
            handleClick(row) {
                console.log(row);
            },
            handleClick1(tab, event) {
                console.log(tab, event);
            }
        },
        data() {
            return {
                tabPosition: 'left',
                activeName: 'first',
                baofeixuanze: false,
                textarea:'',
                handleNodeClick:'',
                defaultProps:'',
                gridData:'',
                formInline:'',
                data:[],
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: '',
                value2: '',
                baofei:false,
                chakan:false,
                xuanzezichan:false,
                tableData: [{
                    icon:'0',
                    dh:'LY20180618003',
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                ]
            }
        }
    }
</script>

<style>
   .baofei .el-dialog{
       height: 480px;

    }
   .baofei .el-dialog__body{
       margin-top: 20px;
   }
    .anniu{
        float: left;
        margin-bottom:20px;
    }
    .block{
        float: right;
    }
    .el-button{
        float: right;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .block1{
        float: left;
    }
    .tt{
        float: left;
    }
    .baofei{
        background: #fff;
        padding: 10px 15px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .el-button{
        margin-right: 20px;
    }
    .el-table-column label{
        margin-left: 10px;
    }
    .el-pagination{
        margin-top: 20px;
    }
</style>