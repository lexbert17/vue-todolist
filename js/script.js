const { createApp }  = Vue;

createApp({
    data() {
        return{
            thingsToDo:["fare i compiti"],
            whatToDo:[]
            
        }
    },
    methods: {
        add: function() {
            this.whatToDo.push(thingsToDo);        
        }
      
    }
}).mount(" #app")