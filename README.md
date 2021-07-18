# Vue3 Waterfall

A waterfall component build with Vue3、Typescript and Vite.


### [中文文档](https://github.com/seymoe/vue3-waterfall/blob/master/README-CN.md)


## Usage

### Install

```
yarn add vue3-waterfall

// or

npm i vue3-waterfall --save
```
### Import

```
<template>
  <waterfall
    :list="list"
    :cols="4"
    :footerHeight="60"
    :nomore="noMore"
    @preLoaded="loadedEnd"
    @scrollReachBottom="loadMore">
    <!-- Customize Image box -->
    <template v-slot:default="{ item }">
      <div class="imgbox">
        <img :src="item.imgSrc" :alt="item.title">
      </div>
    </template>
    <!-- Customize footer -->
    <template v-slot:footer="{ item }">
      <span>{{ item.title }}</span>
    </template>
    <template v-slot:loading>
      <span>Loading...</span>
    </template>
    <template v-slot:nomore>
      <span>NoMore...</span>
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
      console.log('Load More...')
      if (this.list.length >= 30) {
        this.noMore = true
      }
    },
    loadedEnd() {
      console.log('Images preload done.')
    }
  },
})
</script>
```

### Attributes

| Attribute | Description | Type | Default |
| :-----| :---- | :---- | :---- |
| width | Container width (px), default is 100% relative parent element width. | Number | - |
| height | Container height (px), When you do not specify the height value, the default is relative to the height of the parent element 100%, then the parent element must have a height. | Number | - |
| list | **Required** Data used to render the waterfall stream Each array element is an object and must have `imgSrc` attribute. | Array | [] |
| cols | columns, cannot use with `colWidth` attribute. | Number | 0 |
| colWidth | column width（px），cannot use with `cols` attribute. | Number | 240 |
| gap | gap width (px) | Number | 15 |
| nomore | whether has more data | Boolean | false |
| footerHeight | footer height（px）, it can show other info what u want. | Number | 0 |
| scrollDisabled | Disable scrolling | Boolean | false |
| scrollDelay | Scrolling throttle (ms) | 200 |
| scrollDistance | trigger distance (px) | Number | 0 |
| scrollImmediate | Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state. | Boolean | true |

### Slots

| Name | Description
| :-----| :---- |
| default | Default slot, Custom content for image. |
| footer | Custom content for footer. |
| loading | Custom content for loading status. |
| nomore | Custom content for no more data. |
## License

Released under the [MIT](LICENSE) License.