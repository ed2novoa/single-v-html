var app = new Vue({
  el : '#app',
  template : `
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1 v-if="first || last">{{fullName}}</h1>
        <h1 v-else>Full Name</h1>
        <br>
        <h3>First name: {{first}}</h3>
        <h3>Last name: {{last}}</h3>
      </div>
    </div>
    <br><hr><br>
    <div class="row">
      <custom-input name-type='First' v-model='first'/>
      <custom-input name-type='Last' v-model='last'/>
    </div>
  </div>
  `,
  data : {
    first : '',
    last : ''
  },
  computed : {
    fullName() {
      return `${this.first} ${this.last}`
    }
  }
});
