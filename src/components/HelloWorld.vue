<template>
  <div class="hello">
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="username"
    ></mt-field>
    <mt-button
      type="primary"
      @click.native="handleClick"
    >调用原生方法</mt-button>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    handleClick() {
      this.$jsBridge("submitFromWeb", { param: this.username }, function(
        responseData
      ) {
        alert(responseData);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
