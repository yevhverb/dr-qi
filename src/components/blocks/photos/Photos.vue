<template>
  <article class="photos block">
    <div class="container-fluid">
      <h2 class="photos__title title">Фото наших покупателей</h2>
      <p class="photos__descr descr">Ежедневно мы отправляем заказы по всей Украине и наши покупатели делятся своими фото:</p>
      <div class="photos-grid">
        <div class="photos-grid__col" 
          v-for="(item, i) in photos.items" :key="i">
          <div class="photos-item">
            <img class="img" src="@/assets/photos-item.jpg">
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app-photos',
  computed: mapState(['photos']) 
}
</script>

<style lang="sass">
@import './Photos'
</style>
