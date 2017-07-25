<template>
    <div class="image-wrap" v-bind:style="wrapperStyle">
        <div class="backdrop" v-bind:style="backdropStyle">
        </div>
        <img v-bind:src="responsiveImage.src" v-bind:srcSet="responsiveImage.srcSet" />
    </div>
</template>

<script>
    const leImage = require('assets/images/' + 'demo.jpg')
    export default {
      data () {
        return {
          responsiveImage: leImage
        }
      },
      computed: {
        wrapperStyle: function () {
          return {
            height: this.width * (this.responsiveImage.height / this.responsiveImage.width) + 'px',
            width: '350px'
          }
        },
        backdropStyle: function () {
          return {
            backgroundImage: 'url("' + this.responsiveImage.placeholder + '")',
            backgroundSize: 'cover'
          }
        }
      },
      created: function () {
        console.log(leImage)
      }
    }
</script>

<style scoped="">
img {
    position: relative;
    max-width: 100%;
    display: block;
    z-index: 2;
}

.image-wrap {
    position: relative;
    overflow: hidden;
}

.backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(3px);
}
</style>
