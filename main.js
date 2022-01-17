let app = new Vue ({
 
    el: "#root",
    data: {
        arrayToDo :[
            primoTo = {
                text :" Quarterly newsletter",
                todo : false ,
            },
            secondoTo = {
                text :" Recluiting blog post",
                todo : true ,
            },            
            terzoTo = {
                text :" Mobile app Luaunch",
                todo : true ,
            },            
            quartoTo = {
                text :" Interview John H.",
                todo : false ,
            },            
            quintoTo = {
                text :" Summit updates to mobile storefronts ",
                todo : true ,
            },            
            sestoTo = {
                text :"Schedule meeting with Alex ",
                todo : false ,
            },
        
        ],
        event:{ text: '', todo: ''},
    },
    methods: {
      
        deleteThis: function(index) {
            this.arrayToDo.splice(index,1)
        },
      
       
    },
    
});