module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/sass/_options.sass'`
      }
    }
  }
};
