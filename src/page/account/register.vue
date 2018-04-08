<template>
   <div>
       <Header :title="head.title" :showLeft="true" ></Header>
       <div class="content">
          {{msg}}
       </div>
       
   </div>
</template>
  

<script>
import Header from '@view/header'
export default {
  name: "register",
  components:{
     Header
  },
  data() {
    return {
      msg: "注册",
      head:{
          title:"注册"
      }
    };
  }
};
</script>

<style scoped>

</style>