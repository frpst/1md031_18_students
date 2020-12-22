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
            chosenBurgers: [],
            hasordered: false,
            orders: {},
            ordernr: 0,
          },

    methods: {
         getNext: function() {
      this.ordernr += 1;
             return this.ordernr;
         },

        addOrder: function (event) {

            this.hasordered = true;
            this.customerDetails = valueReader();
            console.log(this.orders.T.details);
            console.log(this.customerDetails);
            console.log(this.chosenBurgers);
            /*var deliveryLocation = this.orders.T.details; */
            console.log(this.orders.T.details);
            socket.emit("addOrder", {orderId: this.getNext(),
                                     details: this.orders.T.details,
                                     orderItems: this.chosenBurgers,
                                     customerInformation: this.customerDetails});
            
            

            
        },

        
        displayOrder: function (event) {
            var T = {x: event.currentTarget.getBoundingClientRect().left,
                     y: event.currentTarget.getBoundingClientRect().top
                    };
            this.orders = {"T": {
                details: {
                    x: event.clientX - 10 - T.x,
                    y: event.clientY - 10 - T.y
                }
            }
               
                          };
             
        },
    
    }
});

       
            


                                  
            
       
            
        
        
    



    
