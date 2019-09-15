<template functional>
  <article class="about-item"
    :class="{'about-item_reverse': props.reverse}">
    <section class="about-item__icon" v-html="props.item.icon"></section>
    <section class="about-item__info">
      <h3 class="about-item__title">{{props.item.title}}</h3>
      <p class="about-item__text">{{props.item.text}}</p>
    </section>
  </article>
</template>

<style lang="sass">
@import './AboutItem'
</style>
