<template>
  <waterfall
    :list="list"
    :cols="4"
    :footerHeight="60"
    :gap="15"
    @preLoaded="loadedEnd"
    @scrollReachBottom="loadMore">
    <template v-slot:default="{ item }">
      <div class="imgbox">
        <img :src="item.imgSrc" :alt="item.title">
      </div>
    </template>
    <template v-slot:footer="{ item }">
      <span>{{ item.title }}</span>
    </template>
  </waterfall>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Waterfall from './lib'

interface AppState {
  list: any[]
}

export default defineComponent({
  name: 'App',
  data() : AppState {
    return {
      list: []
    }
  },
  components: {
    Waterfall
  },
  methods: {
    loadMore() {
      setTimeout(() => {
        this.list = this.list.concat([
          {
            id: 11,
            imgSrc: 'https://cdn.xnycloud.com/xny-data/_b6314ece09.png',
            title: '111',
            info: '222'
          },
          {
            id: 12,
            imgSrc: 'https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png',
            title: '111',
            info: '222'
          },
          {
            id: 13,
            imgSrc: 'https://cdn.xnycloud.com/xny-data/2060_df48245eba.png',
            title: '111',
            info: '222'
          }
        ])
      }, 1000)
    },
    loadedEnd() {
      console.log('图片预加载完成')
    }
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        {
          id: 1,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/_f26d6f3e95.png',
          title: '111',
          info: '222'
        },
        {
          id: 6,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/2060_df48245eba.png',
          title: '111',
          info: '222'
        },
        {
          id: 4,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/_b6314ece09.png',
          title: '111',
          info: '222'
        },
        {
          id: 5,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/_f26d6f3e95.png',
          title: '111',
          info: '222'
        },
        {
          id: 10,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png',
          title: '111',
          info: '222'
        },
        {
          id: 3,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/_8fa7009f0b.png',
          title: '111',
          info: '222'
        },
        {
          id: 7,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/_8fa7009f0b.png',
          title: '111',
          info: '222'
        },
        {
          id: 8,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/_b6314ece09.png',
          title: '111',
          info: '222'
        },
        {
          id: 9,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png',
          title: '111',
          info: '222'
        },
        {
          id: 2,
          imgSrc: 'https://cdn.xnycloud.com/xny-data/2060_df48245eba.png',
          title: '111',
          info: '222'
        }
      ]
    }, 3000)
  }
 })
</script>

<style>
html, body, #app{
  width: 100%;
  height: 100%;
}
body{
  margin: 0;
}
#app {
  width: 800px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.imgbox img{
  display: block;
  width: 100%;
  box-sizing: border-box;
}
</style>
