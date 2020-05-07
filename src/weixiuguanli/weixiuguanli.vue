<template>
    <div class="weixiuguanli">
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
            <el-button class="tt" size="small" type="primary" icon="el-icon-plus"  @click="weixiuguanli = true">增加</el-button>
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
                        label="资产条码"
                        width="150">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="date"
                        label="资产名称"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="资产类型"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="规格型号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="产品序列"
                        width="150">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope">
                        <el-button  class="btn1" @click="chakan = true" type="text" size="small">查看</el-button>
                        <el-button type="text" class="btn1" size="small" @click="bianji  = true">编辑</el-button>
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
                :visible.sync="weixiuguanli"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="24">
                                <el-steps :active="active" finish-status="success">
                                    <el-step title="保修"></el-step>
                                    <el-step title="已接单"></el-step>
                                    <el-step title="维修中"></el-step>
                                    <el-step title="完成"></el-step>
                                </el-steps>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="维修单号">
                                    <el-input placeholder="" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="报修时间">
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
                                <el-form-item label="保修人">
                                    <el-input placeholder="" v-model="input2">
                                        <div slot="append" @click="baoxiuren = true" style="cursor: pointer">
                                            <i class="el-icon-user-list"></i>
                                        </div>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="说明" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="报修说明"
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
    <el-button @click="weixiuguanli = false">取 消</el-button>
    <el-button type="primary" @click="weixiuguanli = false">确 定</el-button>
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
                title="查看报维修号"
                :visible.sync="chakan"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="24">
                                <el-steps :active="active" finish-status="success">
                                    <el-step title="保修"></el-step>
                                    <el-step title="已接单"></el-step>
                                    <el-step title="维修中"></el-step>
                                    <el-step title="完成"></el-step>
                                </el-steps>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="维修单号">
                                    <el-input placeholder="" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="报修时间">
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
                                    <el-input placeholder="处理人" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="说明" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="报修说明"
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
            <span slot="footer" class="dialog-footer" style="display: inline-block;margin-top: 10px">
    <el-button @click="xuanzezichan = false">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false">确 定</el-button>
                            </span>
        </el-dialog>

        <el-dialog
                title="编辑报维修号"
                :visible.sync="bianji"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="24">
                                <el-steps :active="active" finish-status="success">
                                    <el-step title="保修"></el-step>
                                    <el-step title="已接单"></el-step>
                                    <el-step title="维修中"></el-step>
                                    <el-step title="完成"></el-step>
                                </el-steps>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="维修单号">
                                    <el-input placeholder="" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="报修时间">
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
                                    <el-input placeholder="处理人" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="说明" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="报修说明"
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
    <el-button @click="bianji = false">取 消</el-button>
    <el-button type="primary" @click="bianji = false">确 定</el-button>
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
                title="选择用户"
                :visible.sync="baoxiuren"
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
            <span slot="footer" class="dialog-footer" style="display: inline-block;margin-top: 10px">
    <el-button @click="baoxiuren = false">取 消</el-button>
                            </span>
        </el-dialog>
    </div>
</template>

<script>
    import btn from '@/components/btn/btn1.vue'
    export default {
        name: "weixiuguanli",
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
                value2: '',
                tabPosition:'',
                formInline:'',
                handleNodeClick:'',
                input2:'',
                textarea:'',
                gridData:'',
                data:[],
                defaultProps:'',
                datas:[],
                baofeixuanze:false,
                active:"",
                xuanzeyonghu:false,
                weixiuguanli:false,
                xuanzezichan:false,
                chakan:false,
                bianji:false,
                baoxiuren:false,
                tableData: [{
                    dh:'LY20180618003',
                    date: '2016-05-02',
                    icon:2,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    dh:'LY20180618023',
                    date: '2016-05-04',
                    icon:1,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    dh:'LY20180618013',
                    icon:0,
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }, {
                    dh:'LY20180618123',
                    date: '2016-05-03',
                    name: '王小虎',
                    icon:3,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }]
            }
        }
    }
</script>

<style>
     .el-tabs__content{

    }
    .dialog-footer{
        margin-top: -30px;
    }
    .anniu{
        float: left;
        margin-bottom:20px;
    }
    .block1{
        float: left;
    }
    .tt{
        float: left;
    }
    .weixiuguanli{
        background: #fff;
        padding: 10px 15px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .el-table-column label{
        margin-left: 10px;
    }
    .el-pagination{
        margin-top: 20px;
    }
</style>