<template>
  <div class="vue3-waterfall" id="waterfallBox">
    <div
      v-for="(item, index) in waterfallList"
      :key="index"
      class="vue3-waterfall-item" :style="{top: item.top+'px', left: item.left+'px', width: item.width+'px', height:item.height+'px'}">
        <slot :item="item">
          <img :src="item.src" :alt="item.title">
          <div class="vue3-waterfall-item_footer">
            <slot name="footer" :item="item">
              <p class="title">{{ item.title }}</p>
              <p class="info">{{ item.info }}</p>
            </slot>
          </div>
        </slot>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onUnmounted, watch, nextTick } from 'vue'

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
  name: 'VueWaterfall',
  props: {
    width: Number,
    height: Number,
    imgWidth: Number,
    cols: Number,
    gap: {
      type: Number,
      default: 0
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
        state.colWidth = Math.floor(state.containerWidth / props.cols - props.gap)
      } else {
        state.colCount = Math.floor(state.containerWidth / (state.colWidth + props.gap))
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
        aImg.src = props.list[i].imgSrc
        aImg.onload = aImg.onerror = (e: any) => {
          let imgData: any = {
            width: state.colWidth,
            height: state.colWidth / aImg.width * aImg.height + props.footerHeight,
            src: props.list[i].imgSrc,
            ...props.list[i]
          }
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
