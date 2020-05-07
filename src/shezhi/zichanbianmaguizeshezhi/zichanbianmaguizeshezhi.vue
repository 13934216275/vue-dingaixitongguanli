<template>
    <div class="app">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>条码规则设置</span>
            </div>
            <div class="text item">
                <div class="title" style="text-align: left;margin-bottom: 20px">通过选择一个或多个字段的组合设置条码生成规则：</div>
                <div style="text-align: left">
                    <el-transfer
                            style="text-align: left; display: inline-block"
                            v-model="value"
                            filterable
                            :left-default-checked="[2, 3]"
                            :right-default-checked="[1]"
                            :render-content="renderFunc"
                            :titles="['待选字段', '已选字段']"
                            :button-texts="['到左边', '到右边']"
                            :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
                            @change="handleChange"
                            :data="data">
                    </el-transfer>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default{

        data() {
            const generateData = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        key: i,
                        label: `所属公司编码 ${ i }`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            return {
                data: generateData(),
                value: [1],
                value4: [1],
                renderFunc(h, option) {
                    return <span>{ option.label }</span>;
                }
            };
        },

        methods: {
            handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
            }
        }
    }
</script>

<style scoped>
    .title{
        margin-top: -25px;
    }
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 100%;
        margin-top: 10px;
    }
    .transfer-footer {
        margin-left: 20px;
        padding: 6px 5px;
    }
</style>