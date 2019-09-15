<template>
  <div class="modal">
    <transition name="modal-back" appear>
      <div class="modal-back" v-if="modalOpen"></div>
    </transition>
    <transition name="modal-front" appear>
      <div class="modal-front" 
        v-if="modalOpen"
        @click="modalClose()">
        <div class="modal-content">
          <app-catalog-item-modal v-if="modalName === 'catalog-item'" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import appCatalogItemModal from '@/components/blocks/catalog/CatalogItemModal'

export default {
  name: 'elem-modal',
  components: {
    appCatalogItemModal
  },
  computed: mapState(['modalOpen', 'modalName']),
  methods: {
    ...mapMutations(['modalShow']),
    modalClose() {
      if (event.target.classList.contains('modal-front')) this.modalShow({open: false, name: ''});
    }
  },
  beforeCreate() {
    document.body.classList.add('modal-lock');
  },
  destroyed() {
    document.body.classList.remove('modal-lock');
  }
}
</script>

<style lang="sass">
@import './Modal'
</style>
