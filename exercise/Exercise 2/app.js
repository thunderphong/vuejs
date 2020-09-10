new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function(){
            alert('Alertttt!');
        },
        storeData: function(event){
            this.value = event.target.value;
        }
    }
})