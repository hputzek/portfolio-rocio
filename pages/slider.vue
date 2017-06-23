<template>
  <!-- You can find this swiper instance object in current compomemt by the "mySwiper"  -->
  <div v-swiper:verticalSwiper="verticalSwiperOptions">
    <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div v-swiper:horizontalSwiper="horizontalSwiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <div class="bg-img" v-bind:style="{ 'background-image': 'url(' + banner + ')'}"></div>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
    <div class="swiper-slide">Vertical Slide 2</div>
    <div class="swiper-slide">Vertical Slide 3</div>
    <div class="swiper-slide">Vertical Slide 4</div>
    <div class="swiper-slide">Vertical Slide 5</div>
    <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [
          'https://placeimg.com/640/480/nature',
          'https://placeimg.com/640/480/people',
          'https://placeimg.com/640/480/tech'
        ],
        horizontalSwiperOptions: {
          mousewheelControl: true,
          mousewheelForceToAxis: true,
          keyboardControl: true,
          autoplay: 5000,
          initialSlide: 1,
          direction: 'horizontal',
          loop: true,
          pagination: '.swiper-pagination',
          paginationElement: 'li',
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          },
          onTap: swiper => {
            console.log('onTap', swiper.realIndex)
          }
        },
        verticalSwiperOptions: {
          keyboardControl: true,
          mousewheelControl: true,
          mousewheelForceToAxis: true,
          pagination: '.swiper-pagination-v',
          paginationClickable: true,
          direction: 'vertical',
          spaceBetween: 50
        }
      }
    },
    mounted () {
      console.log('app init', this)
      setTimeout(() => {
        this.banners.push('https://placeimg.com/640/480/any')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper,
        'I will slideTo banners 3')
      this.horizontalSwiper.slideTo(3)
    }
  }
</script>


<style lang="scss" scoped>
  .swiper-wrapper {
    height: 100vh;
    width: 100vw;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
  .bg-img {
  	width: 100%;
	height: 100%;
	background-size: cover;
  }
</style>
