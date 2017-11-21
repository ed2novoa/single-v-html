Vue.component('names-display',{
    props : ['first', 'last'],
    template : `
      <div class="row">
        <div class="col-6">
          <h1 v-if="first || last">{{fullName}}</h1>
          <h1 v-else>Full Name</h1>
          <br>
          <h3>First name: {{first}}</h3>
          <h3>Last name: {{last}}</h3>
        </div>
      </div>
    `,
    computed : {
      fullName() {
        return `${this.first} ${this.last}`
      }
    }
});
