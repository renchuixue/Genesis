<template>
  <div>
    {{msg}}
    <button @click="route" :ss="$route.path">xzczxv</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: '详情'
    }
  },
  mounted() {
    console.log(this.$route.query.bid)
  },
  methods: {
    route(){
      
      console.log(this.$route.params)
    }
  }
}
</script>

<style>

</style>
