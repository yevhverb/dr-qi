<template>
  <article class="preview block" id="preview">
    <div class="container">
      <div class="preview-grid">
        <div class="preview-grid__col">
          <!-- <elem-btn-video/> -->
          <section class="preview__img">
            <img class="img" src="@/assets/preview-prod.png" alt="product">
          </section>
        </div>
        <div class="preview-grid__col">
          <h1 class="preview__title">
            Беспроводные зарядки для смартфона
            <span class="title_accent">Dr.Qi</span>
          </h1>
          <p class="preview__descr">Позволят держать Ваш девайс всегда в сети и быть на связи</p>
          <section class="preview__benefits">
            <article class="preview__benefit">
              <section class="preview__benefit-icon">
                <i class="fas fa-mobile-alt"></i>
              </section>
              <section class="preview__benefit-text">
                <p>Корпус выполнен из пластика с элементами ТПУ, которые не позволяют вашему устройству скользить во время зарядки</p>  
              </section> 
            </article>
            <article class="preview__benefit">
              <section class="preview__benefit-icon">
                <i class="fas fa-box"></i>
              </section>
              <section class="preview__benefit-text">
                <p>Без предоплаты. Оплата при получении. Доставка по всей Украине в течение 1-2 дней</p>  
              </section> 
            </article>
          </section>
          <section class="preview__actions">
            <a class="preview__actions-btn btn btn-primary" href="#catalog" 
              v-scroll-to="{el: '#catalog', offset: mediaQuery('max', 2) ? -75 : 0}">
              Перейти в каталог
            </a>
            <span class="preview__actions-group">
              <a class="preview__actions-link" href="#">
                <i class="fab fa-apple"></i>
              </a>
              <a class="preview__actions-link" href="#">
                <i class="fab fa-android"></i>
              </a>
            </span>
          </section>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="preview-items-grid" v-if="mediaQuery('min', 1)">
        <div class="preview-items-grid__col"
          v-for="(item, i) in preview.items" :key="item.title + i">
          <app-preview-item :item="item"/>
        </div>
      </div>
      <swiper :options="swiperOptions" v-else>
        <swiper-slide v-for="(item, i) in preview.items" :key="item.title + i">
          <app-preview-item :item="item"/>
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
  </article>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapState, mapGetters } from 'vuex';

import appPreviewItem from './PreviewItem';

export default {
  name: 'app-preview',
  components: {
    appPreviewItem,
    swiper,
    swiperSlide
  },
  data: () => ({
    swiperOptions: {
      speed: 450,
      autoHeight: true,
      slidesPerView: 2,
      spaceBetween: 15,
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
    ...mapState(['preview']),
    ...mapGetters(['mediaQuery'])
  }
}
</script>

<style lang="sass">
@import './Preview'
</style>
