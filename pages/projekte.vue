<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:verticalSwiper="verticalSwiperOptions">
    <div class="swiper-wrapper vertical">
      <ProjectSlides 
              v-for="(project, projectIndex) in projects" 
              :key="'project-' + projectIndex" 
              :project="project"
              :generalSwiperOptions="generalSwiperOptions"
      ></ProjectSlides>
    </div>
  </div>
</template>

<script>
  import ProjectSlides from '~components/ProjectSlides.vue'
  export default {
    components: {
      ProjectSlides
    },
    data () {
      return {
        projects: [
          {
            name: 'Projekt 1',
            slides: [
              {
                elements: [
                  {
                    type: 'headline des ersten Slides',
                    content: 'This is some headline',
                    positionLeftInPercent: 10,
                    positionTopInPercent: 50,
                    zIndex: 1
                  },
                  {
                    type: 'headline',
                    content: 'This is another headline',
                    positionLeftInPercent: 30,
                    positionTopInPercent: 10,
                    zIndex: 1
                  }
                ]
              },
              {
                elements: [
                  {
                    type: 'headline',
                    content: 'This is some headline',
                    positionLeftInPercent: 40,
                    positionTopInPercent: 30,
                    zIndex: 1
                  }
                ]
              }
            ]
          },
          {
            name: 'Projekt 2',
            slides: [
              {
                elements: [
                  {
                    type: 'headline',
                    content: 'This is some headline',
                    positionLeftInPercent: 10,
                    positionTopInPercent: 10,
                    zIndex: 1
                  }
                ]
              },
              {
                elements: [
                  {
                    type: 'headline',
                    content: 'This is some headline',
                    positionLeftInPercent: 40,
                    positionTopInPercent: 50,
                    zIndex: 1
                  }
                ]
              }
            ]
          }
        ],
        generalSwiperOptions: {
          mousewheelControl: true,
          mousewheelForceToAxis: true,
          keyboardControl: true,
          autoplay: false,
          initialSlide: 0,
          loop: true,
          grabCursor: true,
          notNextTick: true
        }
      }
    },
    computed: {
      verticalSwiperOptions: function () {
        return Object.assign({}, this.generalSwiperOptions, {
          direction: 'vertical',
          mousewheelInvert: true,
          history: 'projekte'
        })
      }
    },
    mounted () {
      let currentUrl = document.location.href
      console.log(currentUrl)
      if (currentUrl.endsWith('projekte')) {
        // history.replaceState('', '', currentUrl + '/' + this.convertToSlug(this.projects[0].name) + '#1')
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
</style>

<style lang="scss">
  @media screen and (min-width: 25em){
    html {
      font-size: calc( 16px + (22 - 16) * (100vw - 400px) / (800 - 400) );
    }
  }
</style>
