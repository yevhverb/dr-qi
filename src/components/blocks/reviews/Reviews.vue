<template>
  <article class="reviews block">
    <div class="container">
      <h2 class="reviews__title title">Отзывы покупателей</h2>
      <swiper :options="swiperOptions">
        <swiperSlide 
          v-for="(item, i) in reviews.items" :key="item.name + i">
          <app-reviews-item
            :item="item"/>
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev" 
          v-show="mediaQuery('min', 5)">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="swiper-button-next" slot="button-next" 
          v-show="mediaQuery('min', 5)">
          <i class="fas fa-chevron-right"></i>
        </div>
      </swiper>
      <button class="reviews__send btn btn-secondary">Оставить отзыв</button>
    </div>
  </article>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapState, mapGetters } from 'vuex';

import appReviewsItem from './ReviewsItem';

export default {
  name: 'app-reviews',
  components: {
    appReviewsItem,
    swiper, 
    swiperSlide
  },
  data: () => ({
    swiperOptions: {
      autoHeight: true,
      speed: 450,
      spaceBetween: 15,
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        980: {
          spaceBetween: 0,
          slidesPerView: 1
        }
      }
    }
  }),
  computed: {
    ...mapState(['reviews']),
    ...mapGetters(['mediaQuery'])
  }
}
</script>

<style lang="sass">
@import './Reviews'
</style>
