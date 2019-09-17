<template functional>
  <article class="diff-item card">
    <section class="diff-item__icon">
      <div class="diff-item__icon-container">
        <img class="img" :src="props.item.image" :alt="props.item.title">
      </div>
    </section>
    <section class="diff-item__info">
      <h3 class="diff-item__title">{{props.item.title}}</h3>
      <p class="diff-item__text">{{props.item.text}}</p>
    </section>
  </article>
</template>

<style lang="sass">
@import './DiffItem'
</style>
