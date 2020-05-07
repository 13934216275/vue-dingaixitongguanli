<template>
  <div class="bj">
    <div class="dh">
         <div class="left">
  <img src="http://show.uekedu.com/project/kuangjia/dingai/6ba1165bedaa05421ab311dedd00f9ed.png
" alt="">
</div>
         <div class="right">
        <h3>用户登录</h3>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm" >
          <el-form-item  prop="name">
            <el-input v-model="ruleForm.name" placeholder="账号" type="text"></el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input type="password" v-model="ruleForm.pass" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="dl">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="foot">
     <p> Copyright ©2018 dingai, All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('账号不能为空'));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('密码不能为空'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                name:'',
                pass:''
            },
            rules: {
                pass: [
                    {validator: validatePass, trigger: 'blur'}
                ],
                name: [
                    {validator: checkAge, trigger: 'blur'}
                ]
            }
        };

    },
    methods: {
        submitForm:function() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    this.$message({
                        showClose: true,
                        message: '恭喜您，登录成功',
                        type: 'success'
                    });
                    console.log(this.ruleForm);
                    // console.log(this.$refs.ruleForm.arr.pass);
                    this.$store.commit('denglu',this.ruleForm)
                    this.$router.push("index")
                } else {
                    // console.log('error submit!!');
                    this.$message({
                        showClose: true,
                        message: '登录失败',
                        type: 'error'
                    });
                    return false;
                }
            });
        },

        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style scoped>
   .dl{
        margin-top: 20px;
        width: 200px;
       margin-left: -2px;
    }
    .bj{
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  background: url(http://show.uekedu.com/project/kuangjia/dingai/6e78769639ff97c1e353243be893e9e1.jpg
  ) no-repeat 50%/cover;
  height: 100%;
  justify-content: center;
}
.foot{
  color: #ccc;
  line-height: 40px;
  width: 100%;
}
.foot p{
  margin-top: 150px;
}
  .dh{
    width: 547px;
    height: 226px;
    margin-left:400px;
    margin-top: 200px;
  }
  .bj{
    overflow: hidden;
  }
  .left{
    width: 241px;
    height: 226px;
    border-right:0.02px #fff solid;
  }
  .left img{
    width: 100%;
  }
  .demo-ruleForm{
    width: 300px;
    height: 226px;
    float: right;

  }
  .inp{
    margin-bottom: 30px;
  }
  .right h3{
    margin-top: -226px;
    margin-left: 250px;
    color: #fff;
    margin-bottom: 20px;
  }
</style>
