/*var vm = new Vue({
    el: '#meny',
    data: {food}

});


/*var vm2 = new Vue({
    el: '#order',
    methods:{ valueReader: function(event){
	 var theArray = []
    var inputs = document.querySelectorAll("form");
    var length_input = document.getElementById("form").elements.length

    for (var i=0;i<length_input;i++){
	var svar = document.getElementById("form").elements[i];
	if (svar.type!=="radio") {
	    theArray.push(svar.value)
	}
    }
	theArray.push(document.querySelector('input[type="radio"]:checked').value);
	console.log(theArray);
	return theArray;
    }},
    
    })*/
'use strict';
var socket = io();

var vm = new Vue({
    el: '#themenu',

    data: { customerDetails: [],
            food,
            checkBurgers: [],
            hasordered: false,
            count: 0,
            ordernr: "",
            orders: {}
          },

    methods: {

        addOrder: function (event) {
            this.hasordered = true;
            this.customerDetails = valueReader();
            
            console.log(customerDetails);
            var deliveryLocation = this.orders.T.details;
            
            socket.emit("addOrder", {details: deliveryLocation,
                                     orderItems: this.checkBurgers,
                                     customerInformation: this.customerDetails});
            
            

            
        },

        
        displayOrder: function (event) {
            var T = {x: event.currentTarget.getBoundingClientRect().left,
                     y: event.currentTarget.getBoundingClientRect().top
                    };
            this.orders = {
                "T": {
                    details: {x: event.clientX - 10 - T.x,
                              y: event.clientY - 10 - T.y
                             }
                             
                }
            }; 
        }
    }
});

       
            


                                  
            
       
            
        
        
    



    
