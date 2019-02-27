<template>
  <div>
    <Menu
      active-name="1-2"
      theme="dark"
      width="auto"
      :class="menuitemClasses"
    >
      <MenuItem name="1-1">
      <Icon type="ios-navigate"></Icon>
      <span>Option 1</span>
      </MenuItem>
      <MenuItem name="1-2">
      <Icon type="ios-search"></Icon>
      <span>Option 2</span>
      </MenuItem>
      <MenuItem name="1-3">
      <Icon type="ios-settings"></Icon>
      <span>Option 3</span>
      </MenuItem>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>
<style scoped>
</style>
