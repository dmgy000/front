<template>
    <div class="me">
        <el-form :model="ruleForm2" :rules="rules2"
                 status-icon
                 ref="ruleForm2"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">我的信息</h3>
            <label>用户名：</label>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model=admin.userName
                          auto-complete="off"
                          placeholder="用户名"
                          style="width:40%"
                ></el-input>
            </el-form-item>
            <label>密码：</label>
            <el-form-item prop="password">
                <el-input type="text"
                          v-model=admin.password
                          auto-complete="off"
                          placeholder="密码"
                          style="width:40%"
                ></el-input>
            </el-form-item>
            <label>学校：</label>
            <el-form-item prop="school">
                <el-input type="text"
                          v-model=admin.school
                          auto-complete="off"
                          placeholder="学校"
                          style="width:40%"
                ></el-input>
            </el-form-item>
            <label>学号：</label>
            <el-form-item prop="number">
                <el-input type="text"
                          v-model=admin.number
                          auto-complete="off"
                          placeholder="学号"
                          style="width:40%"
                ></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        created(){
            this.admin=JSON.parse(window.localStorage.getItem('access-admin'))
            console.log(this.admin)
            if(this.admin==null){
                this.$router.replace({path:'/login'})
            }
        },
        data(){
            return {
                ruleForm2: {
                    username: '',
                    password: '',
                    number: '',
                    school: ''
                },
                rules2: {
                    username: [],
                    password: [],
                    school: [],
                    number: [],
                },
                checked: false
            }
        },

    }
</script>

<style scoped>

</style>