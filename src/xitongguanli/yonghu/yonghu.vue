<template>
    <div class="yong">
        <el-card class="box-card">
            <div class="title">
                <el-button type="primary" icon="el-icon-plus">新增</el-button>
                <el-button icon="el-icon-close">编辑</el-button>
                <el-button icon="el-icon-plus">分配角色</el-button>
                <el-button icon="el-icon-user-solid">数据权限</el-button>
                <el-button icon="el-icon-plus">下载操作日志</el-button>
                <el-button icon="el-icon-user-solid">变更为超级管理员</el-button>
                <i class="el-icon-question"></i>
                <el-input
                        style="float: right;width: 150px"
                        placeholder="姓名或工号"
                        suffix-icon="el-icon-search" size="small">
                </el-input>
            </div>
            <!------------------------------表格-------------->
            <el-table
                    border
                    :data="tableData"
                    stripe
                    style="width: 100%;margin-top: 10px">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="用户名"
                        width="200px">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="200px">
                </el-table-column>
                <el-table-column
                        prop="admin"
                        label="管理员"
                        width="200px">
                </el-table-column>
                <el-table-column
                        prop="ifs"
                        label="是否允许手工盘点"
                        width="200px">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="启用/禁用">
                </el-table-column>
            </el-table>
            <el-pagination
                    style="margin-top: 10px"
                    background
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                tableData: [],
            }
        },
        created(){
            this.$http({
                method:'get',
                url:'/api/yonghu',
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
    .yong .el-icon-question{
        margin-left: -100px;
        font-size: 24px;
        color: #409eff;
        margin-top: 5px;
    }
    .yong .title .el-button{
        height: 100%;
        float: left;
        margin-left: -10px;
    }
    .yong .title{
        width: 100%;
        height: 36px;
    }
    .yong .text {
        font-size: 14px;
    }

    .yong .item {
        padding: 18px 0;
    }

    .yong .box-card {
        width: 100%;
        margin-top: 10px;
    }
</style>