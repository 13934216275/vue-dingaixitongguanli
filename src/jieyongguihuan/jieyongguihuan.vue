<template>
    <div class="jieyongguihuan">
        <el-tabs v-model="activeName">
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
            <el-button class="tt" size="small" type="primary" icon="el-icon-plus" @click="jieyongdan = true">增加</el-button>
            <el-button class="tt" size="small" type="primary" icon="el-icon-xiugai">归还</el-button>
            <el-button class="tt" size="small" icon="el-icon-printer">打印</el-button>
            <el-button class="tt" size="small" icon="el-icon-daochu">导出</el-button>
            <el-tab-pane label="借用" name="first">
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
                            prop="icon"
                            label="资产状态"
                            width="120">
                        <template slot-scope="scope">
                            <btn :icon="scope.row.icon"></btn>
                        </template>
                    </el-table-column>
                    <el-table-column
                            fixed
                            prop="dh"
                            label="领用单号"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            fixed
                            prop="date"
                            label="领用时间"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="领用人"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="province"
                            label="领用部门"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="领用使用公司"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="预计退库时间"
                            width="250">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                        <template slot-scope="scope">
                            <el-button  @click="chakan = true" type="text" size="small">查看</el-button>

                        </template>
                    </el-table-column>
                </el-table></el-tab-pane>
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
                title="借用单"
                :visible.sync="jieyongdan"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="8">
                                <el-form-item label="借用人">
                                    <el-input placeholder="" v-model="input2">
                                        <div slot="append" @click="jieyongren = true" style="cursor: pointer">
                                            <i class="el-icon-user-list"></i>
                                        </div>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="借出时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="选择借出日期"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计归还">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="预计归还时间"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="借出处理人">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="处理人"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计归还">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="预计归还时间"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="归还处理人">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="处理人"
                                            size="small"
                                            style="width: 100%"
                                            disabled>
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="说明" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="借用备注"
                                            v-model="textarea">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div class="anniu">
                            <el-button size="mini" @click="xuanzezichans =true">选择资产</el-button>
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
            <span slot="footer" class="dialog-footer">
    <el-button @click="jieyongdan = false" >取 消</el-button>
    <el-button type="primary" @click="jieyongdan = false">确 定</el-button>
                            </span>
        </el-dialog>
        <el-dialog
                title="选择资产"
                :visible.sync="xuanzezichans"
                width="70%"
                :modal="true">
            <el-row :gutter="20">
                <el-col :span="5">
                    <div class="shuzhuang">
                        <el-tree :data="datas" :props="defaultProps" @node-click="handleNodeClick">

                        </el-tree>
                    </div>
                </el-col>
                <el-col :span="18">
                    <el-table
                            :data="xuanzezichan"
                            border
                            style="width: 100%"
                            class="biaoge">
                        <el-table-column
                                fixed="left"
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
            <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichans = false">取 消</el-button>
    <el-button type="primary" @click="xuanzezichans = false">确 定</el-button>
                            </span>
        </el-dialog>
        <el-dialog
                title="选择用户"
                :visible.sync="jieyongren"
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
                            :data="xuanzeyonghu"
                            border
                            style="width: 100%"
                            height="300"
                            class="biaoge">
                        <el-table-column
                                prop="xz"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                prop="yggh"
                                label="员工工号"
                                width="130">
                        </el-table-column>
                        <el-table-column
                                prop="ygxm"
                                label="员工姓名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="ssgs"
                                label="所属公司"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="ssbm"
                                label="所属部门"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="email"
                                label="邮箱"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="phone"
                                label="手机"
                                width="120">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
    <el-button @click="jieyongren = false">取 消</el-button>
                            </span>
        </el-dialog>
        <el-dialog
                title="借用单"
                :visible.sync="chakan"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="8">
                                <el-form-item label="借用人">
                                    <el-input placeholder="借用人" v-model="input2">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="借出时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="选择借出日期"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计归还">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="预计归还时间"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="借出处理人">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="处理人"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计归还">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="预计归还时间"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="归还处理人">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="处理人"
                                            size="small"
                                            style="width: 100%"
                                            disabled>
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="说明" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="借用备注"
                                            v-model="textarea">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div class="anniu">
                            <el-button size="mini" @click="xuanzezichans =true">选择资产</el-button>
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
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="chakan = false">确 定</el-button>
                            </span>
        </el-dialog>
        <el-dialog
                title="选择资产"
                :visible.sync="xuanzezichans"
                width="70%"
                :modal="true">
            <el-row :gutter="20">
                <el-col :span="5">
                    <div class="shuzhuang">
                        <el-tree :data="datas" :props="defaultProps" @node-click="handleNodeClick">

                        </el-tree>
                    </div>
                </el-col>
                <el-col :span="18">
                    <el-table
                            :data="xuanzezichan"
                            border
                            style="width: 100%"
                            class="biaoge">
                        <el-table-column
                                fixed="left"
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
            <span slot="footer" class="dialog-footer" style="display: inline-block;margin-top: -5px">
    <el-button @click="xuanzezichans = false" style="margin-top: -5px">取 消</el-button>
    <el-button type="primary" @click="xuanzezichans = false" style="margin-top: -5px">确 定</el-button>
                            </span>
        </el-dialog>
    </div>
</template>

<script>
    import btn from '@/components/btn/btn.vue'

    export default {
        name: "jieyongguihuan",
        components: {
            btn,
        },
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
                jieyongdan:false,
                xuanzezichans:false,
                jieyongren:false,
                xuanzezichan:false,
                handleNodeClick:'',
                defaultProps:'',
                datas:[],
                textarea:'',
                gridData:'',
                input2:'',
                xuanzeyonghu:false,
                data:[],
                formInline:'',
                chakan:false,
                value2: '',
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
   .jieyongguihuan .el-dialog__body{
        margin-top: 20px;
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
    .jieyongguihuan{
        background: #fff;
        padding: 10px 15px;
        box-sizing: border-box;
        overflow: hidden;
    }
   .jieyongguihuan .el-dialog{
       height: 510px;
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