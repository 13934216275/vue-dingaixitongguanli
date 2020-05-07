<template>
    <div class="jue">
        <el-card class="box-card">
           <div class="title">
               <el-button type="primary" icon="el-icon-plus">新增</el-button>
               <el-button icon="el-icon-close">删除</el-button>
               <el-button icon="el-icon-plus">角色授权</el-button>
               <el-button icon="el-icon-user-solid">用户分配</el-button>
               <i class="el-icon-question"></i>
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
                        prop="name"
                        label="角色"
                        width="500px">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="备注">
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
    .jue .el-icon-question{
        margin-left: -580px;
        font-size: 24px;
        color: #409eff;
        margin-top: 5px;
    }
   .jue .title .el-button{
        height: 100%;
        float: left;
       margin-left: -10px;
    }
    .jue .title{
        width: 100%;
        height: 36px;
    }
    .jue .text {
        font-size: 14px;
    }

    .jue .item {
        padding: 18px 0;
    }

    .jue .box-card {
        width: 100%;
        margin-top: 10px;
    }
</style>