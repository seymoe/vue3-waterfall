<template>
  <div class="vue3-waterfall" id="waterfallBox">
    <div
      v-for="(item, index) in waterfallList"
      :key="index"
      class="vue3-waterfall-item" :style="{top: item._top+'px', left: item._left+'px', width: item._width+'px', height:item._height+'px'}">
        <slot :item="item">
          <img :src="item._src" :alt="item.title">
        </slot>
        <div class="vue3-waterfall-item_footer">
          <slot name="footer" :item="item">
            <p class="title">{{ item.title }}</p>
            <p class="info">{{ item.info }}</p>
          </slot>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onUnmounted, watch, nextTick } from 'vue'

interface IWaterfallProps {
  width?: number
  height?: number
  gap: number
  colWidth?: number
  cols?: number
  footerHeight: number
  list: any[]
}

export default defineComponent({
  name: 'VueWaterfall',
  props: {
    width: Number,
    height: Number,
    colWidth: Number,
    cols: Number,
    gap: {
      type: Number,
      default: 0
    },
    footerHeight: {
      type: Number,
      default: 80
    },
    list: {
      type: Array,
      default: () => ([])
    }
  },
  setup(props: IWaterfallProps) {
    const state: {
      containerWidth: number
      colW: number
      colCount: number
      beginIndex: number
      heightArr: number[]
      waterfallList: any[]
    } = reactive({
      // 容器宽
      containerWidth: props.width || 0,
      // 列宽
      colW: props.colWidth || 240,
      // 列数
      colCount: props.cols || 0,
      beginIndex: 0,
      heightArr: [],
      waterfallList: []
    })

    const initWaterfall = () => {
      // 初始化容器宽度
      if (!props.width) {
        const dom: HTMLDivElement | null = document.querySelector('#waterfallBox')
        dom && (state.containerWidth = dom.offsetWidth)
      }
      // 初始化列宽
      if (props.cols) {
        state.colW = Math.floor(state.containerWidth / props.cols - props.gap)
      } else {
        state.colCount = Math.floor(state.containerWidth / (state.colW + props.gap))
      }
      if (state.beginIndex === 0) {
        state.waterfallList = []
        state.heightArr = new Array(state.colCount)
        for (let i = 0; i < state.heightArr.length; i++) {
          state.heightArr[i] = 0
        }
      }
      preloadImages()
    }

    const preloadImages = () => {
      for (let i = state.beginIndex; i < props.list.length; i++) {
        const item = props.list[i]
        let img = new Image()
        img.src = item.imgSrc
        img.onload = img.onerror = (e: any) => {
          const minIndex = filterMin()
          item._width = state.colW
          item._height = state.colW * img.height / img.width + props.footerHeight
          item._top = state.heightArr[minIndex]
          item._left = minIndex * (item._width + props.gap)
          state.heightArr[minIndex] += item._height
          state.waterfallList.push(item)
        }
      }
      state.beginIndex = state.waterfallList.length
    }

    const filterMin = () => {
			const min = Math.min.apply(null, state.heightArr)
			return state.heightArr.indexOf(min)
		}

    const response = () => {
      state.beginIndex = 0
      initWaterfall()
    }

    watch(() => props.list, (val, oldVal) => {
      if (!oldVal || !oldVal.length && val.length) {
        nextTick(() => {
          initWaterfall()
        })
      }
    }, {
      immediate: true
    })

    onMounted(() => {
      window.addEventListener('resize', response)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', response)
    })

    return {
      ...toRefs(state),
      ...toRefs(props)
    }
  }
})
</script>

<style scoped>
.vue3-waterfall{
  position: relative;
  width: 100%;
  height: 100%;
}
.vue3-waterfall-item{
  position: absolute;
  box-sizing: border-box;
}
.vue3-waterfall-item img{
  display: block;
  width: 100%;
  height: auto;
}
.vue3-waterfall-item_footer{
  padding: 15px;
}
.vue3-waterfall-item_footer .title{
  margin: 0;
}
.vue3-waterfall-item_footer .info{
  margin: 0;
}
</style>
