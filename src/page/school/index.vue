<template>
  <div v-title="'茶学堂'">
    <Header :title="head.title" :showLeft="false" :status="1" @selectTap="appTap(1)"></Header>
    <div class="content">
      
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img v-lazy="item">
        </li>
      </ul>
      
      
      <ul>
        <li v-for="(item, index) in list1" :key="index" :type="item.type" @click="listTap(item.uid)">
          {{item.title}}
        </li>
      </ul>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@view/header";
import { Indicator } from "mint-ui";
import { MonitList } from "@api";
export default {
  components: {
    Header
  },
  data() {
    return {
      head: {
        title: "茶学堂"
      },
      list: [
        "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg",
        "http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg",
        "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg",
        "http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg",
        "http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg"
      ],
      list1: [
        {
          title: "88848",
          type: 5,
          uid: 1
        },
        {
          title: "88883",
          type: 5,
          uid: 2
        },
        {
          title: "88882",
          type: 5,
          uid: 3
        },
        {
          title: "88828",
          type: 5,
          uid: 4
        }
      ]
    };
  },
  mounted() {
    //  Indicator.open();
    //  this.schList()
  },
  methods: {
    async schList() {
      const res = await MonitList({ page: 1, count: 10 });
      if (res.code === 200) {
        setTimeout(() => {
          Indicator.close();
        }, 3000);
      }
    },
    appTap(e) {
      window.location.href = "https://www.baidu.com/";
    },
    listTap(e) {
      console.log(e)
      this.$router.push(`/detail?bid=${e}`)
    }
  }
};
</script>

<style scoped>
.swiper {
  background: red;
  min-height: 320px;
}

img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}

ul li img {
  display: block;
  width: 100%;
}
</style>
