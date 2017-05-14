<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="/" router>
          <el-menu-item :index="item.path"
            v-for="item in menuList" :key="item.name">
            <i class="el-icon-menu"></i>
            {{item.name}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menuList: [
        {name: '首页', path: '/', icon: ''},
        {name: '添加客户', path: '/customerForm', icon: ''},
        {name: '客户列表', path: '/customerList', icon: ''}
      ]
    };
  }
}
</script>

<style lang="less" scoped>
#app {
  background-color: #f5f5f5;
}
</style>
