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
  name:"reset",
  components:{Header},
  data(){
      return {
          msg:"重置",
          head:{
              title:"重置"
          }
      }
  }
}
</script>

<style  scoped>
   
</style>
