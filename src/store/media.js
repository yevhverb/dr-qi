export default {
  state: {
    width: window.innerWidth,
    mediaBp: [1190, 980, 769, 640, 480, 320]
  },
  getters: {
    mediaQuery: state => (width, n) => {
      if (width === 'min') {
        return state.width > state.mediaBp[`${n - 1}`];
      } else if (width === 'max') {
        return state.width < state.mediaBp[`${n - 1}`];
      }
    }
  },
  mutations: {
    SUBS_WINDOW_WIDTH(state) {
      window.addEventListener('resize', () => {
        state.width = window.innerWidth;
      });
    }
  }
}
