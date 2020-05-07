<template>
    <div class="nnrr">
        <el-tabs v-model="activeName" @tab-click="handleClick1">
            <el-button class="tt" size="small" type="primary" icon="el-icon-plus"  @click="dialogFormVisible = true">增加</el-button>
            <el-dialog
                    title="资产登记"
                    :visible.sync="dialogFormVisible"
                    width="70%"
                    :modal="true">
                <template>
                    <el-tabs :tab-position="tabPosition" style="height: auto;margin-left: -30px" :stretch="true" >
                        <el-tab-pane label="基本信息" >
                            <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="80px">
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="资产条码">
                                            <el-input placeholder="自动生成" size="small" v-model="formInline.tm"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="资产名称">
                                            <el-input placeholder="资产名称" size="small" v-model="formInline.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="资产类型" size="small">
                                            <el-select placeholder="资产类型" v-model="formInline.lx" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="规格型号" size="small">
                                            <el-input v-model="formInline.xh" placeholder="规格型号"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="SN号" size="small">
                                            <el-input v-model="formInline.lx" placeholder="SN号"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="计量单位" size="small">
                                            <el-input v-model="formInline.dw" placeholder="计量单位"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="金额" size="small">
                                            <el-input v-model="formInline.jine" placeholder="金额" ></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用公司" size="small">
                                            <el-input v-model="formInline.gs" placeholder="使用公司"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用部门" size="small">
                                            <el-select v-model="formInline.bm" placeholder="使用部门" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="购买时间">
                                            <el-date-picker type="date" placeholder="选择时间" v-model="formInline.time" style="width: 100%;"></el-date-picker>
                                        </el-form-item>

                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用人" size="small">
                                            <el-select v-model="formInline.ren" placeholder="使用人" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="管理员" size="small">
                                            <el-select v-model="formInline.gly" placeholder="管理员" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="存放地点" size="small">
                                            <el-select v-model="formInline.dd" placeholder="存放地点" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col  :span="8">
                                        <el-form-item label="使用期限" size="small">
                                            <el-input v-model="formInline.qx" placeholder="使用期限"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col  :span="8">
                                        <el-form-item label="来源" size="small">
                                            <el-select v-model="formInline.laiyuan" placeholder="来源" style="width: 100%">
                                                <el-option label="购入" value="gouru"></el-option>
                                                <el-option label="自建" value="zijian"></el-option>
                                                <el-option label="捐赠" value="juanzeng"></el-option>
                                                <el-option label="租赁" value="zulin"></el-option>
                                                <el-option label="其他" value="qita"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="15">
                                        <el-form-item label="备注" >
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="请输入内容"
                                                    v-model="formInline.bbb">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8" >
                                        <el-form-item label="资产照片">
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
                        </el-tab-pane>
                        <el-tab-pane label="维保信息">
                            <el-form :inline="false" :model="formInline" class="demo-form-inline"  label-width="80px">
                                <el-row>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="供应商" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="供应商名称" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="联系人" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="联系人" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="联系方式" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="联系方式" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="维保到期" class="el-form-item--small">
                                            <el-date-picker
                                                    v-model="value1"
                                                    type="date"
                                                    placeholder="维保到期时间"
                                                    size="small">
                                            </el-date-picker>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24" style="padding: 0">
                                        <el-form-item label="维保说明" class="el-form-item--small">
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="维保说明"
                                                    v-model="textarea">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </template>
                <span slot="footer" class="dialog-footer" style="margin-top: -20px">
    <el-button @click="dialogVisible = false" style="margin-top: -25px">取 消</el-button>
    <el-button type="primary" @click="add" style="margin-top: -25px">确 定</el-button>
                            </span>
            </el-dialog>
            <el-dialog
                    title="资产登记"
                    :visible.sync="dialogFormVisible1"
                    width="70%"
                    :modal="true">
                <template>
                    <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                        <el-tab-pane label="基本信息" >
                            <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="80px">
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="资产条码">
                                            <el-input placeholder="自动生成" size="small" v-model="formInline.tm"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="资产名称">
                                            <el-input placeholder="资产名称" size="small" v-model="formInline.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="资产类型" size="small">
                                            <el-select placeholder="资产类型" v-model="formInline.lx" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="规格型号" size="small">
                                            <el-input v-model="formInline.xh" placeholder="规格型号"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="SN号" size="small">
                                            <el-input v-model="formInline.lx" placeholder="SN号"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="计量单位" size="small">
                                            <el-input v-model="formInline.dw" placeholder="计量单位"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="金额" size="small">
                                            <el-input v-model="formInline.jine" placeholder="金额" ></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用公司" size="small">
                                            <el-input v-model="formInline.gs" placeholder="使用公司"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用部门" size="small">
                                            <el-select v-model="formInline.bm" placeholder="使用部门" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="购买时间" size="small">
                                            <el-input v-model="formInline.time" placeholder="购买时间"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用人" size="small">
                                            <el-select v-model="formInline.ren" placeholder="使用人" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="管理员" size="small">
                                            <el-select v-model="formInline.gly" placeholder="管理员" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="存放地点" size="small">
                                            <el-select v-model="formInline.dd" placeholder="存放地点" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col  :span="8">
                                        <el-form-item label="使用期限" size="small">
                                            <el-input v-model="formInline.qx" placeholder="使用期限"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col  :span="8">
                                        <el-form-item label="来源" size="small">
                                            <el-select v-model="formInline.laiyuan" placeholder="来源" style="width: 100%">
                                                <el-option label="购入" value="gouru"></el-option>
                                                <el-option label="自建" value="zijian"></el-option>
                                                <el-option label="捐赠" value="juanzeng"></el-option>
                                                <el-option label="租赁" value="zulin"></el-option>
                                                <el-option label="其他" value="qita"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="15">
                                        <el-form-item label="备注" >
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="请输入内容"
                                                    v-model="formInline.bbb">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8" >
                                        <el-form-item label="资产照片">
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
                        </el-tab-pane>
                        <el-tab-pane label="维保信息">
                            <el-form :inline="false" :model="formInline" class="demo-form-inline"  label-width="80px">
                                <el-row>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="供应商" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="供应商名称" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="联系人" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="联系人" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="联系方式" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="联系方式" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="维保到期" class="el-form-item--small">
                                            <el-date-picker
                                                    v-model="value1"
                                                    type="date"
                                                    placeholder="维保到期时间"
                                                    size="small">
                                            </el-date-picker>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24" style="padding: 0">
                                        <el-form-item label="维保说明" class="el-form-item--small">
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="维保说明"
                                                    v-model="textarea">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </template>
                <span slot="footer" class="dialog-footer" style="margin-top: -20px">
    <el-button @click="dialogVisible = false" style="margin-top: -25px">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false" style="margin-top: -25px">确 定</el-button>
                            </span>
            </el-dialog>
            <el-dialog
                    title="资产编辑"
                    :visible.sync="dialogFormVisible2"
                    width="70%"
                    :modal="true">
                <template>
                    <el-tabs :tab-position="tabPosition" style="height: auto;" :stretch="true" >
                        <el-tab-pane label="基本信息" >
                            <el-form :inline="false" :model="formInline1" class="demo-form-inline" label-width="80px">
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="资产条码">
                                            <el-input placeholder="自动生成" size="small" v-model="formInline1.tm"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="资产名称">
                                            <el-input placeholder="资产名称" size="small" v-model="formInline1.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="资产类型" size="small">
                                            <el-select placeholder="资产类型" v-model="formInline1.lx" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="规格型号" size="small">
                                            <el-input v-model="formInline1.xh" placeholder="规格型号"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="SN号" size="small">
                                            <el-input v-model="formInline1.lx" placeholder="SN号"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="计量单位" size="small">
                                            <el-input v-model="formInline1.dw" placeholder="计量单位"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="金额" size="small">
                                            <el-input v-model="formInline1.jine" placeholder="金额" ></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用公司" size="small">
                                            <el-input v-model="formInline1.gs" placeholder="使用公司"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用部门" size="small">
                                            <el-select v-model="formInline1.bm" placeholder="使用部门" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="购买时间" size="small">
                                            <el-input v-model="formInline1.time" placeholder="购买时间"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="使用人" size="small">
                                            <el-select v-model="formInline1.ren" placeholder="使用人" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="管理员" size="small">
                                            <el-select v-model="formInline1.gly" placeholder="管理员" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="8">
                                        <el-form-item label="存放地点" size="small">
                                            <el-select v-model="formInline1.dd" placeholder="存放地点" style="width: 100%">
                                                <el-option label="New York" value="niuyue"></el-option>
                                                <el-option label="London" value="london"></el-option>
                                                <el-option label="Sydney" value="sydney"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col  :span="8">
                                        <el-form-item label="使用期限" size="small">
                                            <el-input v-model="formInline1.qx" placeholder="使用期限"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col  :span="8">
                                        <el-form-item label="来源" size="small">
                                            <el-select v-model="formInline1.laiyuan" placeholder="来源" style="width: 100%">
                                                <el-option label="购入" value="gouru"></el-option>
                                                <el-option label="自建" value="zijian"></el-option>
                                                <el-option label="捐赠" value="juanzeng"></el-option>
                                                <el-option label="租赁" value="zulin"></el-option>
                                                <el-option label="其他" value="qita"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="5">
                                    <el-col :span="15">
                                        <el-form-item label="备注" >
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="请输入内容"
                                                    v-model="formInline1
.bbb">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8" >
                                        <el-form-item label="资产照片">
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
                        </el-tab-pane>
                        <el-tab-pane label="维保信息">
                            <el-form :inline="false" :model="formInline" class="demo-form-inline"  label-width="80px">
                                <el-row>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="供应商" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="供应商名称" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="联系人" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="联系人" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="联系方式" class="el-form-item--small">
                                            <el-input v-model="formInline.user" placeholder="联系方式" size="small"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" style="padding: 0">
                                        <el-form-item label="维保到期" class="el-form-item--small">
                                            <el-date-picker
                                                    v-model="value1"
                                                    type="date"
                                                    placeholder="维保到期时间"
                                                    size="small">
                                            </el-date-picker>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24" style="padding: 0">
                                        <el-form-item label="维保说明" class="el-form-item--small">
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="维保说明"
                                                    v-model="textarea">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </template>
                <span slot="footer" class="dialog-footer" style="margin-top: -20px">
    <el-button @click="dialogVisible2 = false" style="margin-top: -25px">取 消</el-button>
    <el-button type="primary" @click="queding" style="margin-top: -25px">确 定</el-button>
                            </span>
            </el-dialog>
            <el-button class="tt" size="small" type="danger" icon="el-icon-delete" @click="sc">删除</el-button>
            <el-dropdown split-button type="primary" class="tt1" size="small">
                <i class="el-icon-daochu"></i>导入/导出
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item>下载导入模板</el-dropdown-item>
                    <el-dropdown-item>批量导入资产</el-dropdown-item>
                    <el-dropdown-item>导出资产</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown split-button type="primary"  class="tt2" size="small">
                <i class="el-icon-printer"></i>打印
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item>打印资产标签</el-dropdown-item>
                    <el-dropdown-item>打印资产卡片</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <div style="float: right">
                <el-input size="small" placeholder="请输入内容" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <el-tab-pane label="资产登记" name="first">
                <el-table
                    :data="tableData"
                    @selection-change="deletes"
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
                        prop="tm"
                        label="资产条码"
                        width="150">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="name"
                        label="资产名称"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="lx"
                        label="资产类型"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="xh"
                        label="规格型号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="xl"
                        label="产品序列"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="dw"
                        label="计量单位"
                        width="50">
                </el-table-column>
                <el-table-column
                        label="金额"
                        width="150">
                    <template slot-scope="scope">
                        {{scope.row.jine | currency}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="gs"
                        label="使用公司"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="bm"
                        label="使用部门"
                        width="150">
                </el-table-column>
                <el-table-column
                        label="购买时间"
                        width="150">
                    <template slot-scope="scope">
                        {{scope.row.time | date}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="ren"
                        label="使用人"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="gly"
                        label="管理员"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="dd"
                        label="存放地点"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="qx"
                        label="使用期限"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="laiyuan"
                        label="来源"
                        width="150">
                </el-table-column>
                <el-table-column
                            prop="bbb"
                            label="备注"
                            width="150">
                    </el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope" style="float: left">
                        <el-button type="text" @click="chakan00(scope.row)" size="small" dis>查看</el-button>
                        <el-button type="text"  @click="bianji00(scope.row)" size="small">编辑</el-button>
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
    </div>
</template>

<script>
    let arr=[];
    import btn from '@/components/btn/btn.vue'

    export default {
        name: "zichandengji",
        components: {
            btn,
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            handleClick1(tab, event) {
                console.log(tab, event);
            },
            onSubmit() {
                console.log('submit!');
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            add:function () {
                this.tableData.push(this.formInline);
                this.dialogFormVisible=false
                this.formInline={
                    user: '',
                    region: '',
                    tm:'',
                    icon:0,
                    lx:'',
                    xh:'',
                    dw:'',
                    jine:'',
                    time:'',
                    xl:'',
                    gs:'',
                    bm:'',
                    ren:'',
                    gly:'',
                    dd:'',
                    qx:'',
                    laiyuan:'',
                    address:'',
                    bbb:'',
                    name: '',
                }
            },
            chakan00:function (row) {
                this.formInline=row;
                this.dialogFormVisible1=true
            },
            bianji00:function (row) {
                this.formInline1=row;
                this.dialogFormVisible2=true
            },
            queding:function () {
                this.dialogFormVisible2=false
            },
            deletes(section){
                arr=[];
                arr=section;
                console.log(arr);
                /*section.forEach((ele,index)=>{
                    arr.push(ele.xiabiao)
                })*/
            },
            sc(){
                if(arr.length==0){
                    this.$message({
                        message: '请至少选择一个删除!',
                        type: 'warning'
                    });
                }
                arr.forEach((ele)=>{
                    // console.log(this.tableData.indexOf(ele));
                    if(this.tableData.indexOf(ele)>-1){
                        this.tableData.splice(this.tableData.indexOf(ele), 1)
                    }
                });

            },

        },
        data() {
            return {
                formInline: {
                    user: '',
                    region: '',
                    tm:'',
                    icon:0,
                    lx:'',
                    xh:'',
                    dw:'',
                    jine:'',
                    time:'',
                    xl:'',
                    gs:'',
                    bm:'',
                    ren:'',
                    gly:'',
                    dd:'',
                    qx:'',
                    laiyuan:'',
                    address:'',
                    bbb:'',
                    name: '',
                },
                formInline1: {
                    user: '',
                    region: '',
                    tm:'',
                    icon:0,
                    lx:'',
                    xh:'',
                    dw:'',
                    jine:'',
                    time:'',
                    xl:'',
                    gs:'',
                    bm:'',
                    ren:'',
                    gly:'',
                    dd:'',
                    qx:'',
                    laiyuan:'',
                    address:'',
                    bbb:'',
                    name: '',
                },
                tabPosition: 'left',
                activeName: 'first',
                textarea:'',
                imageUrl: '',
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
                tableData: [],
                dialogFormVisible: false,
                dialogFormVisible1: false,
                dialogFormVisible2: false,
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
                formLabelWidth: '120px'
            };
            },
        created(){
            // this.$http.get("/api/api",{}).then(res=>{
            //     const ppp=res.data;
            //     if(ppp.code==200){
            //         this.tableData=ppp.data.tableData;
            //     }
            // }).catch(err => {
            //     alert("失败")
            // })

this.$http({
    method:'get',
    url:'/api/api',
    data:{
        //传参
    }
}).then(res=>{
    const nnn=res.data;
    if(nnn.code==200){
             this.tableData=nnn.data.tableData;
       }
}).catch(err => {
         alert("失败")
    })
        }
    }
</script>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .el-dialog__body{
        padding: 10px 20px;
    }
    .el-dialog__title{
        float: left;
    }
    .el-dialog{
        width: 70%;
    }
    .dialog-footer{
        overflow: hidden;
    }
    .el-form-item{
        float: left;
    }
    .tt2{
        margin-left: -30px;
        float: left;
        margin-top: -0.1px;
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
    .tt1{
        float: left;
        margin-top: -0.1px;
    }
    .nnrr{
        background: #fff;
        padding: 10px 15px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .el-pagination{
        margin-top: 20px;
    }
    .input-with-select{
        width: 300px;
    }
    .xxx{
        margin-top: 80px;
        margin-left: -100px;

    }
    .el-input-group__append, .el-input-group__prepend {
        width: 20px;
        height: 30px;
    }
</style>