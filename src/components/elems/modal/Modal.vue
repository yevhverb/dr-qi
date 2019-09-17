<template>
  <div class="modal">
    <transition name="modal-back" appear>
      <div class="modal-back" v-if="modalOpen"></div>
    </transition>
    <transition name="modal-front" appear>
      <div class="modal-front" v-if="modalOpen" @click="modalClose()">
        <div class="modal-content">
          <slot/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'elem-modal',
  computed: mapState(['modalOpen']),
  methods: {
    ...mapMutations(['SHOW_MODAL']),
    modalClose() {
      const classList = event.target.classList;
      if (classList.contains('modal-front') || classList.contains('fas')) this.SHOW_MODAL({open: false, name: ''});
    }
  },
  beforeCreate() {
    document.body.setAttribute('style', '');
    document.body.classList.add('modal-lock');
    document.querySelector('.header-nav').classList.add('modal-lock');

  },
  destroyed() {
    document.body.classList.remove('modal-lock');
    document.querySelector('.header-nav').classList.remove('modal-lock');
  }
}
</script>

<style lang="sass">
@import './Modal'
</style>
