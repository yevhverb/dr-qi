<template>
  <article class="reviews block" id="reviews">
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
      <button class="reviews__send btn btn-secondary"
        @click="SHOW_MODAL({open: true, name: 'reviews', data: {}})">Оставить отзыв</button>
      
      <transition name="modal">
        <elem-modal v-if="modalOpen && modalName === 'reviews'">
          <div :class="{'container': mediaQuery('max', 4)}">
            <app-reviews-modal/>
          </div>
        </elem-modal>
      </transition>

    </div>
  </article>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapState, mapGetters, mapMutations } from 'vuex';

import appReviewsItem from './ReviewsItem';
import appReviewsModal from './ReviewsModal';

export default {
  name: 'app-reviews',
  components: {
    appReviewsItem,
    appReviewsModal,
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
    ...mapState(['reviews', 'modalOpen', 'modalName']),
    ...mapGetters(['mediaQuery'])
  },
  methods: mapMutations(['SHOW_MODAL'])
}
</script>

<style lang="sass">
@import './Reviews'
</style>
