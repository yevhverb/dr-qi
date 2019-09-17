<template>
  <app-root>
    <app-header/>
    <main>
      <app-preview/>
      <app-catalog/>
      <app-diff/>
      <app-about/>
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
import appHeader from '@/components/blocks/header/Header'
import appPreview from '@/components/blocks/preview/Preview'
import appCatalog from '@/components/blocks/catalog/Catalog'
import appDiff from '@/components/blocks/diff/Diff'
import appAbout from '@/components/blocks/about/About'
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
    appHeader,
    appPreview,
    appCatalog,
    appDiff,
    appAbout,
    appReviews,
    appOrder,
    appPhotos,
    appFaq,
    appContacts,
    appFooter
  }
}
</script>
