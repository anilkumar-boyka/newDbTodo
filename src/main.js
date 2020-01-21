// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from "firebase"
import store from "./store";

Vue.config.productionTip = false
var firebaseConfig = {
    apiKey: "AIzaSyBHHGKQi8BueK02a2YP6YXzfUAeHmwDY70",
    authDomain: "login-66869.firebaseapp.com",
    databaseURL: "https://login-66869.firebaseio.com",
    projectId: "login-66869",
    storageBucket: "login-66869.appspot.com",
    messagingSenderId: "43451156736",
    appId: "1:43451156736:web:c5c6aa13c48683f50f4be5",
    measurementId: "G-8WY9PGCG9X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
