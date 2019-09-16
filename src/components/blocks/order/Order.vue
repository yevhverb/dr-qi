<template>
  <article class="order block deco">
    <div class="container">
      <h2 class="order__title title title_white">Заказать беспроводную зарядку легко</h2>
      <section class="order__benefits">
        <div class="order__benefit">
          <span class="order__benefit-icon">
            <i class="fas fa-truck"></i>
          </span>
          <span class="order__benefit-descr">Без предоплаты. Оплата при получении. Доставка по всей Украине в течение 1-2 дней (Новая почта, Укрпошта, курьером)</span>
        </div>
        <div class="order__benefit">
          <span class="order__benefit-icon">
            <i class="fas fa-box"></i>
          </span>
          <span class="order__benefit-descr">Гарантия возврата товара в течение 14 дней</span>
        </div>
      </section>
      <div class="order-grid" v-if="mediaQuery('min', 1)">
        <div class="order-grid__col"
          v-for="(item, i) in order.items" :key="item.title + i">
            <app-order-item :item="item" :i="i"/>
        </div>
      </div>
      <swiper :options="swiperOptions" v-else>
        <swiperSlide
          v-for="(item, i) in order.items" :key="item.title + i">
          <app-order-item :item="item" :i="i"/>
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
      <transition name="modal">
        <elem-modal v-if="modalOpen && modalName === 'order'">
          <app-order-modal/>
        </elem-modal>
      </transition>
    </div>
  </article>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'; 
import { mapState, mapGetters } from 'vuex';

import appOrderItem from './OrderItem';
import appOrderModal from './OrderModal';

export default {
  name: 'app-order',
  components: {
    appOrderItem,
    appOrderModal,
    swiper,
    swiperSlide
  },
  data: () => ({
    swiperOptions: {
      autoHeight: true,
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
          spaceBetween: 15,
        },
        768: {
          spaceBetween: 0,
          slidesPerView: 1
        }
      }
    }
  }),
  computed: {
    ...mapState(['order', 'modalOpen', 'modalName']),
    ...mapGetters(['mediaQuery'])
  }
}
</script>

<style lang="sass">
@import './Order'
</style>
