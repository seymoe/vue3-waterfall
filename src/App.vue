<template>
  <waterfall :list="list" :cols="4">
    <template v-slot:default="{ item }">
      <div class="imgbox">
        <img :src="item.src" :alt="item.title">
      </div>
    </template>
    <template v-slot:footer="{ item }">
      <p class="title">
        <a href="#">{{ item.title }}</a>
      </p>
    </template>
  </waterfall>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Waterfall from './lib'

export default defineComponent({
  name: 'App',
  data() {
    return {
      list: [
        'https://cdn.xnycloud.com/xny-data/_f26d6f3e95.png',
        'https://cdn.xnycloud.com/xny-data/_80f88fea20.png',
        'https://cdn.xnycloud.com/xny-data/2060_df48245eba.png',
        'https://cdn.xnycloud.com/xny-data/_8fa7009f0b.png',
        'https://cdn.xnycloud.com/xny-data/_b6314ece09.png',
        'https://cdn.xnycloud.com/xny-data/_1c84aa29f6.png',
        'https://cdn.xnycloud.com/xny-data/_c741508c19.png',
        'https://cdn.xnycloud.com/xny-data/_cf90ba23b7.png',
        'https://cdn.xnycloud.com/xny-data/2030_2060_828d7d35cc.png',
        'https://cdn.xnycloud.com/xny-data/_f26d6f3e95.png',
        'https://cdn.xnycloud.com/xny-data/_80f88fea20.png',
        'https://cdn.xnycloud.com/xny-data/2060_df48245eba.png',
        'https://cdn.xnycloud.com/xny-data/_8fa7009f0b.png',
        'https://cdn.xnycloud.com/xny-data/_b6314ece09.png',
        'https://cdn.xnycloud.com/xny-data/_1c84aa29f6.png',
        'https://cdn.xnycloud.com/xny-data/_c741508c19.png',
        'https://cdn.xnycloud.com/xny-data/_cf90ba23b7.png',
        'https://cdn.xnycloud.com/xny-data/2030_2060_828d7d35cc.png'
      ]
    }
  },
  components: {
    Waterfall
  }
})
</script>

<style>
html, body, #app{
  width: 100%;
}
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.imgbox img{
  display: block;
  width: 100%;
}
</style>
