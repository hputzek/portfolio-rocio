<template>
    <div class="image-wrap" v-bind:style="wrapperStyle">
        <div class="backdrop" v-bind:style="backdropStyle">
        </div>
        <img v-bind:src="imageObject" v-bind:srcSet="imageObject.srcSet" />
    </div>
</template>

<script>
    const images = require('glob-loader!./../images.pattern')
    export default {
      data () {
        return {
        }
      },
      computed: {
        wrapperStyle: function () {
          return {
            width: this.width + 'px',
            height: this.width * (this.imageObject.height / this.imageObject.width) + 'px'
          }
        },
        backdropStyle: function () {
          return {
            backgroundImage: 'url("' + this.imageObject.placeholder + '")',
            backgroundSize: 'cover'
          }
        },
        fullImagePath: function () {
          return './assets/images/' + this.src
        },
        imageObject: function () {
          return images[this.fullImagePath]
        }
      },
      created: function () {
      },
      props: {
        width: String,
        src: String
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
