<template>
    <h1 class="slideHeadline" v-bind:style="styleObject">{{ content }}</h1>
</template>

<script>
  export default {
    data () {
      return {
        targetAspectRatio: '16:9'
      }
    },
    props: {
      content: String,
      positionLeftInPercent: Number,
      positionTopInPercent: Number,
      zIndex: Number
    },
    computed: {
      styleObject: function () {
        let styles = {}
        styles.left = this.positionLeftInPercent + 'vw'
        styles.top = this.getTopPercentageFromAspectRatio(this.positionTopInPercent) + 'vw'
        styles['z-index'] = this.zIndex
        return styles
      }
    },
    methods: {
      getTopPercentageFromAspectRatio: function (positionTopInPercent) {
        let aspectRatio = this.targetAspectRatio.split(':')
        console.log(aspectRatio[1] / aspectRatio[0])
        return positionTopInPercent * ((1 - (aspectRatio[1]) / (aspectRatio[0]) / 2))
      }
    }
  }
</script>

<style lang="scss" scoped>
    @media (min-width: 640px) {
        .slideHeadline {
            position: absolute;
        }
    }
</style>
