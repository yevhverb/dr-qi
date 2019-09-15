import Vue from 'vue'
import Vuex from 'vuex'
import media from './modules/media'
import preview from './modules/preview'
import catalog from './modules/catalog'
import diff from './modules/diff'
import about from './modules/about'
import reviews from './modules/reviews'
import order from './modules/order'
import photos from './modules/photos'
import faq from './modules/faq'
import contacts from './modules/contacts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  modules: {
    media,
    preview,
    catalog,
    diff,
    about,
    reviews,
    order,
    photos,
    faq,
    contacts
  }
})
