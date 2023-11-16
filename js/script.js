const { createApp }  = Vue;

createApp({
    data() {
        return{
            newTodo: "",
            task: [
                {Text: "fare i compiti" , done: false},
                {Text: "fare la spesa" , done: true},
                {Text: "fare il bucato", done: false},
            ],
            errorVisible: false,           
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo !== "") {
                this.task.unshift ({
                    text: this.newTodo,
                    done: false,
                });
                this.newTodo = "";
                
            }else{
                this.errorVisible = true;
            }
        },
        toggleDone(clickIndex) {
            this.task[clickIndex].done = !this.task[clickIndex].done;
        },
        deleteTodo (clickIndex) {
            this.task.splice(clickIndex, 1);
        }
      
    },
}).mount(" #app")