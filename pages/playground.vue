<template>
    <div>
        <responsive width="300" src="uploads/demo.jpg"/>
    </div>
</template>

<script>
  const projectImages = require('assets/images/' + 'demo.jpg')
  import Responsive from '~components/ResponsiveImage.vue'
  export default {
    components: {
      Responsive
    },
    data () {
      return {
        testimage: projectImages
      }
    }
  }
</script>
