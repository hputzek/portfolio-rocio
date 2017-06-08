<template>
    <div v-bind:style="style">
        <img v-bind:src="responsiveImage.src" v-bind:srcSet="responsiveImage.srcSet" />
    </div>
</template>

<script>
    const leImage = require('!responsive-loader?sizes[]=100,sizes[]=200,sizes[]=300!~assets/images/demo.jpg')
    export default {
      data () {
        return {
          responsiveImage: leImage
        }
      },
      computed: {
        style: function () {
          return {
            height: this.responsiveImage.height + 'px',
            width: this.responsiveImage.width + 'px',
            backgroundSize: 'cover',
            backgroundImage: 'url("' + this.responsiveImage.placeholder + '")'
          }
        }
      }
    }
</script>

<style>
img {
    max-width: 100%;
}
</style>
