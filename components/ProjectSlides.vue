<template>
    <div class="swiper-slide" :data-history="convertToSlug(project.name)">
        <div v-swiper="horizontalSwiperOptions" :key="'project-slider-' + slug" :ref="project.name">
            <div class="swiper-wrapper">
                <template  v-for="(slide, slideIndex) in project.slides">
                    <div class="swiper-slide" :data-history="slug + (slideIndex + 1)" :key="slideIndex + slug">
                        <template v-for="element in slide.elements">
                            <Headline :content="element.content" :positionLeftInPercent="element.positionLeftInPercent" :positionTopInPercent="element.positionTopInPercent" :zIndex="element.zIndex"></Headline>
                        </template>
                    </div>
                </template>
            </div>
            <div class="swiper-pagination" :class="'pagination-' + slug" slot="pagination" :key="slug"></div>
        </div>
    </div>
</template>

<script>
import Headline from '~components/slideComponents/Headline.vue'
export default {
  components: {
    Headline
  },
  data () {
    return {

    }
  },
  props: {
    project: {
      type: Object,
      default: function () {
        return {}
      }
    },
    generalSwiperOptions: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    slug: function () {
      return this.convertToSlug(this.project.name)
    },
    horizontalSwiperOptions: function () {
      return Object.assign({}, this.generalSwiperOptions, {
        direction: 'horizontal',
        pagination: '.pagination-' + this.slug,
        paginationType: 'fraction'
      })
    }
  },
  methods: {
    convertToSlug: function (Text) {
      return Text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
    }
  }
}
</script>

<style lang="scss" scoped>
    .swiper-wrapper {
        height: 100vh;
        width: 100vw;
    }
    .swiper-slide {
        position: relative;
        text-align: center;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg-img {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
    }
</style>
