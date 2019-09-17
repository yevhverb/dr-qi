<template>
  <article class="about block deco">
    <div class="container">
      <h2 class="about__title title">
        Устройства <span class="title_accent">Dr.Qi</span> это
      </h2>
      <div class="about-grid">
        <div class="about-grid__col" v-if="mediaQuery('min', 1)">
          <app-about-item :item="about.items[0]" :reverse="true"/>
          <app-about-item :item="about.items[2]" :reverse="true"/>
        </div>

        <div class="about-grid__col" v-else>
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(item, i) in about.items" :key="item.title + i">
              <app-about-item :item="item"/>
            </swiper-slide>
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
        </div>

        <div class="about-grid__col">
          <article class="about__brand">
            <section class="about__brand-icon circle">
              <img class="img" src="img/logo-lg.png" alt="logo-lg">
            </section>
            <!-- <elem-video-btn/> -->
          </article>
        </div>
        
        <div class="about-grid__col" v-if="mediaQuery('min', 1)">
          <app-about-item :item="about.items[1]"/>
          <app-about-item :item="about.items[3]"/>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapState, mapGetters } from 'vuex';

import appAboutItem from './AboutItem';

export default {
  name: 'app-about',
  components: {
    appAboutItem,
    swiper,
    swiperSlide
  },
  data: () => ({
    swiperOptions: {
      speed: 450,
      slidesPerView: 2,
      autoHeight: true,
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
          slidesPerView: 1
        }
      }
    }
  }),
  computed: {
    ...mapState(['about']),
    ...mapGetters(['mediaQuery'])
  }
}
</script>

<style lang="sass">
@import './About'
</style>
