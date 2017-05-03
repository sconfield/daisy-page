<template>
<el-row>
  <el-col :offset="2" :span="20">
    <div class="box">
      <div class="box-head">
        <h1>客户</h1>
      </div>
      <div class="box-body">
        <el-form label-width="80px">
          <el-form-item label="名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="box-foot">
        <button>确定</button>
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

    };
  }
};
</script>

<style lang="less" scoped>
.box {
  background-color: #f5f5f5;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 6px 8px teal;

  .box-head {
    height: 100px;
  }
  .box-foot {
    height: 100px;
  }
}
</style>