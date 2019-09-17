<template>
  <header class="header">
    <div class="container">
      <app-header-nav/>
      <app-header-info/>
    </div>
  </header>
</template>

<script>
import appHeaderNav from './HeaderNav';
import appHeaderInfo from './HeaderInfo';

export default {
  name: 'app-header',
  components: {
    appHeaderNav,
    appHeaderInfo
  }
}
</script>

<style lang="sass">
@import './Header'
</style>
