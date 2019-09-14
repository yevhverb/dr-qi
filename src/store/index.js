import Vue from 'vue'
import Vuex from 'vuex'
import media from './media'
import catalog from './catalog'
import diff from './diff'
import reviews from './reviews'
import faq from './faq'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  modules: {
    media,
    catalog,
    diff,
    reviews,
    faq
  }
})
