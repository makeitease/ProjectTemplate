<template>
  <div>
    <ul>
      <li>
        <h2>src 下文件夹作用</h2>
      </li>
      <li>api:所有和接口调用的方法存放地址</li>
      <li> assets:所有静态资源存放地址 </li>
      <li>components:所有公用组件存放地址</li>
      <li>router:所有路由设置的存放地址</li>
      <li>utils:所有公用方法的存放地址</li>
      <li>views:所有页面的存放地址,页面根据功能模块依次建立文件夹区分</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
li {
  font: 300 20px/40px "simsun";
  text-indent: 2em;
  text-align: left;
}
</style>

