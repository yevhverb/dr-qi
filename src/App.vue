<template>
  <app-root>
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
    <transition name="modal">
      <elem-modal v-if="modalOpen"/>
    </transition>
  </app-root>
</template>

<script>
import { mapState } from 'vuex';

import appRoot from '@/components/Root'
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

import elemModal from '@/components/elems/modal/Modal'

export default {
  name: 'app',
  components: {
    appRoot,
    appPreview,
    appCatalog,
    appDiff,
    appAbout,
    appReviews,
    appOrder,
    appPhotos,
    appFaq,
    appContacts,
    appFooter,
    elemModal
  },
  computed: mapState(['modalOpen'])
}
</script>
