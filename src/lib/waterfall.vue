<template>
  <div class="vue3-waterfall" id="waterfallBox">
    <div
      v-for="(item, index) in waterfallList"
      :key="index"
      class="waterfall-item" :style="{top: item.top+'px', left: item.left+'px', width: item.width+'px', height:item.height+'px'}">
        <slot :item="item">
          <img :src="item.src" :alt="item.title">
        </slot>
        <div class="waterfall-item_footer">
          <slot name="footer" :item="item">
            <p class="title">{{ item.title }}</p>
            <p class="info">{{ item.info }}</p>
          </slot>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onUnmounted } from 'vue'

interface IOption {
  value?: string | number | boolean,
  label?: string | number
}

interface IWaterfallProps {
  width?: number
  height?: number
  gap: number
  imgWidth?: number
  cols?: number
  footerHeight: number
  option?: IOption
  list: any[]
}

export default defineComponent({
  name: 'Vue3Waterfall',
  props: {
    width: Number,
    height: Number,
    imgWidth: Number,
    cols: Number,
    gap: {
      type: Number,
      default: 20
    },
    footerHeight: {
      type: Number,
      default: 80
    },
    option: {
      type: Object,
      default: {
        value: 'value',
        label: 'label'
      }
    },
    list: {
      type: Array,
      default: () => ([])
    }
  },
  setup(props: IWaterfallProps) {
    const state: {
      containerWidth: number
      colWidth: number
      colCount: number
      beginIndex: number
      heightArr: number[]
      waterfallList: any[]
    } = reactive({
      // 容器宽
      containerWidth: props.width || 0,
      // 列宽
      colWidth: props.imgWidth || 240,
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
        state.colWidth = Math.floor(state.containerWidth / props.cols)
      } else {
        state.colCount = Math.floor(state.containerWidth / state.colWidth)
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
        let aImg = new Image()
        aImg.src = props.list[i]
        aImg.onload = aImg.onerror = (e: any) => {
          let imgData: any = {}
          imgData.width = state.colWidth
          imgData.height = state.colWidth / aImg.width * aImg.height + props.footerHeight
          imgData.src = props.list[i]
          imgData.title = '标题'
          imgData.info = '详情说明：啦啦啦啦啦'
          state.waterfallList.push(imgData)
          rankImage(imgData)
        }
      }
      state.beginIndex = state.waterfallList.length
    }

    const rankImage = (imgData: any) => {
      const minIndex = filterMin()
      imgData.top = state.heightArr[minIndex]
      imgData.left = minIndex * (imgData.width + props.gap)
      state.heightArr[minIndex] += imgData.height
    }

    const filterMin = () => {
			const min = Math.min.apply(null, state.heightArr)
			return state.heightArr.indexOf(min)
		}

    const response = () => {
      state.beginIndex = 0
      initWaterfall()
    }

    onMounted(() => {
      window.addEventListener('resize', response)
      initWaterfall()
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
}
.waterfall-item{
  position: absolute;
}
.waterfall-item img{
  display: block;
  width: 100%;
  height: auto;
}
.waterfall-item_footer{
  padding: 15px;
}
.waterfall-item_footer .title{
  margin: 0;
}
.waterfall-item_footer .info{
  margin: 0;
}
</style>
