<template functional>
  <article class="reviews-item  card">
    <section class="reviews-item__photo">
      <div class="reviews-item__photo-container">
        <img class="img" :src="props.item.photo" :alt="props.item.name">
      </div>
    </section>
    <section class="reviews-item__info">
      <h3 class="reviews-item__name">{{props.item.name}}</h3>
      <a class="reviews-item__original" :href="props.item.original">
        Смотреть оригинал отзыва
      </a>
      <span class="reviews-item__order">{{'Заказaл: ' + props.item.order}}</span>
      <p class="reviews-item__text">{{props.item.text}}</p>
    </section>
  </article>
</template>

<style lang="sass">
@import './ReviewsItem'
</style>
