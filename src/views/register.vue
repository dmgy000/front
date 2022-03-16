<template>
    <div class="login-container">
        <el-form :model="ruleForm2" :rules="rules2"
                 status-icon
                 ref="ruleForm2"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">系统注册</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model="ruleForm2.username"
                          auto-complete="off"
                          placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="ruleForm2.password"
                          auto-complete="off"
                          placeholder="密码"
                ></el-input>
            </el-form-item>
            <el-form-item prop="school">
                <el-input type="text"
                          v-model="ruleForm2.school"
                          auto-complete="off"
                          placeholder="学校"
                ></el-input>
            </el-form-item>
            <el-form-item prop="number">
                <el-input type="text"
                          v-model="ruleForm2.number"
                          auto-complete="off"
                          placeholder="学号"
                ></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleRegister" :loading="registering">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                ruleForm2: {
                    username: '',
                    password: '',
                    number:'',
                    selected:''
                },
                rules2: {
                    username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
                    password: [{required: true, message: 'enter your password', trigger: 'blur'}],
                    school: [{required: true, message: 'enter your school', trigger: 'blur'}],
                    number: [{required: true, message: 'enter your number', trigger: 'blur'}],
                },
                checked: false
            }
        },
        methods: {
            handleRegister(){
                this.$refs.ruleForm2.validate((valid) => {
                    if(valid){
                        let _this = this
                        //     axios.get('http://localhost:8181/login',{params:_this.ruleForm2}).then(function (response) {
                        //         if(response.data != null){
                        //             localStorage.setItem('access-admin',JSON.stringify(response.data))
                        //             alert("登录成功")
                        //             _this.$router.replace({path:'/'})
                        //         }
                        //     })
                        axios.get('http://localhost:8181/insert/'+_this.ruleForm2.username+'/'+_this.ruleForm2.password
                            +'/'+_this.ruleForm2.school+'/'+_this.ruleForm2.number).then(function (resp) {
                            console.log(resp)
                            if(resp.data=='成功'){
                                alert("成功")
                                _this.$router.replace({path:'/'})
                            }else if(resp.data=='密码错误'){
                                alert("fail")
                                _this.$router.replace({path:'/'})
                            }else{
                                alert("已有此人")
                                _this.$router.replace({path:'/'})
                            }
                        })
                    }else{
                        console.log('error submit!');
                        return false;
                    }

                })
            }


        }
    };
</script>

<style scoped>
    .login-container {
        width: 100%;
        height: 100%;
    }
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }
</style>