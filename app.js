var app = new Vue({
  el : '#app',
  template : `
  <div class="container">
    <names-display :first="first" :last="last"/>
    <br><hr><br>
      <div class="row">
        <div class="col-6">
          <h3>First name:</h3>
          <input v-model="first" class="form-control" type="text" />
        </div>
        <div class="col-6">
          <h3>Last name:</h3>
          <input v-model="last" class="form-control" type="text" />
        </div>
      </div>
  </div>
  `,
  data : {
    first : '',
    last : ''
  }  
});
