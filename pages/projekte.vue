<template>
  <!-- You can find this swiper instance object in current compomemt by the "mySwiper"  -->
  <div v-swiper:verticalSwiper="verticalSwiperOptions">
    <div class="swiper-wrapper vertical">
      <template v-for="(project, projectIndex) in projects">
        <div class="swiper-slide" :data-history="convertToSlug(project.name)">
          <div v-swiper:horizontalSlider="horizontalSwiperOptions('.pagination-' + convertToSlug(project.name))">
            <div class="swiper-wrapper">
              <template  v-for="(banner, bannerIndex) in project.banners">
                <div class="swiper-slide" :data-hash="bannerIndex + 1">
                  <div class="bg-img" v-bind:style="{ 'background-image': 'url(' + banner + ')'}"></div>
                  <h1>Whow, great stuff</h1>
                </div>
              </template>
            </div>
            <div class="swiper-pagination" :class="'pagination-' + convertToSlug(project.name)" slot="pagination" :key="convertToSlug(project.name)"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        projects: [
          {
            name: 'Projekt 1',
            banners: [
              'https://placeimg.com/640/480/nature',
              'https://placeimg.com/640/480/people',
              'https://placeimg.com/640/480/tech'
            ]
          },
          {
            name: 'Projekt 2',
            banners: [
              'https://placeimg.com/640/480/nature',
              'https://placeimg.com/640/480/people',
              'https://placeimg.com/640/480/tech'
            ]
          },
          {
            name: 'Projekt 3',
            banners: [
              'https://placeimg.com/640/480/nature',
              'https://placeimg.com/640/480/people',
              'https://placeimg.com/640/480/tech'
            ]
          },
          {
            name: 'Projekt 4',
            banners: [
              'https://placeimg.com/640/480/nature',
              'https://placeimg.com/640/480/people',
              'https://placeimg.com/640/480/tech'
            ]
          }
        ],
        generalSwiperOptions: {
          mousewheelControl: true,
          mousewheelForceToAxis: true,
          keyboardControl: true,
          autoplay: false,
          initialSlide: 1,
          loop: true,
          grabCursor: true
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
    },
    methods: {
      horizontalSwiperOptions: function (paginationClass) {
        return Object.assign({}, this.generalSwiperOptions, {
          direction: 'horizontal',
          pagination: paginationClass,
          paginationType: 'fraction',
          hashnav: true,
          hashnavWatchState: true
        })
      },
      convertToSlug: function (Text) {
        console.log(Text)
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
    .swiper-slide {
      position: relative;
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
</style>
