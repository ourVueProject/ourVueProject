<template>
    <transition name="fade">
        <div class="logins">
            <div class="login-warrp">
                <el-form :model="ruleForm2" status-icon :rules="rules2" size="mini" ref="ruleForm2" label-position="left" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="name">
                      <el-input v-model="ruleForm2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                      <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                  </el-form>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
      }else {
          callback();
      }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
            this.$router.push('/randomlist');
          } else {
            console.log('error submit!!');
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.login-warrp {
    width: 90%;
    margin: 0 auto;
    margin-top: 25vh;
}
.logins {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 10;
}
</style>
