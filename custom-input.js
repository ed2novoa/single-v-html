Vue.component('custom-input',{
    props : ['value', 'nameType'],
    template : `
      <div class="col-6">
        <h3>{{nameType}} name:</h3>
        <input class="form-control" type="text" :value="value" @input="updateValue($event.target.value)"/>
      </div>
    `,
    methods : {
      updateValue : function(value) {
        this.$emit('input', value)
      }
    }
});
