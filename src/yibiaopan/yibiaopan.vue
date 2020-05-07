<template>
    <div class="yibiaopan">
    <div class="kuai1">
    <template v-for="v in arr">
    <yibiao :title="v.title" :num="v.num"></yibiao>
    </template>
    </div>
        <el-row :gutter="40">
            <el-col :span="12">
                <el-card shadow="always">
                    <div slot="header" class="clearfix">
                        <i class="el-icon-bingtu"></i>
                        <span>资产概况</span>
                    </div>
                    <el-row :gutter="80">
                        <el-col :span="12">
                            <p style="margin-top: -30px;margin-bottom: 20px">在用</p>
                            <el-progress type="circle" :percentage="25"></el-progress>
                        </el-col>
                        <el-col :span="12">
                            <p style="margin-top: -30px;margin-bottom: 20px">闲置</p>
                            <el-progress color="green" type="circle" :percentage="64"></el-progress>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <i class="el-icon-bingtu"></i>
                        <span>资产状态占比</span>
                    </div>
                    <ve-pie :tooltip="{ trigger: 'item',
        formatter: '{资产状态}{a} <br/>{b} : {c} ({d}%)'}" :legend="{ type: 'scroll',orient: 'vertical',right: 10,top: 20,bottom: 20}" :series="[{name: '姓名',type: 'pie',radius : '35%',center: ['40%', '23%'],data:seriesData,itemStyle: {emphasis: { shadowBlur: 10,shadowOffsetX: 0,shadowColor: 'rgba(0, 0, 0, 0.5)' } } } ]" style="height: 184px">
                    </ve-pie>
                </el-card>
            </el-col>
        </el-row>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <i class="el-icon-bingtu"></i>
                <span>资产分类统计</span>
            </div>
            <ve-histogram :data="chartData" :colors="['#67C23A']" :tooltip="{type:''}"></ve-histogram>
        </el-card>
    </div>
</template>

<script>
    import yibiao from '@/components/yibiao/yibiao.vue'
    export default {
        name: "yibiaopan",
        components: {
            yibiao,
        },
        data() {
            return{
                arr:[
                    {title:"待签字",num:89},
                    {title:"待签字",num:22},
                    {title:"待签字",num:33},
                    {title:"待签字",num:44},
                    {title:"待签字",num:55},
                    {title:"待签字",num:66},
                ],
                seriesData:[
                    {name:"闲置",value:"17.75"},
                    {name:"报废",value:"44.99"},
                    {name:"在用",value:"37.26"}
                ],
                chartData: {
                    columns: ['专用设备', '数量'],
                    rows: [
                        { '专用设备': '土地、房屋及构筑物', '数量': 1393},
                        { '专用设备': '专用设备', '数量':3530 },
                        { '专用设备': '电器设备', '数量':2923 },
                        { '专用设备': '电子产品及通信设备', '数量':1723 },
                        { '专用设备': '文艺体育设备', '数量':3792},
                        { '专用设备': '图书文物及陈列品', '数量':4593 },
                        { '专用设备': '家具用具及其他类', '数量':620 },
                    ]
                }
            }
        }
    }
</script>

<style >
    .kuai p[data-v-4d126422]{
        font-size: 12px;
    }
.kuai1{
    display: flex;
    justify-content: space-between;
}
    .yibiaopan .el-row{
        padding: 10px 15px;
        box-sizing: border-box;
        margin-top: 20px;
    }
    .clearfix span{
        float: left;
        font-size: 20px;
    }
    .clearfix i{
       float: left;
        font-size: 20px;
        margin-top: 3px;
    }
</style>