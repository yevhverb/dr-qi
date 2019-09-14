<template>
  <app-root>
    <main>
      <app-catalog/>
      <app-diff/>
      <app-reviews/>
      <app-faq/>
    </main>
  </app-root>
</template>

<script>
import appRoot from '@/components/Root'
import appCatalog from '@/components/blocks/catalog/Catalog'
import appDiff from '@/components/blocks/diff/Diff'
import appReviews from '@/components/blocks/reviews/Reviews'
import appFaq from '@/components/blocks/faq/Faq'

export default {
  name: 'app',
  components: {
    appRoot,
    appCatalog,
    appDiff,
    appReviews,
    appFaq
  }
}
</script>
