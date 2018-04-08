<template>
   <div>
       <Header :title="head.title" :showLeft="true" ></Header>
       <div class="contnet">
          {{msg}}
       </div>
       
   </div>
</template>
  

<script>
  import Header from '@view/header'
  export default {
      name:"backps",
      components:{
        Header
      },
      data(){
          return {
              msg:"找回密码",
              head:{
                  title:"找回密码"
              }
          }
      }
  }
</script>

<style scoped>


</style>
