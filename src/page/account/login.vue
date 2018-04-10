<template>
   <div>
       <Header :title="head.title" :showLeft="false" ></Header>
       <div class="content">
           <div class="form">
           <!--logo-->
           <div class="logo-content">
             <p>{{logo}}</p>
             <p class="channelText">{{channel.Franchiser}}</p>
           </div>
           <!--表单-->
            <div class="form-content">
                <mt-field class="user_name iconfont icon-user"  v-model="birthday.userName" placeholder="请输入用户名">
                </mt-field>
                <mt-field class="password iconfont icon-password" v-model="birthday.passWord" placeholder="请输入密码" type="password">
                </mt-field>
                <p class="linkSicth">
                  <a href="javascript:;" @click="Smerchant" class="Swicth" >{{linkList.Swicth}}</a>
                  <a href="javascript:;" class="Forgetps">{{linkList.Forgetps}}</a>
                </p>
                <mt-button type="primary" @click="LoginSubmit" class="loginBtn">{{SubmitText.default}}</mt-button>
            </div>
           </div>
       </div>
       
   </div>
</template>


<script>
import Header from "@view/header";
import { Toast, Indicator } from "mint-ui";
import { MonitList } from "@api";

export default {
  name: "login",
  components: {
    Header
  },
  data() {
    return {
      msg: "登录",
      head: {
        title: "登录"
      },
      logo: "logo",
      flag: false,
      SubmitText:{
        default:"确认登录"
      },
      toast: {
        usern: "用户为空",
        passw: "密码为空"
      },
      birthday: {
        userName: "",
        passWord: ""
      },
      channel: {
        Franchiser: "加盟商登录"
      },
      linkList: {
        Swicth: "切换渠道商",
        Forgetps: "忘记密码"
      }
    };
  },
  watch: {},
  mounted() {},
  methods: {
    Smerchant: function() {
      if (this.flag) {
        this.channel.Franchiser = "加盟商登录";
        this.flag = false;
      } else {
        this.channel.Franchiser = "渠道商登录";
        this.flag = true;
      }
    },
    LoginSubmit: function() {
      if (!this.birthday.userName) {
        Toast(this.toast.usern);
      } else if (!this.birthday.passWord) {
        Toast(this.toast.passw);
      } else {
        //开始发送请求
        Indicator.open();
        this.SubmitText.default="登录成功正在为你跳转..."
        setTimeout(() => {
          Indicator.close();
          this.SubmitText.default="确认登录"
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
.logo-content .channelText {
  font-size: 0.4rem;
  color: #ccc;
}
.mint-cell {
  min-height: 45px !important;
}
.form {
  position: absolute;
  top: 20%;
}
.form-content {
  margin-top: 0.4rem;
  display: flex;
  -webkit-display: flex;
  flex-wrap: wrap;
  justify-content: center;
  -webkit-justify-content: center;
}
.form-content .user_name,
.form-content .password {
  display:flex;
  -webkit-display:flex;
  align-items:center;
  -webkit-align-items:center;
  border-radius: 25px;
  border: 1px solid #ccc !important;
  width: 80%;
}
.mint-cell-wrapper{
  line-height: 0px !important;
}
.icon-user {
  line-height: 40px;
  text-indent: 10px;
  font-size:0.4rem;
}
.icon-password{
  line-height: 40px;
  text-indent: 10px;
  font-size:0.4rem;
}
.form-content .user_name input,
.form-content .password input {
  height: 100%;
  border:0px !important;
}

.form-content .password {
  margin-top: 0.2rem;
}
.linkSicth {
  display: flex;
  -webkit-display: flex;
  -ms-display: flex;
  -moz-display: flex;
  justify-content: center;
  -ms-flex-item-align: center;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0.3rem 0;
  padding: 0 0.3rem;
}
.linkSicth a {
  color: #26a2ff;
}
.form-content .loginBtn {
  margin-top: 0.6rem;
  border-radius: 25px;
  width: 50%;
  font-size: 0.3rem;
}
</style>