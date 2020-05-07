<template>
    <div class="yuan">
        <el-card class="box-card">
            <el-row>
                <el-col :span="4">
                    <el-tree
                            :data="data"
                            show-checkbox
                            node-key="id"
                            :default-expanded-keys="[1, 9]"
                            :default-checked-keys="[2]"
                            :props="defaultProps">
                    </el-tree>
                </el-col>
                <el-col :span="20">
                    <el-card class="box-card">
                        <div class="title">
                            <el-button type="primary" icon="el-icon-plus">新增</el-button>
                            <el-button icon="el-icon-close" size="small">编辑</el-button>
                            <el-button icon="el-icon-plus" size="small">导入/导出</el-button>
                            <el-button icon="el-icon-user-solid" size="small">邀请绑定微信</el-button>
                            <input type="checkbox" size="small" style="margin-left: -50px;width: 14px;height: 14px;margin-top: 10px">显示已删除的员工
                            <el-input
                                    style="float: right;width: 200px"
                                    placeholder="姓名或工号"
                                    suffix-icon="el-icon-search" size="small">
                            </el-input>
                        </div>
                        <!------------------------------表格-------------->
                        <el-table
                                border
                                :data="tableData"
                                stripe
                                style="width: 100%;margin-top: 10px;">
                            <el-table-column
                                    type="selection"
                                    width="55">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="关联微信"
                                    width="110px">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="员工编号"
                                    width="110px">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="员工姓名"
                                    width="110px">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="所在公司"
                                    width="110px">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="所属部门"
                                    width="110px">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="手机号码"
                                    width="110px">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="电子邮箱"
                                    width="110px">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="在职状态">
                            </el-table-column>
                        </el-table>
                        <el-pagination
                                style="margin-top: 10px"
                                background
                                layout="prev, pager, next"
                                :total="50">
                        </el-pagination>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                tableData: [],
                data: [{
                    id: 1,
                    label: '01康琴',
                    children: [{
                        id: 4,
                        label: '3230研发部',
                        children: [{
                            id: 9,
                            label: '2340市场部'
                        }, {
                            id: 10,
                            label: '3450行政部'
                        }],
                    }],
                }, {
                    id: 2,
                    label: '康佳',
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        created(){
            this.$http({
                method:'get',
                url:'/api/juese',
                data:{}
            }).then(res=>{
                const gg=res.data;
                if(gg.code==200){
                    this.tableData = gg.data.tableData
                }
            }).catch(err=>{alert("失败")})
        }
    }
</script>

<style scoped>
   .yuan .el-icon-question{
        margin-left: 10px;
        font-size: 24px;
        color: #409eff;
    }
   .yuan .title .el-button{
        height: 100%;
        float: left;
       margin-left: -10px;
    }
   .yuan .title{
        width: 100%;
        height: 36px;
    }
   .yuan .text {
        font-size: 14px;
    }
   .yuan .box-card {
        width: 100%;
        margin-top: 10px;
    }
</style>