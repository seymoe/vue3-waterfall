# Vue3 Waterfall

基于 Vue 3 和 Typescript 的瀑布流插件，通过 Vite 构建.

## 用法

### 安装

```
yarn add vue3-waterfall

// 或者用 npm

npm i vue3-waterfall --save
```
### 使用

```
<template>
  <waterfall
    :list="list"
    :cols="4"
    :footerHeight="60"
    :nomore="noMore"
    @preLoaded="loadedEnd"
    @scrollReachBottom="loadMore">
    <!-- 自定义图片 -->
    <template v-slot:default="{ item }">
      <div class="imgbox">
        <img :src="item.imgSrc" :alt="item.title">
      </div>
    </template>
    <!-- 自定义底部信息块 -->
    <template v-slot:footer="{ item }">
      <span>{{ item.title }}</span>
    </template>
    <!-- 自定义加载状态标示 -->
    <template v-slot:loading>
      <span>正在拼命加载中...</span>
    </template>
    <template v-slot:nomore>
      <span>没有更多数据了...</span>
    </template>
  </waterfall>
</template>

<script>
import { defineComponent } from 'vue'
import VueWaterfall from 'vue3-waterfall'

export default defineComponent({
  data() {
    return {
      list: [],
      noMore: false
    }
  },
  components: {
    VueWaterfall
  },
  methods: {
    loadMore() {
      console.log('加载更多')
      if (this.list.length >= 30) {
        this.noMore = true
      }
    },
    loadedEnd() {
      console.log('图片预加载完成')
    }
  },
})
</script>
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
| :-----| :---- | :---- | :---- |
| width | 容器宽度（px），默认是相对父元素宽度100% | Number | - |
| height | 容器高度（px），默认是相对父元素高度100% | Number | - |
| list | **必填** 用于渲染瀑布流的数据，每项数据应有 `imgSrc` 属性，作为图片链接 | Array | [] |
| cols | 列数，不能与 `colWidth` 属性共用 | Number | 0 |
| colWidth | 列宽（px），不能与 `cols` 属性共用 | Number | 240 |
| gap | 间隔宽度（px） | Number | 15 |
| nomore | 是否有更多数据可加载 | Boolean | false |
| footerHeight | 图片底部信息块高度（px），用于展示其他信息 | Number | 0 |
| scrollDisabled | 是否禁用滚动加载 | Boolean | false |
| scrollDelay | 滚动节流（ms） | 200 |
| scrollDistance | 滚动触底距离（px） | Number | 0 |
| scrollImmediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器 | Boolean | true |

### 插槽

| 名称 | 说明
| :-----| :---- |
| default | 默认插槽，传入数据项，自定义图片展示结构 |
| footer | 自定义底部信息块 |
| loading | 自定义加载状态 |
| nomore | 自定义无数据状态 |

## License

Released under the [MIT](LICENSE) License.