<template>
  <article class="faq-item card">
    <h3 class="faq-item__title"
      :class="{'faq-item__title_open': itemOpen}"
      @click="itemOpen = !itemOpen">
      {{item.title}}
    </h3>
    <transition name="faq-item-text">
      <section class="faq-item__text" v-if="itemOpen">
        <p>{{item.text}}</p>
      </section>
    </transition>
  </article>
</template>

<script>
export default {
  name: 'app-faq-item',
  props: ['item'],
  data: () => ({
    itemOpen: false
  })
}
</script>

<style lang="sass">
@import './FaqItem'
</style>
