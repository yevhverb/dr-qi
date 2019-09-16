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
    ...mapMutations(['modalShow']),
    modalClose() {
      const classList = event.target.classList;
      if (classList.contains('modal-front') || classList.contains('modal-content')) this.modalShow({open: false, name: ''});
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
