<template>
  <div v-title="'茶学堂'">
    <Header :title="head.title" :showLeft="false"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@view/header'
import { MonitList } from '@api'
export default {
  components: {
    Header
  },
  data() {
    return {
      head: {
        title: '茶学堂'
      }
    }
  },
  mounted() {
    this.schList()
  },
  methods: {
    async schList() {
      const res = await MonitList({ page: 1, count: 10 })
    }
  }
}
</script>

<style>

</style>
