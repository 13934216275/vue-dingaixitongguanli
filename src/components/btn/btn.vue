<template>
    <div class="hh" >
        <el-button :class="classlist[icon].name" round size="small">
            {{classlist[icon].val}}
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "btn",
        props:[
            'icon'
        ],
        data:function () {
            return{
                classlist:{
                    0:{name:'green',val:'闲置'},
                    1:{name:'blue',val:'在用'},
                    2:{name:'shen',val:'借用'},
                    3:{name:'yellow',val:'维修中'}
                }
            }
        }
    }
</script>

<style scoped>
     .green{
         background-color: rgb(103, 194, 58);
     }
    .blue{
        background-color: rgb(64, 158, 255);
    }
    .shen{
        background-color: rgb(24, 152, 209);
    }
    .yellow{
        background-color: rgb(230, 162, 60);
    }
</style>