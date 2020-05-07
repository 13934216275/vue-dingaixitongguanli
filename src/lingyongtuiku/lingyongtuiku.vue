<template>
    <div class="lingyonhtuiku">
        <el-card class="box-card">
            <template>
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
            <el-button class="tt" size="small" type="primary" icon="el-icon-plus" @click="dialogVisibles = true">添加</el-button>
            <el-button class="tt" size="small" icon="el-icon-printer">打印</el-button>
            <el-button class="tt" size="small" icon="el-icon-daochu">导出</el-button>
            <el-tab-pane label="领用" name="first">
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
                        <el-button @click="chakan1 = true" type="text" size="small">查看</el-button>

                    </template>
                </el-table-column>
            </el-table></el-tab-pane>
            <el-tab-pane label="退库" name="second">
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
                        label="退库单号"
                        width="150">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="date"
                        label="退库时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="仓库名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="退库使用公司"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="处理人"
                        width="250">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="chakan2=true" type="text" size="small">查看</el-button>

                    </template>
                </el-table-column>
            </el-table></el-tab-pane>
        </el-tabs>
            </template>
            <el-dialog
                    title="领用单"
                    :visible.sync="chakan1"
                    width="70%"
                    :modal="true">
                <template>
                    <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                        <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="80px">
                            <el-row :gutter="5">
                                <el-col :span="8">
                                    <el-form-item label="领用人">
                                        <el-input placeholder="自动生成" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用时间">
                                        <el-date-picker
                                                v-model="value1"
                                                type="date"
                                                placeholder="选择领用日期"
                                                size="small"
                                                style="width: 100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="预计退库">
                                        <el-date-picker
                                                v-model="value1"
                                                type="date"
                                                placeholder="选择预计退库日期"
                                                size="small"
                                                style="width: 100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="">
                                        <el-input placeholder="自动生成" size="small" style="display: none"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用公司" size="small">
                                        <el-select v-model="formInline.region" placeholder="选择领用公司" style="width: 100%">
                                            <el-option label="康佳" value="kangjia"></el-option>
                                            <el-option label="康宁" value="kangning"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用部门" size="small">
                                        <el-select v-model="formInline.region" placeholder="请先选择公司再选部门" style="width: 100%">
                                            <el-option label="研发部" value="yanfabu"></el-option>
                                            <el-option label="人事部" value="renshibu"></el-option>
                                            <el-option label="财务部" value="caiwubu"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="存放地点" size="small">
                                        <el-input v-model="formInline.user" placeholder="领用后存放地点"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="处理人" size="small">
                                        <el-input v-model="formInline.user" placeholder="处理人" disabled></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="16">
                                    <el-form-item label="说明" >
                                        <el-input
                                                type="textarea"
                                                :rows="2"
                                                placeholder="领用备注"
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
                <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="chakan1 = false" style="margin-top: -30px">确 定</el-button>
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
                                :data="tableData"
                                border
                                style="width: 100%"
                                height="300"
                                class="biaoge">
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
                <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichan = false" style="margin-top: -30px">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false" style="margin-top: -30px">确 定</el-button>
                            </span>
            </el-dialog>

            <el-dialog
                    title="领用单"
                    :visible.sync="chakan2"
                    width="70%"
                    :modal="true">
                <template>
                    <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                        <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="80px">
                            <el-row :gutter="5">
                                <el-col :span="8">
                                    <el-form-item label="领用人">
                                        <el-input placeholder="自动生成" size="small" @click="lingyongren = true"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用时间">
                                        <el-date-picker
                                                v-model="value1"
                                                type="date"
                                                placeholder="选择领用日期"
                                                size="small"
                                                style="width: 100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="预计退库">
                                        <el-date-picker
                                                v-model="value1"
                                                type="date"
                                                placeholder="选择预计退库日期"
                                                size="small"
                                                style="width: 100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="">
                                        <el-input placeholder="自动生成" size="small" style="display: none"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用公司" size="small">
                                        <el-select v-model="formInline.region" placeholder="选择领用公司" style="width: 100%">
                                            <el-option label="康佳" value="kangjia"></el-option>
                                            <el-option label="康宁" value="kangning"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用部门" size="small">
                                        <el-select v-model="formInline.region" placeholder="请先选择公司再选部门" style="width: 100%">
                                            <el-option label="研发部" value="yanfabu"></el-option>
                                            <el-option label="人事部" value="renshibu"></el-option>
                                            <el-option label="财务部" value="caiwubu"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="存放地点" size="small">
                                        <el-input v-model="formInline.user" placeholder="领用后存放地点"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="处理人" size="small">
                                        <el-input v-model="formInline.user" placeholder="处理人" disabled></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="16">
                                    <el-form-item label="说明" >
                                        <el-input
                                                type="textarea"
                                                :rows="2"
                                                placeholder="领用备注"
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
                <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="chakan2 = false">确 定</el-button>
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
                                :data="tableData"
                                border
                                style="width: 100%"
                                height="300"
                                class="biaoge">
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
                <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichan = false">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false">确 定</el-button>
                            </span>
            </el-dialog>

            <el-dialog
                    title="领用单"
                    :visible.sync="dialogVisibles"
                    width="70%"
                    :modal="true">
                <template>
                    <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                        <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="80px">
                            <el-row :gutter="5">
                                <el-col :span="8">
                                    <el-form-item label="领用人">
                                        <el-input placeholder="" v-model="input2">
                                            <div slot="append" @click="lingyongren = true" style="cursor: pointer">
                                                <i class="el-icon-user-list"></i>
                                            </div>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用时间">
                                        <el-date-picker
                                                v-model="value1"
                                                type="date"
                                                placeholder="选择领用日期"
                                                size="small"
                                                style="width: 100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="预计退库">
                                        <el-date-picker
                                                v-model="value1"
                                                type="date"
                                                placeholder="选择预计退库日期"
                                                size="small"
                                                style="width: 100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="">
                                        <el-input placeholder="自动生成" size="small" style="display: none"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用公司" size="small">
                                        <el-select v-model="formInline.region" placeholder="选择领用公司" style="width: 100%">
                                            <el-option label="康佳" value="kangjia"></el-option>
                                            <el-option label="康宁" value="kangning"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="领用部门" size="small">
                                        <el-select v-model="formInline.region" placeholder="请先选择公司再选部门" style="width: 100%">
                                            <el-option label="研发部" value="yanfabu"></el-option>
                                            <el-option label="人事部" value="renshibu"></el-option>
                                            <el-option label="财务部" value="caiwubu"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="存放地点" size="small">
                                        <el-input v-model="formInline.user" placeholder="领用后存放地点"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="处理人" size="small">
                                        <el-input v-model="formInline.user" placeholder="处理人" disabled></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="16">
                                    <el-form-item label="说明" >
                                        <el-input
                                                type="textarea"
                                                :rows="2"
                                                placeholder="领用备注"
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
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibles = false" style="margin-top: -30px">取 消</el-button>
    <el-button type="primary" @click="dialogVisibles = false" style="margin-top: -30px">确 定</el-button>
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
                                :data="tableData"
                                border
                                style="width: 100%"
                                height="300"
                                class="biaoge">
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
                <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichan = false" style="margin-top: -30px">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false" style="margin-top: -30px">确 定</el-button>
                            </span>
            </el-dialog>

            <el-dialog
                    title="选择用户"
                    :visible.sync="lingyongren"
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
    <el-button @click="lingyongren = false" style="margin-top: -30px">取 消</el-button>
                            </span>
            </el-dialog>


            <el-dialog
                    title="退库单"
                    :visible.sync="tuiku"
                    width="70%"
                    :modal="true">
                <template>
                    <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                        <el-form :inline="false" :model="formInlines" class="demo-form-inline" label-width="auto">
                            <el-row :gutter="5">
                                <el-col :span="12">
                                    <el-form-item label="退库处理人" class="el-form-item--small">
                                        <el-input placeholder="自动生成" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="退库时间" class="el-form-item--small">
                                        <el-date-picker
                                                v-model="value3"
                                                type="date"
                                                placeholder="选择领用日期"
                                                size="small"
                                                style="width: 100%">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="退库使用公司" size="small" class="el-form-item--small">
                                        <el-select v-model="formInline.region" placeholder="选择领用公司" style="width: 100%">
                                            <el-option label="康佳" value="kangjia"></el-option>
                                            <el-option label="康宁" value="kangning"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="退库仓库" size="small" class="el-form-item--small">
                                        <el-select v-model="formInline.region" placeholder="请选择退库仓库" style="width: 100%">
                                            <el-option label="北区仓库" value="beiqu"></el-option>
                                            <el-option label="南区仓库" value="nanqu"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="24">
                                    <el-form-item label="退库说明" class="el-form-item--small">
                                        <el-input
                                                type="textarea"
                                                :rows="2"
                                                placeholder="退库备注"
                                                v-model="textareas">
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
                <span slot="footer" class="dialog-footer">
    <el-button @click="tuiku = false">取 消</el-button>
    <el-button type="primary" @click="tuiku = false">确 定</el-button>
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
                                :data="xuanzezichans"
                                border
                                style="width: 100%"
                                height="300"
                                class="biaoge">
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
                <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichan = false" style="margin-top: -30px">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false" style="margin-top: -30px">确 定</el-button>
                            </span>
            </el-dialog>


        </el-card>
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
    </div>
</template>

<script>
    export default {
        name: "lingyongtuiku",
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
                formInline: {
                    user: '',
                    region: ''
                },
                tabPosition: 'left',
                chakan1: false,
                chakan2: false,
                dialogVisibles: false,
                xuanzezichan: false,
                griddata:'',
                lingyongren: false,
                xuanzezichans:false,
                handleNodeClick:'',
                defaultProps:'',
                data:[],
                textareas:'',
                gridData:'',
                value3:'',
                formInlines:'',
                tuiku:false,
                xuanzeyonghu:false,
                input2:'',

                textarea:'',
                handleAvatarSuccess:'',
                beforeAvatarUpload:'',
                imageUrl:'',
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
                formLabelWidth: '120px',
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
                tableData: [
                    {
                    dh:'LY20180618003',
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                    {
                    dh:'LY20180618023',
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                },
                    {
                    dh:'LY20180618013',
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                },
                    {
                    dh:'LY20180618123',
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }
                ]
            }
        }
    }
</script>

<style>
.lingyonhtuiku .el-dialog__body{
    margin-top: 20px;
    height: 450px;
}
.dialog-footer{
    margin-top: -20px;
}
    .block{
    float: right;
}
    .anniu{
        float: left;
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
    .nnrr{
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