<template>
    <div class="kuai" :key="1">
        <p>{{title}}</p>
        <h6>{{num}}</h6>
    </div>
</template>

<script>
    export default {
        props:[
            'title','num'
        ]
    }
</script>

<style scoped>
.kuai{
    width: 170px;
    background: aqua;
    height: 100px;
    border-radius:10px;
}
    .kuai p{
        font-size: 18px;
        font-weight:500;
        margin-top:20px;
        margin-left: -80px;
    }
    .kuai h6{
        font-size: 24px;
        margin-top: 10px;
        margin-left: -100px;
    }
</style>