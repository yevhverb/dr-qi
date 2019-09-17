<template>
  <article class="header-info">
    <div class="container">
      <div class="header-info__info">
        <article class="header-info__logo logo">
          <div class="logo__img">
            <img class="img" src="@/assets/logo.png" alt="logo">
          </div>
          <span class="logo__descr" v-if="mediaQuery('min', 2)">Интернет-магазин гаджетов</span>
        </article>
        <article class="header-info__contacts" v-if="mediaQuery('min', 5)">
          <ul class="header-info__messangers" v-if="mediaQuery('min', 2)">
            <li>
              <a class="header-info__messanger" href="#">
                <i class="fab fa-telegram-plane"></i>
              </a>
            </li>
            <li>
              <a class="header-info__messanger" href="#">
                <i class="fab fa-viber"></i>
              </a>
            </li>
            <li>
              <a class="header-info__messanger" href="#">
                <i class="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
          <section class="header-info__phone">
            <a class="header-info__phone-number" href="tel:+380951234567">(095) 123-45-67</a>
            <span class="header-info__phone-time">Ежедневно с 10.00 до 20.00</span>
          </section>
        </article>
        <section class="header-info__actions" v-if="mediaQuery('max', 2)">
          <button class="header-info__actions-btn btn" type="button"
            @click="SHOW_NAV(!navOpen)">
            <transition name="header-nav-btn">
              <i class="fas fa-times" v-if="navOpen"></i>
            </transition>
            <transition name="header-nav-btn">
              <i class="fas fa-bars" v-if="!navOpen"></i>
            </transition>
          </button>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  name: 'app-header-info',
  computed: {
    ...mapState(['navOpen']),
    ...mapGetters(['mediaQuery'])
  },
  methods: mapMutations(['SHOW_NAV'])
}
</script>

<style lang="sass">
@import './HeaderInfo'
</style>
