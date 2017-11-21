Vue.component('names-form',{
    props : ['first', 'last'],
    template : `
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
    `    
});
