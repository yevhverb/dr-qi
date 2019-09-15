<template functional>
  <article class="preview-item card">
    <section class="preview-item__img">
      <img class="img" src="@/assets/preview-item.jpg" :alt="props.item.title">
    </section>
    <section class="preview-item__info">
      <h3 class="preview-item__title">{{props.item.title}}</h3>
      <p class="preview-item__text">{{props.item.text}}</p>
    </section>
  </article>
</template>

<style lang="sass">
@import './PreviewItem'
</style>
