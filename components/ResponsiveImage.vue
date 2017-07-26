<template>
    <div class="image-wrap" v-bind:style="wrapperStyle">
        <div class="backdrop" v-bind:style="backdropStyle">
        </div>
        <img v-bind:src="src.src" v-bind:srcSet="src.srcSet" />
    </div>
</template>

<script>
    const leImage = require('assets/images/' + 'demo.jpg')
    export default {
      data () {
        return {
        }
      },
      computed: {
        wrapperStyle: function () {
          return {
            width: this.width,
            height: this.width * (images[this.src].height / images[this.src].width) + 'px'
          }
        },
        backdropStyle: function () {
          return {
            backgroundImage: 'url("' + images[this.src].placeholder + '")',
            backgroundSize: 'cover'
          }
        }
      },
      created: function () {
      },
      props: {
        width: Number,
        src: Object
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
