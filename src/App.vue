<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//在刷新时由于vue重新实例化所以要重新调用addrouter方法
import { getRouter } from "@/router/getDynamicRouter";
export default {
  name: "App",
  created() {
    if (this.$router.options.routes.length <= 1 && sessionStorage.router) {
      let routes = JSON.parse(sessionStorage.menu);
      var routerList = getRouter(routes);
      this.$router.addRoutes(routerList);
      // this.$router不是响应式的，所以手动将路由元注入路由对象
      this.$router.options.routes = this.$router.options.routes.concat(
        routerList
      );
      console.log(this.$router.options);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
