<template>
  <div class="box">
    <div class="box-head"></div>
    <div class="box-body">
      <el-table :data="list">
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column prop="avatar" label="头像"></el-table-column>
        <el-table-column prop="wechat" label="微信"></el-table-column>
        <el-table-column prop="phone" label="手机"></el-table-column>
        <el-table-column prop="level" label="等级"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="50" 
            @current-change="handleTurnPage">
        </el-pagination>
      </div>
    </div>
    <div class="box-foot"></div>
  </div>
</template>

<script>
export default {
  name: 'CustomerList',
  data () {
    return {
      list: []
    };
  },
  methods: {
      handleTurnPage(currentPage) {
        this.getPage(currentPage)
      },
      getPage(currentPage) {
          this.$http.get(`/api/customer/page/${currentPage}`).then(response=>{
          if(response.status === 200) {
            this.list = response.data
          } else {
            alert('fail')
          }
        }).catch(error=>{
          alert('error')
        })
      }
  },
  created () {
      this.getPage(1)
  }
};
</script>

<style lang="less" scoped>
.box {

  .box-head {
  }
  .box-body {
  }
  .box-foot {
  }
}
</style>
