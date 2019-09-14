<template>
  <article class="catalog-item card">
    <span class="catalog-item__dscnt">{{-item.dscnt + '%'}}</span>
    <section class="catalog-item__img">
      <img class="img" src="@/assets/catalog-item.jpg" :alt="item.title">
    </section>
    <section class="catalog-item__info">
      <h3 class="catalog-item__title">{{item.title}}</h3>
      <span class="catalog-item__avail"
        :class="{'catalog-item__avail-no': !item.avail}">
        {{item.avail ? 'В наличии' : 'Нет в наличии'}}
      </span>
      <p class="catalog-item__descr">{{item.descr}}</p>
      <section class="catalog-item__colors">
        Доступные цвета:
        <span class="catalog-item__color"
          v-for="(color, i) in item.colors" :key="color + i"
          :style="{'background-color': color}">
        </span>
      </section>
      <section class="catalog-item__price">
        <span class="catalog-item__price-curr">{{Math.ceil(item.price * ((100 - item.dscnt) / 100)) + ' грн.'}}</span>
        <span class="catalog-item__price-full">{{item.price + ' грн.'}}</span>
      </section>
      <section class="catalog-item__btns">
        <button class="catalog-item__btn-buy btn btn-primary">Купить</button>
        <button class="catalog-item__btn-details btn">Подробнее о модели</button>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'app-catalog-item',
  props: ['item']
}
</script>

<style lang="sass">
@import './CatalogItem'
</style>
