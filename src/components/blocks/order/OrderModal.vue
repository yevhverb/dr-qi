<template>
  <form class="order-modal card" 
    @submit.prevent="showMessage()">
    <section class="order-modal__info">
      <h3 class="order-modal__title">Оставить заявку</h3>
      <div class="order-modal__text">Введите своё имя и телефон, менеджер перезвонит и проконсультирует Вас</div>
    </section>
    <section class="order-modal__form">
      <div class="order-modal__input input input-person">
        <input type="text" placeholder="Введите Ваше имя">
      </div>
      <div class="order-modal__input input input-phone">
        <input type="text" placeholder="Ваш номер телефона">
      </div>
      <button class="order-modal__btn btn btn-primary" type="submit">
        Оставить заявку
      </button>
    </section>
    <transition name="modal">
      <section class="order-modal__message" v-if="messageOpen">
        <p>Спасибо! Наш менеджер с Вами НЕ свяжется...</p>
      </section>
    </transition>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'app-order-modal',
  data: () => ({
    messageOpen: false
  }),
  methods: {
    ...mapMutations(['SHOW_MODAL']),
    showMessage() {
      this.messageOpen = true;
      setTimeout(() => {
        this.messageOpen = false;
        this.SHOW_MODAL({open: false, name: '', data: {}});
      }, 2250)
    }
  }
}
</script>

<style lang="sass">
@import './OrderModal'
</style>
