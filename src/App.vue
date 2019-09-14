<template>
  <app-root>
    <main>
      <app-catalog/>
    </main>
  </app-root>
</template>

<script>
import appRoot from '@/components/Root'
import appCatalog from '@/components/blocks/catalog/Catalog'

export default {
  name: 'app',
  components: {
    appRoot,
    appCatalog
  }
}
</script>
