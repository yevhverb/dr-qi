<template>
  <form class="catalog-item-order"
    :class="{'catalog-item-order_inner': inner}" 
    @submit.prevent="showMessage()">
    <section class="catalog-item-order__info">
      <h3 class="catalog-item-order__title">{{'Купить ' + item.title}}</h3>
      <p class="catalog-item-order__text">Введите своё имя и телефон, менеджер перезвонит чтобы подтвердить заказ</p>
    </section>
    <section class="catalog-item-order__form">
      <div class="catalog-item-order__input input input-person">
        <input type="text" placeholder="Введите Ваше имя">
      </div>
      <div class="catalog-item-order__input input input-phone">
        <input type="text" placeholder="Ваш номер телефона">
      </div>
      <button class="catalog-item-order__btn btn btn-primary" type="submit">
        Купить эту модель
      </button>
    </section>
    <transition name="modal">
      <section class="catalog-item-order__message" v-if="messageOpen">
        <p>Спасибо Ваш заказ НЕ принят и наш менеджер с Вами никогда НЕ свяжется...</p>
      </section>
    </transition>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'catalog-item-order',
  props: ['inner', 'item'],
  data: () => ({
    messageOpen: false
  }),
  methods: {
    showMessage() {
      this.messageOpen = true;
      setTimeout(() => this.messageOpen = false, 3500);
    }
  }
}
</script>

<style lang="sass">
@import './CatalogItemOrder'
</style>
