<template>
  <div class="container">
    <article class="catalog-item-modal card">
      <span class="catalog-item__dscnt">{{-item.dscnt + '%'}}</span>
      <div class="catalog-item-modal-grid">

        <div class="catalog-item-modal-grid__col">
          <section class="catalog-item-modal__img">
            <img class="img" src="@/assets/catalog-item.jpg" :alt="item.title">
          </section>
          <section class="catalog-item-modal__benefits">
            <div class="catalog-item-modal__benefit">
              <span class="catalog-item-modal__benefit-icon">
                <i class="fas fa-truck"></i>
              </span>
              <span class="catalog-item-modal__benefit-text">Без предоплаты. Оплата при получении. Доставка по всей Украине в течение 1-2 дней (Новая почта, Укрпошта, курьером)</span>
            </div>
            <div class="catalog-item-modal__benefit">
              <span class="catalog-item-modal__benefit-icon">
                <i class="fas fa-box"></i>
              </span>
              <span class="catalog-item-modal__benefit-text">Гарантия возврата товара в течение 14 дней</span>
            </div>
          </section>
        </div>

        <div class="catalog-item-modal-grid__col">
          <h3 class="catalog-item__title">{{item.title}}</h3>
          <span class="catalog-item__avail"
            :class="{'catalog-item__avail-no': !item.avail}">
            {{item.avail ? 'В наличии' : 'Нет в наличии'}}
          </span>
          <section class="catalog-item__price">
            <span class="catalog-item__price-curr">
              {{Math.ceil(item.price * ((100 - item.dscnt) / 100)) + ' грн.'}}
            </span>
            <span class="catalog-item__price-full">{{item.price + ' грн.'}}</span>
          </section>
          <section class="catalog-item__colors">
            Доступные цвета:
            <span class="catalog-item__color"
              v-for="(color, i) in item.colors" :key="color + i"
              :style="{'background-color': color}">
            </span>
          </section>
          <p class="catalog-item__descr">{{item.descr}}</p>
          <section class="catalog-item-modal__specs">
            <h4 class="catalog-item-modal__specs-title">Характеристики</h4>
            <div class="catalog-item-modal__spec"
              v-for="(spec, i) in item.specs" :key="i">
              <span class="catalog-item-modal__spec-title">{{spec.title}}</span>
              <span class="catalog-item-modal__spec-text">{{spec.text}}</span>
            </div>
          </section>
        </div>

      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app-catalog-item-modal',
  computed: mapState({
    item: state => state.modalData
  })
}
</script>

<style lang="sass">
@import './CatalogItemModal'
</style>