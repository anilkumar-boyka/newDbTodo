<template>

  <nav class="navbar navbar-expand-md navbar-light navbar-laravel bg-light">
    <div class="container">


      <router-link to="/" class="navbar-brand top"><b-badge variant="dark">YOUR TO DO APP</b-badge> 
        <!-- <i class="fas fa-list"></i> -->

      </router-link>
      <button
        class="navbar-toggler" 
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label>
    
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- <ul class="navbar-nav mr-auto"></ul> -->
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item name"><i class="fas fa-user"></i> {{user.data.displayName}}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign Out <i class="fas fa-sign-out-alt"></i></a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link"> <b-badge variant="secondary">Login</b-badge></router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link"><b-badge variant="secondary">Register</b-badge></router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
          location.reload();
        });
    }
  }
};
</script>
<style>
.name{
  margin-top: 9px;
  padding-right: 20px;
}
.top:hover, .top:active {
  {font-size: 150%;}
}
</style>