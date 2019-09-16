<template>
  <article class="catalog block" id="catalog">
    <div class="container">
      <h2 class="title">
        Каталог беспроводных зарядных устройств
        <span class="title_accent">Dr.Qi</span>
      </h2>
      <div class="catalog-grid">
        <div class="catalog-grid__col"
          v-for="item in catalog.items" :key="item.id">
          <app-catalog-item :item="item"/>
        </div>
      </div>

      <transition name="modal">
        <elem-modal v-if="modalOpen">
          <app-catalog-item-modal v-if="modalName === 'catalog-item'"/>
        </elem-modal>
      </transition>

    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';

import appCatalogItem from './CatalogItem';
import appCatalogItemModal from './CatalogItemModal';

export default {
  name: 'app-catalog',
  components: {
    appCatalogItem,
    appCatalogItemModal
  },
  computed: mapState(['catalog', 'modalOpen', 'modalName'])
}
</script>

<style lang="sass">
@import './Catalog'
</style>
