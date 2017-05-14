<template>
<el-row>
  <el-col :offset="2" :span="20">
    <div class="box">
      <div class="box-head">
        <h1>客户</h1>
      </div>
      <div class="box-body">
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-input v-model="avatar"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="wechat"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="phone"></el-input>
          </el-form-item>
          <el-form-item label="等级">
            <el-input v-model="level"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="box-foot">
        <button @click="handleSubmit">确定</button>
        <button>取消</button>
      </div>
    </div>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'CustomerForm',
  data () {
    return {
      username: '',
      password: '',
      avatar: '',
      wechat: '',
      phone: '',
      level: '',
      form: {}
    };
  },
  methods: {
      handleSubmit() {
        // todo check form.
        // todo submit form.
        this.$http.post('/api/customer', {
            username: this.username,
            password: this.password,
            avatar: this.avatar,
            wechat: this.wechat,
            phone: this.phone
        }).then(response=>{
            alert('success')
        }).catch(error=>{
            alert('error')
        })
      }
  }
};
</script>

<style lang="less" scoped>
.box {
  background-color: #f5f5f5;
  border-radius: 5px;

  .box-head {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-body {
    margin: 0 20px;
  }
  .box-foot {
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
