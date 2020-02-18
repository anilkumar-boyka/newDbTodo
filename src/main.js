// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from "firebase"
import store from "./store";

Vue.config.productionTip = false
 var firebaseConfig = {
    apiKey: "AIzaSyBM6GJVsiz7IsuKyzlI35mXxqVcSqKAhr8",
    authDomain: "finaltodo-7f83f.firebaseapp.com",
    databaseURL: "https://finaltodo-7f83f.firebaseio.com",
    projectId: "finaltodo-7f83f",
    storageBucket: "finaltodo-7f83f.appspot.com",
    messagingSenderId: "347306262074",
    appId: "1:347306262074:web:c3ff573d6e6b16ec1dff03",
    measurementId: "G-C42NFXZNXW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});



firebase.auth().onAuthStateChanged(user => {
	
  new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


});




   // let app;

// firebaseApp.auth().onAuthStateChanged(user => {
//     if (!app) {
//     app = new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount("#app");
//   }

// });