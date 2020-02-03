<template>
  <div>
  <!-- <div class="container login">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header logHeading">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div> -->


  <b-card

  header="Login"
   
   
    style="max-width: 40rem;
    margin:auto;"
    class="mb-2"
  >
  <div v-if="error" class="alert alert-danger">{{error}}</div>

  <form action="#" @submit.prevent="submit">
<!-- email -->

  <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>
              <!-- email ends-->
              <!-- password starts -->
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>
              <!-- password ends -->



   

    <b-button type="submit" variant="primary">Login</b-button>
     </form>
  </b-card>
</div>
  <!-- </div>
  </div> -->
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {

          // this.$router.replace({name:"todo"});
          // this.$router.replace({ name:"Dashboard" });
          this.$router.replace({ name:"todo" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
<style scoped>
  /*.login{
    margin-bottom:20px;
  }*/
  .logHeading{

  font-family: 'Pridi', serif;
  font-size: 15px;
}
</style>