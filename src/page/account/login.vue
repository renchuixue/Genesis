<template>
   <div>
       <Header :title="head.title" :showLeft="false" ></Header>
       <div class="content">
           {{msg}}
       </div>
       
   </div>
</template>


<script>
  import Header from '@view/header'
  export default {
      name:"login",
      components:{
        Header
      },
      data(){
          return {
              msg:"登录",
              head:{
                  title:"登录"
              }
          }
      }
  }
</script>

<style scoped>


</style>