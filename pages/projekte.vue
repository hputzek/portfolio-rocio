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
                headline: 'This is slider number one',
                images: [
                  'https://placeimg.com/640/480/nature',
                  'https://placeimg.com/640/480/people',
                  'https://placeimg.com/640/480/tech'
                ]
              },
              {
                headline: 'headline number two'
              }
            ]
          },
          {
            name: 'Projekt 2',
            slides: [
              {
                headline: 'Slide 1'
              },
              {
                headline: 'Slide 2'
              },
              {
                headline: 'Slide 3'
              }
            ]
          },
          {
            name: 'Projekt 3',
            slides: [
              {
                headline: 'Slide 1'
              },
              {
                headline: 'Slide 2'
              },
              {
                headline: 'Slide 3'
              }
            ]
          },
          {
            name: 'Projekt 4',
            slides: [
              {
                headline: 'Slide 1'
              },
              {
                headline: 'Slide 2'
              },
              {
                headline: 'Slide 3'
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
