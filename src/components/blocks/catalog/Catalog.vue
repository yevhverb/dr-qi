<template>
  <article class="catalog block" id="catalog">
    <div class="container">
      <h2 class="title">
        Каталог беспроводных зарядных устройств
        <span class="title_accent">Dr.Qi</span>
      </h2>
      <div class="catalog-grid">
        <div class="catalog-grid__col" :style="{'display': catalogFullOpen ? 'block' : ''}"
          v-for="item in catalog.items" :key="item.id">
          <app-catalog-item :item="item"/>
        </div>
      </div>

      <button class="catalog__btn-more btn btn-secondary"
        v-if="mediaQuery('max', 3) && !catalogFullOpen"
        @click="catalogFullOpen = true">
        {{'Показать еще 4 устройства'}}
      </button>

      <transition name="modal">
        <elem-modal v-if="modalOpen && modalName === 'catalog-item'">
          <app-catalog-item-modal/>
        </elem-modal>
      </transition>

    </div>
  </article>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import appCatalogItem from './CatalogItem';
import appCatalogItemModal from './CatalogItemModal';

export default {
  name: 'app-catalog',
  data: () => ({
    catalogFullOpen: false
  }),
  components: {
    appCatalogItem,
    appCatalogItemModal
  },
  computed: {
    ...mapState({
      catalog: 'catalog', 
      modalOpen: 'modalOpen', 
      modalName: 'modalName',
      mediaWidth: state => state.media.width
    }),
    ...mapGetters(['mediaQuery'])
  },
  watch: {
    mediaWidth(val) {
      val < 768 ? this.catalogFullOpen = false : null
    }
  }
}
</script>

<style lang="sass">
@import './Catalog'
</style>
