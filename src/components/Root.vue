<template>
  <div id="app">
    <slot/>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { mapMutations, mapState } from 'vuex';

export default {
  name: 'app-root',
  methods: mapMutations(['SUBS_WINDOW_WIDTH']),
  created() {
    this.SUBS_WINDOW_WIDTH();
  }
}
</script>

<style lang="sass">
@import './Root'
</style>
