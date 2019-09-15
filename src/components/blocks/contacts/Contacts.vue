<template>
  <article class="contacts block deco">
    <div class="container">
      <h2 class="contacts__title title title_white">Есть дополнительные вопросы?</h2>
      <p class="contacts__descr descr">Свяжитесь с нами удобным для Вас способом:</p>
      <div class="contacts-grid">
        <div class="contacts-grid__col"
          v-for="(item, i) in contacts.items" :key="item.app + i">
          <app-contacts-item :item="item"/>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';

import appContactsItem from './ContactsItem';

export default {
  name: 'app-contacts',
  components: {
    appContactsItem
  },
  computed: mapState(['contacts'])
}
</script>

<style lang="sass">
@import './Contacts'
</style>
