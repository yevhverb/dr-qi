<template>
  <app-root>
    <main>
      <app-catalog/>
      <app-diff/>
      <app-reviews/>
    </main>
  </app-root>
</template>

<script>
import appRoot from '@/components/Root'
import appCatalog from '@/components/blocks/catalog/Catalog'
import appDiff from '@/components/blocks/diff/Diff'
import appReviews from '@/components/blocks/reviews/Reviews'

export default {
  name: 'app',
  components: {
    appRoot,
    appCatalog,
    appDiff,
    appReviews
  }
}
</script>
