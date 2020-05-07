<template>
    <div class="xinxixiugai">
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
            <el-button class="tt" size="small" type="primary" icon="el-icon-plus" @click="xinxixiugai = true">增加</el-button>
            <el-button class="tt" size="small" icon="el-icon-printer">打印</el-button>
            <el-button class="tt" size="small" icon="el-icon-daochu">导出</el-button>
            <el-tab-pane label="基本信息更改" name="first">
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
                            <el-button @click="chakan1=true" type="text" size="small">查看</el-button>

                        </template>
                    </el-table-column>
                </el-table></el-tab-pane>
            <el-tab-pane label="维保信息更改" name="second">
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
                title="变更单"
                :visible.sync="xinxixiugai"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="12">
                                <el-form-item label="变更单号">
                                    <el-input placeholder="自动生成" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="处理时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="2019年06月30日"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="资产名称">
                                    <el-input placeholder="" v-model="input2">
                                        <div slot="append" @click="zcmc = true" style="cursor: pointer">
                                            <i class="el-icon-zichan"></i>
                                        </div>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="资产类型" size="small">
                                    <el-select v-model="formInline.region" placeholder="资产类型" style="width: 50%">
                                        <el-option label="New York" value="New York"></el-option>
                                        <el-option label="Lundon" value="Lundon"></el-option>
                                        <el-option label="Sydney" value="Sydney"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="规格型号">
                                    <el-input placeholder="规格型号" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="">
                                    <el-input placeholder="规格型号" size="small" style="display: none"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="SN号">
                                    <el-input placeholder="SN号" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="计量单位">
                                    <el-input placeholder="计量单位" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="管理员" size="small">
                                    <el-select v-model="formInline.region" placeholder="管理员" style="width: 50%">
                                        <el-option label="New York" value="New York"></el-option>
                                        <el-option label="Lundon" value="Lundon"></el-option>
                                        <el-option label="Sydney" value="Sydney"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="存放地点" size="small">
                                    <el-select v-model="formInline.region" placeholder="存放地点" style="width: 50%">
                                        <el-option label="New York" value="New York"></el-option>
                                        <el-option label="Lundon" value="Lundon"></el-option>
                                        <el-option label="Sydney" value="Sydney"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用期限">
                                    <el-input placeholder="使用期限(月)" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="来源" size="small">
                                    <el-select v-model="formInline.region" placeholder="管理员" style="width: 50%">
                                        <el-option label="购入" value="gouru"></el-option>
                                        <el-option label="自建" value="zijian"></el-option>
                                        <el-option label="捐赠" value="juanzeng"></el-option>
                                        <el-option label="租赁" value="zulin"></el-option>
                                        <el-option label="其他" value="qita"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item label="备注" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="备注"
                                            v-model="textarea">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="资产照片" size="small">
                                    <el-upload
                                            class="avatar-uploader"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tabs>
            </template>
            <span slot="footer" class="dialog-footer">
    <el-button @click="xinxixiugai = false">取 消</el-button>
    <el-button type="primary" @click="xinxixiugai = false">确 定</el-button>
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
            <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichan = false">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false">确 定</el-button>
                            </span>
        </el-dialog>

        <el-dialog
                title="变更单"
                :visible.sync="weibaoxinxi"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="12">
                                <el-form-item label="变更单号">
                                    <el-input placeholder="自动生成" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="处理时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="2019年06月30日"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="资产名称">
                                    <el-input placeholder="自动生成" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="供应商">
                                    <el-input placeholder="供应商" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="联系人">
                                    <el-input placeholder="联系人" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="">
                                    <el-input placeholder="规格型号" size="small" style="display: none"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="联系方式">
                                    <el-input placeholder="联系方式" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="到期时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="维保到期时间"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="24">
                                <el-form-item label="备注" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="备注"
                                            v-model="textarea">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tabs>
            </template>
            <span slot="footer" class="dialog-footer">
    <el-button @click="weibaoxinxi = false">取 消</el-button>
    <el-button type="primary" @click="weibaoxinxi = false">确 定</el-button>
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
            <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichan = false">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false">确 定</el-button>
                            </span>
        </el-dialog>

        <el-dialog
                title="变更单"
                :visible.sync="chakan2"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="12">
                                <el-form-item label="变更单号">
                                    <el-input placeholder="自动生成" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="处理时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="2019年06月30日"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="资产名称">
                                    <el-input placeholder="自动生成" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="供应商">
                                    <el-input placeholder="供应商" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="联系人">
                                    <el-input placeholder="联系人" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="">
                                    <el-input placeholder="规格型号" size="small" style="display: none"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="联系方式">
                                    <el-input placeholder="联系方式" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="到期时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="维保到期时间"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="24">
                                <el-form-item label="备注" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="备注"
                                            v-model="textarea">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
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
            <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichan = false">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false">确 定</el-button>
                            </span>
        </el-dialog>

        <el-dialog
                title="变更单"
                :visible.sync="chakan1"
                width="70%"
                :modal="true">
            <template>
                <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="auto">
                        <el-row :gutter="5">
                            <el-col :span="12">
                                <el-form-item label="变更单号">
                                    <el-input placeholder="自动生成" size="small" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="处理时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="2019年06月30日"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="资产名称">
                                    <el-input placeholder="自动生成" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="供应商">
                                    <el-input placeholder="供应商" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="联系人">
                                    <el-input placeholder="联系人" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-form-item label="">
                                    <el-input placeholder="规格型号" size="small" style="display: none"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="联系方式">
                                    <el-input placeholder="联系方式" size="small"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="到期时间">
                                    <el-date-picker
                                            v-model="value1"
                                            type="date"
                                            placeholder="维保到期时间"
                                            size="small"
                                            style="width: 100%">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="24">
                                <el-form-item label="备注" >
                                    <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="备注"
                                            v-model="textarea">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tabs>
            </template>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="chakan1 = false">确 定</el-button>
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
            <span slot="footer" class="dialog-footer">
    <el-button @click="xuanzezichan = false">取 消</el-button>
    <el-button type="primary" @click="xuanzezichan = false">确 定</el-button>
                            </span>
        </el-dialog>


        <el-dialog
                title="选择用户"
                :visible.sync="zcmc"
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
                            :data="zmcms"
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
    <el-button @click="zcmc = false">取 消</el-button>
                            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "xinxixiugai",
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
                xinxixiugai:false,
                tabPosition:'',
                formInline:'',
                textarea:'',
                handleNodeClick:'',
                baofeixuanze:'',
                defaultProps:'',
                xuanzezichan:false,
                weibaoxinxi:false,
                zcmc:false,
                zmcms:false,
                data:[],
                imageUrl:'',
                handleAvatarSuccess:'',
                beforeAvatarUpload:'',
                chakan1:false,
                chakan2:false,
                input2:'',
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
                tableData: [{
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

<style >
.xinxixiugai .el-dialog{
    height: 680px;
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
    .xinxixiugai{
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