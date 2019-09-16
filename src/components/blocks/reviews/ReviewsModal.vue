<template>
  <form class="review-modal card" 
    @submit.prevent="showMessage()">
    <section class="review-modal__info">
      <h3 class="review-modal__title">Ваш отзыв</h3>
      <p class="review-modal__text">Здесь вы можите оставить свой отзыв о нашей продукции...</p>
    </section>
    <section class="review-modal__form">
      <div class="review-modal__input input input-person">
        <input type="text" placeholder="Введите ваше имя">
      </div>
      <div class="review-modal__input input input-phone">
        <input type="text" placeholder="Ваш номер телефона">
      </div>
      <div class="review-modal__input input">
        <textarea placeholder="Ваш отзыв..."></textarea>
      </div>
      <button class="review-modal__btn btn btn-primary" type="submit">
        Оставить отзыв
      </button>
    </section>
    <transition name="modal">
      <section class="review-modal__message" v-if="messageOpen">
        <p>Спасибо за Ваш отзыв...</p>
      </section>
    </transition>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'app-reviews-modal',
  data: () => ({
    messageOpen: false
  }),
  computed: mapGetters(['mediaQuery']),
  methods: {
    ...mapMutations(['SHOW_MODAL']),
    showMessage() {
      this.messageOpen = true;
      setTimeout(() => {
        this.messageOpen = false;
        this.SHOW_MODAL({open: false, name: '', data: {}})
      }, 2000);
    }
  }
}
</script>

<style lang="sass">
@import './ReviewsModal'
</style>
