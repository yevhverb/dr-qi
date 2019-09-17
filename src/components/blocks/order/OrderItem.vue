<template>
  <article class="order-item card">
    <section class="order-item__img">
      <img class="img" :src="item.image" :alt="item.title">
    </section>
    <section class="order-item__info">
      <h3 class="order-item__title">
        <span class="title_accent">{{i + 1 + '. '}}</span>
        {{item.title}}
      </h3>
      <p class="order-item__descr">{{item.descr}}</p>
      <button class="order-item__buy btn btn-primary"
        v-if="i === 0"
        @click="SHOW_MODAL({open: true, name: 'order', data: {}})">
        Оставить заявку
      </button>
    </section>
  </article>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'app-order-item',
  props: ['item', 'i'],
  methods: mapMutations(['SHOW_MODAL'])
}
</script>

<style lang="sass">
@import './OrderItem'
</style>
