<template>
  <transition name="header-nav">
    <nav class="header-nav" v-show="mediaQuery('min', 2) || navOpen">
      <div class="container">
        <scrollactive class="header-nav__links"
          active-class="header-nav__link_active"
          :offset="5"
          :scroll-offset="mediaQuery('max', 2) ? mediaQuery('min', 4) ? 90 : 75 : 0">
          <a class="header-nav__link scrollactive-item" href="#preview"
            @click="SHOW_NAV(!navOpen)">
            Главная
          </a>
          <a class="header-nav__link scrollactive-item" href="#catalog"
            @click="SHOW_NAV(!navOpen)"> 
            Каталог
          </a>
          <a class="header-nav__link scrollactive-item" href="#reviews"
            @click="SHOW_NAV(!navOpen)"> 
            Отзывы
          </a>
          <a class="header-nav__link scrollactive-item" href="#order"
            @click="SHOW_NAV(!navOpen)"> 
            Как сделать заказ
          </a>
          <a class="header-nav__link scrollactive-item" href="#photos"
            @click="SHOW_NAV(!navOpen)"> 
            Фотографии покупателей
          </a>
          <a class="header-nav__link scrollactive-item" href="#contacts"
            @click="SHOW_NAV(!navOpen)"> 
            Контакты
          </a> 
        </scrollactive> 
      </div>
    </nav>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'app-hader-nav',
  computed: {
    ...mapState(['navOpen']),
    ...mapGetters(['mediaQuery'])
  },
  methods: {
    ...mapMutations(['SHOW_NAV'])
  }
}
</script>

<style lang="sass">
@import './HeaderNav'
</style>
