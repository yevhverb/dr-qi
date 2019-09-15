<template>
  <app-root>
    <main>
      <app-catalog/>
      <app-diff/>
      <app-reviews/>
      <app-order/>
      <app-photos/>
      <app-faq/>
      <app-contacts/>
    </main>
    <app-footer/>
  </app-root>
</template>

<script>
import appRoot from '@/components/Root'
import appCatalog from '@/components/blocks/catalog/Catalog'
import appDiff from '@/components/blocks/diff/Diff'
import appReviews from '@/components/blocks/reviews/Reviews'
import appOrder from '@/components/blocks/order/Order'
import appPhotos from '@/components/blocks/photos/Photos'
import appFaq from '@/components/blocks/faq/Faq'
import appContacts from '@/components/blocks/contacts/Contacts'
import appFooter from '@/components/blocks/footer/Footer'

export default {
  name: 'app',
  components: {
    appRoot,
    appCatalog,
    appDiff,
    appReviews,
    appOrder,
    appPhotos,
    appFaq,
    appContacts,
    appFooter
  }
}
</script>
