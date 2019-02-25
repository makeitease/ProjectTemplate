<template>
  <div class="login">
    <Form
      ref="formCustom"
      :model="formCustom"
      :rules="ruleCustom"
      :label-width="80"
    >
      <FormItem
        label="手机号"
        prop="passwd"
      >
        <Input v-model="formCustom.passwd"></Input>
      </FormItem>
      <FormItem
        label="密码"
        prop="passwdCheck"
      >
        <Input
          type="password"
          v-model="formCustom.passwdCheck"
        ></Input>
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          @click="handleSubmit('formCustom')"
        >Submit</Button>
        <Button
          @click="handleReset('formCustom')"
          style="margin-left: 8px"
        >Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
//引用共用方法
import { checkType } from "../../utils/mainMethods.js";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        //调用共用方法
        if (!checkType.checkStr(value, "phone")) {
          callback(new Error("请输入正确手机号"));
        } else {
          callback();
        }
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!checkType.checkStr(value, "pwd")) {
        callback(
          new Error(
            "密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
          )
        );
      } else {
        callback();
      }
    };

    return {
      formCustom: {
        passwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.$router.push({ path: "home" });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style  scoped>
.login {
  width: 500px;
  height: 400px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -250px;
}
</style>

