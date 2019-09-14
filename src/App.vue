<template>
  <app-root>
    <main>
      <app-catalog/>
      <app-diff/>
    </main>
  </app-root>
</template>

<script>
import appRoot from '@/components/Root'
import appCatalog from '@/components/blocks/catalog/Catalog'
import appDiff from '@/components/blocks/diff/Diff'

export default {
  name: 'app',
  components: {
    appRoot,
    appCatalog,
    appDiff
  }
}
</script>
