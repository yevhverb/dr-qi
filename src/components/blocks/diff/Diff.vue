<template>
  <article class="diff block">
    <div class="container">
      <h2 class="diff__title title">
        Основные отличия между зарядками 
        <span class="title_accent">Dr.Qi</span>
        и другими производителями
      </h2>
      <div class="diff-grid" v-if="mediaQuery('min', 2)">
        <div class="diff-grid__col"
          v-for="(item, i) in diff.items" :key="item.title + i">
          <app-diff-item :item="item"/>
        </div>
      </div>
      <swiper :options="swiperOptions" v-else>
        <swiperSlide v-for="(item, i) in diff.items" :key="item.title + i">
          <app-diff-item :item="item"/>
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev" v-if="mediaQuery('min', 5)">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="swiper-button-next" slot="button-next" v-if="mediaQuery('min', 5)">
          <i class="fas fa-chevron-right"></i>
        </div>
      </swiper>
      <section class="diff__certificate">
        <div class="diff__certificate-img">
          <img class="img" src="@/assets/diff-certificate.png" alt="certificate">
        </div>
        <span class="diff__certificate-descr">Все Аксессуары Dr.Qi стандартизированы и сертифицированы, что, в свою очередь позволяет избежать ряд проблем при их эксплуатации.</span>
      </section>
    </div>
  </article>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState, mapGetters } from 'vuex';

import appDiffItem from './DiffItem'

export default {
  name: 'app-diff',
  components: {
    appDiffItem,
    swiper,
    swiperSlide
  },
  data: () => ({
    swiperOptions: {
      speed: 450,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }
  }),
  computed: { 
    ...mapState(['diff']),
    ...mapGetters(['mediaQuery'])
  }
}
</script>

<style lang="sass">
@import './Diff'
</style>
