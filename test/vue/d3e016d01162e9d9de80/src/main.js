// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app

var firebaseConfig = {
  apiKey: 'AIzaSyCAPilvtT98dLRfQ0SdLAE8Q353tVE9rrk',
  authDomain: 'unique-aloe-277923.firebaseapp.com',
  databaseURL: 'https://unique-aloe-277923.firebaseio.com',
  projectId: 'unique-aloe-277923',
  storageBucket: 'unique-aloe-277923.appspot.com',
  messagingSenderId: '282639600551',
  appId: '1:282639600551:web:c51d7311b41fe097d88482',
  measurementId: 'G-XXM7W7NJFE'
}
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
