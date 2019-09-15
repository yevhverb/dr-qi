<template functional>
  <a class="contacts-item" :href="`tel:${props.item.phoneFull}`">
    <span class="contacts-item__icon" 
      v-html="props.item.icon">
    </span>
    <span class="contacts-item__phone">{{props.item.phone}}</span>
    <span class="contacts-item__app">{{props.item.app}}</span>
  </a>
</template>

<style lang="sass">
@import './ContactsItem'
</style>
