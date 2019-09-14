<template>
  <article class="faq block">
    <div class="container">
      <h2 class="faq__title title">Часто задаваемые вопросы</h2>
      <div class="faq-grid">
        <div class="faq-grid__col"
          v-for="item in faq.items" :key="item.title">
          <app-faq-item :item="item"/>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';

import appFaqItem from './FaqItem';

export default {
  name: 'app-faq',
  components: {
    appFaqItem
  },
  computed: mapState(['faq'])
}
</script>

<style lang="sass">
@import './Faq'
</style>
